# Guide de Contribution

Merci de votre intérêt pour contribuer à GLSL Hover Documentation ! 🎉

## 🤝 Comment Contribuer

Il existe plusieurs façons de contribuer à ce projet :

1. **Ajouter de nouvelles fonctions GLSL**
2. **Améliorer la documentation existante**
3. **Corriger des bugs**
4. **Améliorer le code**
5. **Ajouter des exemples**

## 📝 Ajouter une Nouvelle Fonction

### Étape 1 : Éditer glsl-functions.js

Ouvrez le fichier `glsl-functions.js` et ajoutez votre fonction en suivant ce format :

```javascript
"nomDeLaFonction": {
    signature: "type nomDeLaFonction(paramètres)",
    description: "Description courte et claire de ce que fait la fonction",
    details: "Informations détaillées, formules, restrictions, etc.",
    examples: [
        "float result = nomDeLaFonction(param);",
        "vec3 value = nomDeLaFonction(vec3(1.0), 2.0);"
    ]
},
```

### Exemple Complet

```javascript
"length": {
    signature: "float length(genType x)",
    description: "Retourne la longueur du vecteur x.",
    details: "Résultat: sqrt(x[0]² + x[1]² + ...)",
    examples: ["float len = length(vec3(1.0, 2.0, 2.0)); // 3.0"]
},
```

### Bonnes Pratiques

- **signature** : Utilisez `genType` pour les fonctions génériques qui acceptent float, vec2, vec3, vec4
- **description** : Soyez concis, une phrase suffit
- **details** : Ajoutez les formules mathématiques, restrictions, notes importantes
- **examples** : Donnez 1 à 3 exemples pratiques avec des commentaires

## 🔍 Catégories de Fonctions

Organisez votre fonction dans la bonne catégorie :

- **Trigonométriques** : sin, cos, tan, etc.
- **Exponentielles** : pow, exp, log, sqrt, etc.
- **Communes** : abs, floor, clamp, mix, etc.
- **Géométriques** : length, dot, cross, normalize, etc.
- **Matricielles** : transpose, determinant, inverse, etc.
- **Vectorielles** : lessThan, any, all, etc.
- **Textures** : texture, texelFetch, etc.
- **Dérivées** : dFdx, dFdy, fwidth
- **Autres** : créez une nouvelle catégorie si nécessaire

## 🧪 Tester Vos Modifications

### 1. Testez localement

```bash
# Copiez le dossier modifié dans VSCode extensions
cp -r glsl-hover-docs ~/.vscode/extensions/

# Rechargez VSCode
# Ctrl+Shift+P → "Developer: Reload Window"
```

### 2. Testez avec le fichier de test

Ouvrez `test-all-functions.frag` et vérifiez que votre fonction apparaît correctement au survol.

### 3. Vérifiez le formatage

- Les signatures sont-elles claires ?
- Les exemples fonctionnent-ils ?
- La description est-elle compréhensible ?

## 📚 Sources de Documentation

Pour trouver des informations sur les fonctions GLSL :

- [OpenGL Shading Language Specification](https://www.khronos.org/registry/OpenGL/specs/gl/GLSLangSpec.4.60.pdf)
- [OpenGL ES Shading Language Spec](https://www.khronos.org/files/opengles_shading_language.pdf)
- [Khronos OpenGL Wiki](https://www.khronos.org/opengl/wiki/)
- [Shaderific GLSL Functions](https://shaderific.com/glsl.html)
- [The Book of Shaders Glossary](https://thebookofshaders.com/glossary/)

## 🐛 Signaler un Bug

Pour signaler un bug :

1. Vérifiez que le bug n'a pas déjà été signalé
2. Créez une issue avec :
   - Description du problème
   - Étapes pour reproduire
   - Comportement attendu vs obtenu
   - Version de VSCode
   - Captures d'écran si pertinent

## 💡 Proposer une Amélioration

Pour proposer une amélioration :

1. Ouvrez une issue pour discuter de l'idée
2. Expliquez le problème que cela résout
3. Proposez une solution ou un design
4. Attendez les retours avant de commencer le développement

## 📋 Checklist Avant Soumission

Avant de soumettre vos modifications :

- [ ] J'ai testé mes changements localement
- [ ] La documentation est claire et sans fautes
- [ ] Les exemples fonctionnent
- [ ] J'ai vérifié le formatage Markdown
- [ ] J'ai mis à jour le CHANGELOG.md si nécessaire
- [ ] Le code suit les conventions existantes

## 🎨 Style de Code

### JavaScript

- Utilisez des noms de variables descriptifs
- Commentez le code complexe
- Suivez les conventions existantes
- Utilisez `const` par défaut, `let` si nécessaire

### Markdown

- Utilisez des headers clairs (#, ##, ###)
- Formatez le code avec ```javascript ou ```glsl
- Utilisez des listes pour la lisibilité
- Ajoutez des emoji pour améliorer la lecture 🚀

## 🔄 Workflow de Contribution

1. **Fork** le projet
2. **Clone** votre fork
3. **Créez** une branche (`git checkout -b feature/ma-fonction`)
4. **Commitez** vos changements (`git commit -m 'Ajout de la fonction xyz'`)
5. **Push** vers la branche (`git push origin feature/ma-fonction`)
6. **Ouvrez** une Pull Request

## 📖 Documentation

Si vous modifiez des fonctionnalités :

- Mettez à jour le README.md
- Ajoutez une entrée dans CHANGELOG.md
- Mettez à jour INSTALL.md si nécessaire

## 🎯 Priorités Actuelles

Fonctions GLSL qui manquent encore (contributions bienvenues !) :

- Fonctions de bruit (si supportées)
- Fonctions atomiques
- Fonctions barrières
- Fonctions d'image (imageLoad, imageStore, etc.)
- Fonctions de géométrie shader
- Fonctions de tessellation

## 💬 Questions ?

N'hésitez pas à :

- Ouvrir une issue pour poser des questions
- Demander de l'aide sur des fonctionnalités
- Proposer des améliorations

## 🙏 Remerciements

Merci de contribuer à rendre GLSL plus accessible à tous !

---

**Note** : En contribuant, vous acceptez que vos contributions soient distribuées sous la licence MIT du projet.
