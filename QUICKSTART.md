# 🚀 Démarrage Rapide - GLSL Hover Documentation

## 📦 Vous avez reçu

Une extension VSCode complète qui affiche la documentation des fonctions GLSL au survol !

## ✨ Contenu du Projet

```
glsl-hover-docs/
├── extension.js              # Code principal de l'extension
├── glsl-functions.js         # Base de données de 100+ fonctions GLSL
├── package.json              # Métadonnées de l'extension
├── README.md                 # Documentation complète
├── INSTALL.md                # Guide d'installation détaillé
├── CONTRIBUTING.md           # Guide pour contribuer
├── CHANGELOG.md              # Historique des versions
├── LICENSE                   # Licence MIT
├── build.sh                  # Script de build (Linux/Mac)
├── build.bat                 # Script de build (Windows)
├── example.frag              # Exemple de shader
├── test-all-functions.frag   # Fichier de test complet
├── .vscodeignore            # Fichiers à exclure du package
└── .gitignore               # Fichiers à ignorer par Git
```

## 🎯 Installation Rapide (3 étapes)

### Option A : Installation Automatique (Recommandé)

**Windows :**
```cmd
cd glsl-hover-docs
build.bat
```

**Linux/Mac :**
```bash
cd glsl-hover-docs
chmod +x build.sh
./build.sh
```

Puis dans VSCode :
1. Extensions (Ctrl+Shift+X)
2. ... → "Installer depuis VSIX..."
3. Sélectionnez `glsl-hover-docs-1.0.0.vsix`

### Option B : Installation Manuelle

**Windows :**
```cmd
xcopy /E /I glsl-hover-docs %USERPROFILE%\.vscode\extensions\glsl-hover-docs
```

**Linux/Mac :**
```bash
cp -r glsl-hover-docs ~/.vscode/extensions/
```

Puis dans VSCode : Ctrl+Shift+P → "Developer: Reload Window"

## ✅ Test Rapide

1. Ouvrez `test-all-functions.frag` dans VSCode
2. Passez la souris sur n'importe quelle fonction (ex: `mix`, `sin`, `normalize`)
3. 🎉 Un popup avec la documentation devrait apparaître !

## 📖 Fonctionnalités

### ✨ 100+ Fonctions Documentées

- **Trigonométriques** : sin, cos, tan, asin, acos, atan...
- **Exponentielles** : pow, exp, log, sqrt, inversesqrt...
- **Communes** : abs, floor, clamp, mix, step, smoothstep...
- **Géométriques** : length, dot, cross, normalize, reflect...
- **Matricielles** : transpose, determinant, inverse...
- **Textures** : texture, textureLod, texelFetch...
- Et bien plus !

### 📝 Pour Chaque Fonction

- ✅ Signature complète
- ✅ Description claire
- ✅ Détails techniques
- ✅ Exemples de code

### 🎨 Extensions Supportées

`.frag` `.vert` `.glsl` `.vs` `.fs` `.gs` `.comp` `.tesc` `.tese`

## 🎓 Utilisation

### Exemple Basique

```glsl
void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float len = length(uv);
    //          ^^^^^^ Survolez ici pour voir la doc !
    
    vec3 color = mix(vec3(1,0,0), vec3(0,0,1), 0.5);
    //           ^^^ Et ici aussi !
    
    gl_FragColor = vec4(color, 1.0);
}
```

### Commande Supplémentaire

Ctrl+Shift+P → "GLSL: List Functions" pour voir toutes les fonctions disponibles.

## 🔧 Configuration VSCode (Optionnel)

Ajoutez dans `settings.json` pour une meilleure reconnaissance :

```json
{
    "files.associations": {
        "*.frag": "glsl",
        "*.vert": "glsl",
        "*.glsl": "glsl"
    }
}
```

## 🐛 Dépannage

### L'extension ne s'active pas
- Vérifiez que VSCode est rechargé (Ctrl+Shift+P → "Reload Window")
- Vérifiez dans Extensions que "GLSL Hover Documentation" est activé

### Pas de popup au survol
- Vérifiez que le fichier a l'extension `.frag`, `.vert`, ou `.glsl`
- Vérifiez en bas à droite que le langage est "GLSL"
- Cliquez sur le langage et sélectionnez "GLSL" si nécessaire

### Erreur lors du build
```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
npm install -g @vscode/vsce
vsce package
```

## 🌟 Exemples Rapides

### 1. Interpolation de Couleurs
```glsl
vec3 red = vec3(1, 0, 0);
vec3 blue = vec3(0, 0, 1);
vec3 purple = mix(red, blue, 0.5);  // Survolez mix()
```

### 2. Normalisation de Vecteur
```glsl
vec3 direction = targetPos - currentPos;
vec3 normalized = normalize(direction);  // Survolez normalize()
```

### 3. Clamping
```glsl
float value = someCalculation();
float clamped = clamp(value, 0.0, 1.0);  // Survolez clamp()
```

### 4. Interpolation Lisse
```glsl
float gradient = smoothstep(0.0, 1.0, uv.x);  // Survolez smoothstep()
```

## 📚 Ressources Complémentaires

- **README.md** : Documentation complète
- **INSTALL.md** : Guide d'installation détaillé
- **CONTRIBUTING.md** : Comment ajouter des fonctions
- **example.frag** : Exemple de shader animé
- **test-all-functions.frag** : Test de toutes les fonctions

## 🤝 Contribuer

Vous voulez ajouter des fonctions ou améliorer la doc ?

1. Éditez `glsl-functions.js`
2. Ajoutez votre fonction avec le bon format
3. Testez localement
4. Partagez vos améliorations !

Voir `CONTRIBUTING.md` pour plus de détails.

## 💡 Astuces Pro

1. **Combinez avec d'autres extensions :**
   - "Shader languages support" pour la coloration syntaxe
   - "GLSL Canvas" pour prévisualiser vos shaders

2. **Raccourcis utiles :**
   - Ctrl+Espace : Autocomplétion
   - Ctrl+Shift+P : Palette de commandes
   - F12 : Aller à la définition (si disponible)

3. **Workflow optimal :**
   - Gardez `test-all-functions.frag` ouvert comme référence
   - Utilisez "GLSL: List Functions" pour découvrir de nouvelles fonctions
   - Survolez systématiquement les fonctions pour comprendre leurs paramètres

## 📞 Support

- 📖 Consultez README.md pour la documentation complète
- 🐛 Signalez les bugs via GitHub Issues
- 💬 Posez vos questions dans les discussions

## 🎉 C'est Parti !

Vous êtes prêt à coder des shaders GLSL avec une documentation toujours à portée de souris !

**Bon coding ! 🚀**

---

*Développé avec ❤️ pour la communauté shader*
