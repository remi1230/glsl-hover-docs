// Traductions pour l'interface de l'extension
const translations = {
    fr: {
        signature: "Signature",
        description: "Description",
        details: "Détails",
        examples: "Exemples",
        functionsDocumented: "fonctions GLSL documentées",
        viewList: "Voir la liste",
        nativeFunctions: "Fonctions GLSL natives"
    },
    en: {
        signature: "Signature",
        description: "Description",
        details: "Details",
        examples: "Examples",
        functionsDocumented: "GLSL functions documented",
        viewList: "View list",
        nativeFunctions: "Native GLSL Functions"
    }
};

// Détecte la langue de VSCode
function detectVSCodeLanguage() {
    const vscodeLanguage = process.env.VSCODE_NLS_CONFIG;
    if (vscodeLanguage) {
        try {
            const config = JSON.parse(vscodeLanguage);
            const lang = config.locale;
            // Retourne le code de langue (ex: 'fr', 'en')
            return lang ? lang.split('-')[0] : 'en';
        } catch (e) {
            return 'en';
        }
    }
    return 'en';
}

// Récupère la langue configurée ou détectée
function getLanguage() {
    try {
        const vscode = require('vscode');
        const config = vscode.workspace.getConfiguration('glslHoverDocs');
        const userLang = config.get('language', 'auto');
        
        if (userLang === 'auto') {
            return detectVSCodeLanguage();
        }
        
        // Si la langue est supportée, la retourner, sinon anglais
        return translations[userLang] ? userLang : 'en';
    } catch (e) {
        // Si VSCode n'est pas disponible (tests), utiliser la détection auto
        return detectVSCodeLanguage();
    }
}

// Récupère les traductions pour la langue actuelle
function getTranslations() {
    const lang = getLanguage();
    return translations[lang] || translations.en;
}

module.exports = {
    translations,
    getLanguage,
    getTranslations
};
