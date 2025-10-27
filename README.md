# GLSL Hover Documentation

Extension VSCode qui affiche la documentation des fonctions natives et personnalisées GLSL au survol de la souris.

## 📋 Fonctionnalités

- **Documentation au survol** : Passez la souris sur n'importe quelle fonction GLSL native pour voir sa documentation
- **Couverture complète** : Plus de 100 fonctions GLSL documentées
- **Support multi-extensions** : Fonctionne avec `.frag`, `.vert`, `.glsl`, `.vs`, `.fs`, `.gs`, `.comp`, `.tesc`, `.tese`
- **Exemples de code** : Chaque fonction inclut des exemples d'utilisation
- **Format Markdown** : Documentation claire et bien formatée

## 🎯 Fonctions supportées

L'extension documente toutes les catégories de fonctions GLSL :

- **Trigonométriques** : `sin`, `cos`, `tan`, `asin`, `acos`, `atan`, etc.
- **Exponentielles** : `pow`, `exp`, `log`, `sqrt`, `inversesqrt`, etc.
- **Communes** : `abs`, `sign`, `floor`, `ceil`, `fract`, `mod`, `min`, `max`, `clamp`, `mix`, `step`, `smoothstep`, etc.
- **Géométriques** : `length`, `distance`, `dot`, `cross`, `normalize`, `reflect`, `refract`, etc.
- **Matricielles** : `matrixCompMult`, `transpose`, `determinant`, `inverse`, etc.
- **Vectorielles** : `lessThan`, `greaterThan`, `equal`, `any`, `all`, etc.
- **Textures** : `texture`, `texture2D`, `textureCube`, `textureLod`, `texelFetch`, etc.
- **Dérivées** : `dFdx`, `dFdy`, `fwidth`
- **Packing** : `packUnorm2x16`, `unpackHalf2x16`, etc.

## 🚀 Installation

### Depuis les sources

1. Clonez ce dépôt ou téléchargez le dossier
2. Ouvrez le dossier dans un terminal
3. Installez les dépendances : `npm install`
4. Packagez l'extension : `npm run package`
5. Installez le fichier `.vsix` généré dans VSCode :
   - Ouvrez VSCode
   - Allez dans Extensions (Ctrl+Shift+X)
   - Cliquez sur les trois points en haut → "Installer depuis VSIX..."
   - Sélectionnez le fichier `glsl-hover-docs-1.0.0.vsix`

### Installation manuelle (développement)

1. Copiez le dossier dans votre répertoire d'extensions VSCode :
   - **Windows** : `%USERPROFILE%\.vscode\extensions\`
   - **macOS** : `~/.vscode/extensions/`
   - **Linux** : `~/.vscode/extensions/`
2. Rechargez VSCode (Ctrl+Shift+P → "Developer: Reload Window")

## 📖 Utilisation

1. Ouvrez un fichier shader (`.frag`, `.vert`, `.glsl`, etc.)
2. Passez la souris sur n'importe quelle fonction GLSL native
3. Un popup apparaît avec :
   - La signature de la fonction
   - Une description
   - Des détails techniques
   - Des exemples de code

### Exemple

```glsl
void main() {
    vec3 color = vec3(1.0, 0.0, 0.0);
    vec3 interpolated = mix(color, vec3(0.0, 0.0, 1.0), 0.5);
    //                  ^^^ Survolez "mix" pour voir la doc
}
```

### Commande supplémentaire

- **Afficher toutes les fonctions** : 
  - Ouvrez la palette de commandes (Ctrl+Shift+P)
  - Tapez "GLSL: List Functions"
  - Voir la liste complète des fonctions documentées

## 🔧 Configuration

Aucune configuration nécessaire ! L'extension fonctionne immédiatement après installation.

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour ajouter des fonctions ou améliorer la documentation :

1. Modifiez le fichier `glsl-functions.js`
2. Ajoutez vos fonctions avec le format :
```javascript
"nomFonction": {
    signature: "type nomFonction(params)",
    description: "Description courte",
    details: "Informations détaillées",
    examples: ["exemple1", "exemple2"]
}
```

## 📝 License

MIT License - Utilisez librement !

## 🐛 Bugs & Suggestions

Si vous rencontrez un problème ou avez une suggestion, n'hésitez pas à ouvrir une issue sur le dépôt GitHub.

## 📚 Ressources

- [GLSL Specification](https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language)
- [The Book of Shaders](https://thebookofshaders.com/)
- [Shadertoy](https://www.shadertoy.com/)

---

**Développé avec ❤️ pour la communauté shader**
