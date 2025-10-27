#!/bin/bash

echo "🚀 Construction de l'extension GLSL Hover Documentation"
echo ""

# Vérifier que Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer depuis https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js détecté: $(node --version)"

# Vérifier que npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé."
    exit 1
fi

echo "✅ npm détecté: $(npm --version)"
echo ""

# Installer vsce si nécessaire
if ! command -v vsce &> /dev/null; then
    echo "📦 Installation de vsce..."
    npm install -g @vscode/vsce
    echo ""
fi

# Créer le package sans exécuter prepublish
echo "📦 Création du package VSIX..."
vsce package --no-dependencies

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Extension créée avec succès!"
    echo ""
    echo "📋 Pour installer l'extension:"
    echo "   1. Ouvrez VSCode"
    echo "   2. Allez dans Extensions (Ctrl+Shift+X)"
    echo "   3. Cliquez sur ... → 'Installer depuis VSIX...'"
    echo "   4. Sélectionnez le fichier .vsix créé"
    echo ""
    ls -lh *.vsix
else
    echo ""
    echo "❌ Erreur lors de la création du package"
    exit 1
fi
