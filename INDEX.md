# 🎉 Extension VSCode : GLSL Hover Documentation

Bienvenue ! Vous avez maintenant une extension VSCode complète qui affiche la documentation des fonctions GLSL directement au survol de la souris.

## 📋 Table des Matières

1. [Démarrage Rapide](#démarrage-rapide)
2. [Fichiers Importants](#fichiers-importants)
3. [Installation](#installation)
4. [Utilisation](#utilisation)
5. [Personnalisation](#personnalisation)

---

## 🚀 Démarrage Rapide

### En 3 étapes :

1. **Lisez** le [QUICKSTART.md](QUICKSTART.md) pour commencer immédiatement
2. **Installez** l'extension (voir [INSTALL.md](INSTALL.md))
3. **Testez** avec [test-all-functions.frag](test-all-functions.frag)

---

## 📁 Fichiers Importants

### 📖 Documentation

| Fichier | Description |
|---------|-------------|
| **[QUICKSTART.md](QUICKSTART.md)** | 🏁 Commencez ici ! Guide de démarrage rapide |
| **[README.md](README.md)** | 📘 Documentation complète de l'extension |
| **[INSTALL.md](INSTALL.md)** | 🔧 Instructions d'installation détaillées |
| **[PREVIEW.md](PREVIEW.md)** | 👀 Aperçu visuel de ce que vous verrez |
| **[CONTRIBUTING.md](CONTRIBUTING.md)** | 🤝 Comment ajouter des fonctions |
| **[CHANGELOG.md](CHANGELOG.md)** | 📝 Historique des versions |

### 💻 Code Source

| Fichier | Description |
|---------|-------------|
| **[extension.js](extension.js)** | Code principal de l'extension |
| **[glsl-functions.js](glsl-functions.js)** | Base de données de 100+ fonctions GLSL |
| **[package.json](package.json)** | Métadonnées et configuration |

### 🧪 Exemples et Tests

| Fichier | Description |
|---------|-------------|
| **[example.frag](example.frag)** | Exemple de shader animé |
| **[test-all-functions.frag](test-all-functions.frag)** | Test complet de toutes les fonctions |

### 🛠️ Scripts de Build

| Fichier | Plateforme | Usage |
|---------|-----------|-------|
| **[build.sh](build.sh)** | Linux/Mac | `./build.sh` |
| **[build.bat](build.bat)** | Windows | `build.bat` |

---

## 🔧 Installation

### Méthode Rapide (Windows)

```cmd
cd glsl-hover-docs
build.bat
```

### Méthode Rapide (Linux/Mac)

```bash
cd glsl-hover-docs
chmod +x build.sh
./build.sh
```

Puis installez le fichier `.vsix` généré dans VSCode.

### Installation Manuelle

Voir [INSTALL.md](INSTALL.md) pour toutes les méthodes d'installation.

---

## 📖 Utilisation

### Test Immédiat

1. Ouvrez [test-all-functions.frag](test-all-functions.frag) dans VSCode
2. Passez la souris sur n'importe quelle fonction (ex: `mix`, `sin`, `normalize`)
3. 🎉 Un popup avec la documentation apparaît !

### Dans Vos Propres Shaders

```glsl
void main() {
    vec3 color = mix(vec3(1,0,0), vec3(0,0,1), 0.5);
    //           ^^^ Survolez pour voir la doc !
}
```

---

## ✨ Fonctionnalités

### 100+ Fonctions Documentées

- ✅ Trigonométriques (sin, cos, tan, asin, acos, atan...)
- ✅ Exponentielles (pow, exp, log, sqrt, inversesqrt...)
- ✅ Communes (abs, floor, clamp, mix, step, smoothstep...)
- ✅ Géométriques (length, dot, cross, normalize, reflect...)
- ✅ Matricielles (transpose, determinant, inverse...)
- ✅ Textures (texture, textureLod, texelFetch...)
- ✅ Et bien plus !

### Pour Chaque Fonction

- 📝 **Signature** complète avec tous les paramètres
- 📖 **Description** claire et concise
- 🔍 **Détails** techniques et formules mathématiques
- 💡 **Exemples** de code pratiques

### Extensions Supportées

`.frag` `.vert` `.glsl` `.vs` `.fs` `.gs` `.comp` `.tesc` `.tese`

---

## 🎨 Personnalisation

### Ajouter Vos Propres Fonctions

1. Ouvrez [glsl-functions.js](glsl-functions.js)
2. Ajoutez votre fonction :

```javascript
"maFonction": {
    signature: "type maFonction(params)",
    description: "Description de ma fonction",
    details: "Informations détaillées",
    examples: ["float result = maFonction(1.0);"]
},
```

3. Rechargez VSCode

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails.

---

## 📚 Ressources Utiles

### Documentation GLSL Officielle

- [OpenGL Shading Language Spec](https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language)
- [Khronos OpenGL Wiki](https://www.khronos.org/opengl/wiki/)
- [The Book of Shaders](https://thebookofshaders.com/)

### Outils Complémentaires

- **Shader languages support** : Coloration syntaxique pour VSCode
- **GLSL Canvas** : Prévisualisation de shaders
- **ShaderToy** : Partage et découverte de shaders

---

## 🐛 Support & Contribution

### Besoin d'Aide ?

1. Consultez [INSTALL.md](INSTALL.md) pour le dépannage
2. Lisez [README.md](README.md) pour la documentation complète
3. Ouvrez une issue sur GitHub

### Contribuer

Vous voulez ajouter des fonctions ou améliorer la doc ?

1. Lisez [CONTRIBUTING.md](CONTRIBUTING.md)
2. Modifiez [glsl-functions.js](glsl-functions.js)
3. Testez avec [test-all-functions.frag](test-all-functions.frag)
4. Partagez vos améliorations !

---

## 📊 Structure du Projet

```
glsl-hover-docs/
│
├── 📖 Documentation
│   ├── INDEX.md                    ← Vous êtes ici
│   ├── QUICKSTART.md              ← Commencez ici !
│   ├── README.md                  ← Doc complète
│   ├── INSTALL.md                 ← Guide d'installation
│   ├── PREVIEW.md                 ← Aperçu visuel
│   ├── CONTRIBUTING.md            ← Guide de contribution
│   ├── CHANGELOG.md               ← Historique
│   └── LICENSE                    ← Licence MIT
│
├── 💻 Code Source
│   ├── extension.js               ← Code principal
│   ├── glsl-functions.js          ← Base de données
│   └── package.json               ← Config VSCode
│
├── 🧪 Exemples & Tests
│   ├── example.frag               ← Exemple de shader
│   └── test-all-functions.frag    ← Fichier de test
│
├── 🛠️ Build
│   ├── build.sh                   ← Script Linux/Mac
│   └── build.bat                  ← Script Windows
│
└── ⚙️ Configuration
    ├── .vscodeignore              ← Exclusions package
    └── .gitignore                 ← Exclusions Git
```

---

## 🎯 Feuille de Route

### Version 1.0.0 (Actuelle) ✅
- [x] 100+ fonctions GLSL documentées
- [x] Support multi-extensions (.frag, .vert, .glsl, etc.)
- [x] Documentation formatée en Markdown
- [x] Exemples de code pour chaque fonction
- [x] Scripts de build automatiques

### Versions Futures 🚀
- [ ] Support des fonctions de compute shader
- [ ] Intégration avec ShaderToy
- [ ] Snippets de code automatiques
- [ ] Support multilingue (EN/FR)
- [ ] Mode sombre/clair personnalisable

---

## 💡 Conseils Pro

### Workflow Optimal

1. **Installez** l'extension
2. **Ouvrez** vos shaders
3. **Survolez** les fonctions
4. **Codez** sans interruption !

### Combinaisons Gagnantes

- 🎨 **GLSL Hover Docs** (cette extension) → Documentation
- 🌈 **Shader languages support** → Coloration syntaxique
- 👁️ **GLSL Canvas** → Prévisualisation live
- 📚 **The Book of Shaders** → Apprendre GLSL

---

## 🏆 Avantages

### ✅ Plus besoin de :
- ❌ Chercher sur Google
- ❌ Ouvrir la documentation dans le navigateur
- ❌ Se souvenir de l'ordre des paramètres
- ❌ Quitter votre éditeur

### ✅ À la place :
- ✅ Documentation instantanée
- ✅ Exemples toujours disponibles
- ✅ Workflow ininterrompu
- ✅ Plus de productivité !

---

## 🎉 Prêt à Commencer ?

1. **Lisez** [QUICKSTART.md](QUICKSTART.md)
2. **Installez** avec [INSTALL.md](INSTALL.md)
3. **Testez** avec [test-all-functions.frag](test-all-functions.frag)
4. **Codez** vos shaders avec confiance !

---

## 📞 Contact & Liens

- 📧 Email : votre-email@example.com
- 🐙 GitHub : https://github.com/votre-username/glsl-hover-docs
- 🌐 Documentation : Voir README.md

---

## 📜 Licence

MIT License - Utilisez librement !

Voir [LICENSE](LICENSE) pour les détails.

---

**Développé avec ❤️ pour la communauté shader**

*Bon coding ! 🚀*
