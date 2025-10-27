const vscode = require('vscode');
const glslFunctions = require('./glsl-functions.js');

/**
 * Parse les fonctions custom définies dans le document actuel
 * Lit les commentaires JSDoc-style pour extraire la documentation
 */
function parseCustomShaderFunctions(document) {
    const text = document.getText();
    const customFunctions = {};
    
    // Regex pour détecter les blocs de commentaires /** ... */ suivis d'une fonction GLSL
    // Capture : commentaire complet, type de retour, nom de fonction, paramètres
    const functionWithCommentRegex = /\/\*\*([\s\S]*?)\*\/\s*(\w+)\s+(\w+)\s*\((.*?)\)\s*{/g;
    
    let match;
    while ((match = functionWithCommentRegex.exec(text)) !== null) {
        const [fullMatch, commentBlock, returnType, funcName, params] = match;
        
        // Parser le bloc de commentaires
        const lines = commentBlock.split('\n').map(line => {
            // Enlever les * au début de chaque ligne
            return line.replace(/^\s*\*\s?/, '').trim();
        });
        
        // Extraire description (première ligne ou @description)
        let description = '';
        let currentSection = 'description';
        const paramDocs = [];
        let returnDoc = '';
        let examples = [];
        
        for (const line of lines) {
            if (line.startsWith('@description')) {
                description = line.replace('@description', '').trim();
            } else if (line.startsWith('@param')) {
                // Format: @param nomParam Description du paramètre
                const paramMatch = line.match(/@param\s+(\w+)\s+(.*)/);
                if (paramMatch) {
                    paramDocs.push({
                        name: paramMatch[1],
                        description: paramMatch[2]
                    });
                }
            } else if (line.startsWith('@return') || line.startsWith('@returns')) {
                returnDoc = line.replace(/@returns?/, '').trim();
            } else if (line.startsWith('@example')) {
                currentSection = 'example';
            } else if (currentSection === 'example' && line) {
                examples.push(line);
            } else if (!line.startsWith('@') && !description && line) {
                // Première ligne non-vide sans @ = description
                description = line;
            }
        }
        
        // Créer l'objet de documentation
        customFunctions[funcName] = {
            signature: `${returnType} ${funcName}(${params})`,
            description: description || 'Fonction personnalisée',
            details: returnDoc ? `Retour: ${returnDoc}` : '',
            params: paramDocs,
            examples: examples,
            isCustom: true // Flag pour indiquer que c'est une fonction custom
        };
    }
    
    return customFunctions;
}

/**
 * Crée un markdown formaté pour afficher la documentation d'une fonction
 */
function createHoverMarkdown(funcInfo, functionName) {
    const markdown = new vscode.MarkdownString();
    
    // Titre avec badge si fonction custom
    if (funcInfo.isCustom) {
        markdown.appendMarkdown('`🔧 Fonction personnalisée`\n\n');
    }
    
    // Signature en code block
    markdown.appendCodeblock(funcInfo.signature, 'glsl');
    
    // Description
    if (funcInfo.description) {
        markdown.appendMarkdown(`\n\n${funcInfo.description}`);
    }
    
    // Détails supplémentaires
    if (funcInfo.details) {
        markdown.appendMarkdown(`\n\n${funcInfo.details}`);
    }
    
    // Paramètres détaillés
    if (funcInfo.params && funcInfo.params.length > 0) {
        markdown.appendMarkdown('\n\n**Paramètres:**\n\n');
        funcInfo.params.forEach(param => {
            if (typeof param === 'string') {
                markdown.appendMarkdown(`- ${param}\n`);
            } else {
                markdown.appendMarkdown(`- \`${param.name}\`: ${param.description}\n`);
            }
        });
    }
    
    // Exemples
    if (funcInfo.examples && funcInfo.examples.length > 0) {
        markdown.appendMarkdown('\n\n**Exemples:**\n\n');
        funcInfo.examples.forEach(example => {
            markdown.appendCodeblock(example, 'glsl');
        });
    }
    
    markdown.isTrusted = true;
    return markdown;
}

/**
 * Cache pour les fonctions custom par document
 * Clé: URI du document, Valeur: { functions, version }
 */
const documentCache = new Map();

/**
 * Récupère les fonctions custom d'un document (avec cache)
 */
function getCustomFunctions(document) {
    const uri = document.uri.toString();
    const version = document.version;
    
    // Vérifier le cache
    const cached = documentCache.get(uri);
    if (cached && cached.version === version) {
        return cached.functions;
    }
    
    // Parser et mettre en cache
    const functions = parseCustomShaderFunctions(document);
    documentCache.set(uri, { functions, version });
    
    return functions;
}

/**
 * Active l'extension
 */
function activate(context) {
    console.log('Extension GLSL Hover Documentation activée');
    
    // Hover Provider pour la documentation
    const glslHoverProvider = vscode.languages.registerHoverProvider(
        ['glsl'], // Language ID
        {
            provideHover(document, position, token) {
                const range = document.getWordRangeAtPosition(position);
                if (!range) {
                    return null;
                }
                
                const word = document.getText(range);
                
                // D'abord chercher dans les fonctions GLSL natives
                let funcInfo = glslFunctions[word];
                
                // Si pas trouvé, chercher dans les fonctions custom du document
                if (!funcInfo) {
                    const customFunctions = getCustomFunctions(document);
                    funcInfo = customFunctions[word];
                }
                
                // Si trouvé, afficher la documentation
                if (funcInfo) {
                    const markdown = createHoverMarkdown(funcInfo, word);
                    return new vscode.Hover(markdown, range);
                }
                
                return null;
            }
        }
    );
    
    // Completion Provider pour l'autocomplétion
    const glslCompletionProvider = vscode.languages.registerCompletionItemProvider(
        ['glsl'],
        {
            provideCompletionItems(document, position, token, context) {
                const items = [];
                
                // Ajouter les fonctions GLSL natives
                for (const [funcName, funcInfo] of Object.entries(glslFunctions)) {
                    const item = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
                    item.detail = funcInfo.signature;
                    item.documentation = new vscode.MarkdownString(funcInfo.description);
                    items.push(item);
                }
                
                // Ajouter les fonctions custom du document
                const customFunctions = getCustomFunctions(document);
                for (const [funcName, funcInfo] of Object.entries(customFunctions)) {
                    const item = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
                    item.detail = funcInfo.signature + ' 🔧';
                    item.documentation = new vscode.MarkdownString(funcInfo.description);
                    items.push(item);
                }
                
                return items;
            }
        }
    );
    
    // Commande pour lister toutes les fonctions
    const listFunctionsCommand = vscode.commands.registerCommand(
        'glsl-hover-docs.listFunctions',
        () => {
            const editor = vscode.window.activeTextEditor;
            
            // Préparer la liste des fonctions natives
            const nativeFunctions = Object.keys(glslFunctions).sort();
            
            // Récupérer les fonctions custom si un éditeur est ouvert
            let customFunctions = [];
            if (editor && editor.document.languageId === 'glsl') {
                const customFuncs = getCustomFunctions(editor.document);
                customFunctions = Object.keys(customFuncs).sort();
            }
            
            // Créer les items pour le QuickPick
            const items = [
                {
                    label: `📚 Fonctions GLSL natives (${nativeFunctions.length})`,
                    kind: vscode.QuickPickItemKind.Separator
                }
            ];
            
            // Ajouter les fonctions natives
            nativeFunctions.forEach(funcName => {
                items.push({
                    label: funcName,
                    description: glslFunctions[funcName].signature,
                    detail: glslFunctions[funcName].description
                });
            });
            
            // Ajouter les fonctions custom si disponibles
            if (customFunctions.length > 0) {
                items.push({
                    label: `🔧 Fonctions personnalisées (${customFunctions.length})`,
                    kind: vscode.QuickPickItemKind.Separator
                });
                
                const customFuncs = getCustomFunctions(editor.document);
                customFunctions.forEach(funcName => {
                    items.push({
                        label: funcName + ' 🔧',
                        description: customFuncs[funcName].signature,
                        detail: customFuncs[funcName].description
                    });
                });
            }
            
            // Afficher le QuickPick
            vscode.window.showQuickPick(items, {
                placeHolder: 'Rechercher une fonction GLSL...',
                matchOnDescription: true,
                matchOnDetail: true
            }).then(selection => {
                if (selection && selection.label && !selection.kind) {
                    // Insérer la fonction sélectionnée dans l'éditeur
                    const funcName = selection.label.replace(' 🔧', '');
                    if (editor) {
                        editor.edit(editBuilder => {
                            editBuilder.insert(editor.selection.active, funcName);
                        });
                    }
                }
            });
        }
    );
    
    // Nettoyer le cache quand un document est fermé
    const documentCloseListener = vscode.workspace.onDidCloseTextDocument(document => {
        const uri = document.uri.toString();
        documentCache.delete(uri);
    });
    
    // Invalider le cache quand un document est modifié
    const documentChangeListener = vscode.workspace.onDidChangeTextDocument(event => {
        const uri = event.document.uri.toString();
        documentCache.delete(uri);
    });
    
    // Ajouter tous les disposables
    context.subscriptions.push(
        glslHoverProvider,
        glslCompletionProvider,
        listFunctionsCommand,
        documentCloseListener,
        documentChangeListener
    );
}

function deactivate() {
    // Nettoyer le cache
    documentCache.clear();
}

module.exports = {
    activate,
    deactivate
};