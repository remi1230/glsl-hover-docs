# 🌍 Guide Multilingue / Multilingual Guide

## 🇫🇷 Français

### Comment changer la langue de la documentation

L'extension GLSL Hover Documentation supporte maintenant **plusieurs langues** !

#### Option 1 : Détection Automatique (Par défaut)

Par défaut, l'extension détecte automatiquement la langue de VSCode et affiche la documentation dans cette langue.

**Langues supportées :**
- 🇫🇷 Français
- 🇬🇧 Anglais

#### Option 2 : Configuration Manuelle

Vous pouvez forcer une langue spécifique :

1. Ouvrez les paramètres VSCode : `Ctrl+,` (ou `Cmd+,` sur Mac)
2. Recherchez "GLSL Hover"
3. Trouvez le paramètre **"Glsl Hover Docs: Language"**
4. Choisissez :
   - **Auto** : Détection automatique (recommandé)
   - **English** : Force l'anglais
   - **Français** : Force le français

#### Option 3 : Via settings.json

Ajoutez dans votre `settings.json` :

```json
{
  "glslHoverDocs.language": "fr"  // ou "en" ou "auto"
}
```

### Structure des fichiers de langue

```
glsl-hover-docs/
├── i18n.js                    # Système de traduction
├── glsl-functions.js          # Loader multilingue
├── glsl-functions-fr.js       # Fonctions en français (103)
└── glsl-functions-en.js       # Fonctions en anglais (25)
```

### Ajouter une nouvelle langue

Pour ajouter une nouvelle langue (ex: espagnol) :

1. **Créez un fichier** `glsl-functions-es.js`
2. **Ajoutez les traductions** dans `i18n.js` :
```javascript
es: {
    signature: "Firma",
    description: "Descripción",
    details: "Detalles",
    examples: "Ejemplos",
    // ...
}
```
3. **Modifiez** `glsl-functions.js` pour charger le nouveau fichier
4. **Mettez à jour** `package.json` pour ajouter "es" dans l'enum

---

## 🇬🇧 English

### How to Change Documentation Language

The GLSL Hover Documentation extension now supports **multiple languages**!

#### Option 1: Automatic Detection (Default)

By default, the extension automatically detects VSCode's language and displays documentation in that language.

**Supported languages:**
- 🇫🇷 French
- 🇬🇧 English

#### Option 2: Manual Configuration

You can force a specific language:

1. Open VSCode settings: `Ctrl+,` (or `Cmd+,` on Mac)
2. Search for "GLSL Hover"
3. Find the **"Glsl Hover Docs: Language"** setting
4. Choose:
   - **Auto**: Automatic detection (recommended)
   - **English**: Force English
   - **Français**: Force French

#### Option 3: Via settings.json

Add to your `settings.json`:

```json
{
  "glslHoverDocs.language": "en"  // or "fr" or "auto"
}
```

### Language Files Structure

```
glsl-hover-docs/
├── i18n.js                    # Translation system
├── glsl-functions.js          # Multilingual loader
├── glsl-functions-fr.js       # Functions in French (103)
└── glsl-functions-en.js       # Functions in English (25)
```

### Adding a New Language

To add a new language (e.g., Spanish):

1. **Create a file** `glsl-functions-es.js`
2. **Add translations** in `i18n.js`:
```javascript
es: {
    signature: "Firma",
    description: "Descripción",
    details: "Detalles",
    examples: "Ejemplos",
    // ...
}
```
3. **Modify** `glsl-functions.js` to load the new file
4. **Update** `package.json` to add "es" in the enum

---

## 📊 État des Traductions / Translation Status

| Langue / Language | Fonctions / Functions | État / Status |
|-------------------|----------------------|---------------|
| 🇫🇷 Français      | 103                  | ✅ Complet    |
| 🇬🇧 English       | 25 (principales)     | 🚧 En cours   |
| 🇪🇸 Español       | 0                    | ❌ À faire    |
| 🇩🇪 Deutsch       | 0                    | ❌ À faire    |

**Contributions bienvenues !** / **Contributions welcome!**

---

## 🛠️ Pour les Développeurs / For Developers

### Ajouter des traductions de fonctions

Fichier : `glsl-functions-XX.js` (XX = code langue)

```javascript
module.exports = {
  "nomFonction": {
    signature: "type nomFonction(params)",
    description: "Description courte",
    details: "Informations détaillées",
    examples: ["exemple1", "exemple2"]
  }
};
```

### Ajouter des traductions d'interface

Fichier : `i18n.js`

```javascript
const translations = {
    xx: {  // Code de langue
        signature: "Traduction",
        description: "Traduction",
        // ...
    }
};
```

---

## 🎯 Prochaines Étapes / Next Steps

- [ ] Compléter les traductions anglaises (103 fonctions)
- [ ] Ajouter l'espagnol
- [ ] Ajouter l'allemand
- [ ] Ajouter le japonais
- [ ] Système de contribution communautaire

---

## 💡 Exemples / Examples

### Français
```
Signature: genType mix(genType x, genType y, genType a)
Description: Interpolation linéaire entre x et y.
Détails: Résultat: x * (1 - a) + y * a
Exemples: vec3 color = mix(red, blue, 0.5);
```

### English
```
Signature: genType mix(genType x, genType y, genType a)
Description: Linear interpolation between x and y.
Details: Result: x * (1 - a) + y * a
Examples: vec3 color = mix(red, blue, 0.5);
```

---

**Bonne documentation ! / Happy documenting!** 🚀
