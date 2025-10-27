// Loader multilingue pour les fonctions GLSL
// Détection automatique de la langue VSCode

function getVSCodeLanguage() {
    try {
        // Essayer de détecter la langue via l'environnement
        const vscodeNlsConfig = process.env.VSCODE_NLS_CONFIG;
        if (vscodeNlsConfig) {
            const config = JSON.parse(vscodeNlsConfig);
            const locale = config.locale || 'en';
            // Extraire le code de langue (ex: 'fr-FR' -> 'fr')
            return locale.split('-')[0].toLowerCase();
        }
    } catch (error) {
        // En cas d'erreur, continuer avec la détection par défaut
    }
    
    // Fallback: essayer de détecter via navigator si disponible
    if (typeof navigator !== 'undefined' && navigator.language) {
        return navigator.language.split('-')[0].toLowerCase();
    }
    
    // Dernier fallback: anglais
    return 'en';
}

// Charger les fonctions selon la langue
function loadFunctions() {
    const lang = getVSCodeLanguage();
    
    try {
        if (lang === 'fr') {
            // Charger la version française complète (83 fonctions)
            return require('./glsl-functions-fr');
        } else {
            // Pour toutes les autres langues, charger l'anglais
            // Fallback sur le français si l'anglais n'est pas disponible
            try {
                return require('./glsl-functions-en');
            } catch (e) {
                // Si l'anglais n'est pas disponible, utiliser le français
                console.log('English version not available, falling back to French');
                return require('./glsl-functions-fr');
            }
        }
    } catch (error) {
        // En cas de problème, charger le français (version la plus complète)
        console.error('Error loading language functions, falling back to French:', error);
        return require('./glsl-functions-fr');
    }
}

// Exporter directement le résultat
module.exports = loadFunctions();
