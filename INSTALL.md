# Guide d'Installation - GLSL Hover Documentation

Ce guide vous explique comment installer et utiliser l'extension VSCode pour la documentation GLSL.

## 📦 Prérequis

- Visual Studio Code installé
- Node.js et npm installés (pour compiler l'extension)

## 🔧 Méthode 1 : Installation depuis le package VSIX (Recommandé)

### Étape 1 : Compiler l'extension

Ouvrez un terminal dans le dossier `glsl-hover-docs` et exécutez :

```bash
# Installer les dépendances
npm install

# Installer vsce globalement (si pas déjà fait)
npm install -g @vscode/vsce

# Créer le package VSIX
vsce package
```

Cela va créer un fichier `glsl-hover-docs-1.0.0.vsix`.

### Étape 2 : Installer dans VSCode

1. Ouvrez Visual Studio Code
2. Allez dans l'onglet Extensions (Ctrl+Shift+X ou Cmd+Shift+X sur Mac)
3. Cliquez sur les trois points `...` en haut de la barre latérale
4. Sélectionnez "Installer depuis VSIX..."
5. Naviguez vers le fichier `glsl-hover-docs-1.0.0.vsix` et sélectionnez-le
6. VSCode va installer l'extension
7. Rechargez VSCode si demandé

## 🛠️ Méthode 2 : Installation manuelle (Mode développement)

Si vous voulez tester ou modifier l'extension :

### Windows

```bash
# Copiez le dossier dans le répertoire des extensions
xcopy /E /I glsl-hover-docs %USERPROFILE%\.vscode\extensions\glsl-hover-docs
```

### macOS / Linux

```bash
# Copiez le dossier dans le répertoire des extensions
cp -r glsl-hover-docs ~/.vscode/extensions/
```

Ensuite, rechargez VSCode :
1. Ouvrez la palette de commandes (Ctrl+Shift+P ou Cmd+Shift+P)
2. Tapez "Developer: Reload Window"
3. Appuyez sur Entrée

## ✅ Vérification de l'installation

1. Ouvrez le fichier `example.frag` fourni avec l'extension
2. Passez la souris sur une fonction GLSL comme `mix`, `smoothstep`, ou `length`
3. Un popup devrait apparaître avec la documentation

## 🎯 Test rapide

Créez un nouveau fichier avec l'extension `.frag` et écrivez :

```glsl
void main() {
    float x = sin(1.0);
    vec3 color = mix(vec3(1.0), vec3(0.0), 0.5);
}
```

Passez la souris sur `sin` et `mix` - vous devriez voir la documentation !

## 🐛 Dépannage

### L'extension n'apparaît pas

- Vérifiez que VSCode a bien été rechargé
- Allez dans Extensions et cherchez "GLSL Hover Documentation"
- Vérifiez que l'extension est activée (pas de bouton "Activer")

### Pas de popup au survol

- Vérifiez que le fichier a bien l'extension `.frag`, `.vert`, ou `.glsl`
- Regardez en bas à droite de VSCode : le langage doit être "GLSL"
- Si ce n'est pas le cas, cliquez dessus et sélectionnez "GLSL"

### Erreur lors de la compilation

Si `vsce package` échoue :

```bash
# Réinstallez les dépendances
rm -rf node_modules package-lock.json
npm install

# Réessayez
vsce package
```

## 📝 Configuration du langage GLSL

Si VSCode ne reconnaît pas automatiquement vos fichiers shader :

1. Ouvrez un fichier `.frag`
2. Cliquez sur le sélecteur de langage en bas à droite
3. Tapez "GLSL" et sélectionnez-le
4. VSCode se souviendra de cette association

Vous pouvez aussi ajouter dans vos settings VSCode (`settings.json`) :

```json
{
    "files.associations": {
        "*.frag": "glsl",
        "*.vert": "glsl",
        "*.glsl": "glsl",
        "*.vs": "glsl",
        "*.fs": "glsl"
    }
}
```

## 🎉 C'est tout !

L'extension est maintenant installée et prête à l'emploi. Profitez de la documentation au survol !

## 📚 Ressources supplémentaires

- Consultez le README.md pour plus d'informations
- Regardez le CHANGELOG.md pour voir les nouveautés
- Le fichier example.frag contient des exemples de code

## 💡 Astuces

- Utilisez Ctrl+Espace pour l'autocomplétion (fournie par d'autres extensions GLSL)
- Combinez cette extension avec "Shader languages support" pour la coloration syntaxe
- Pour voir toutes les fonctions : Ctrl+Shift+P → "GLSL: List Functions"
