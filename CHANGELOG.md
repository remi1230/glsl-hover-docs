# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

## [1.2.0] - 2025-10-27

### Ajouté
- 🌍 **Support multilingue fonctionnel !**
  - Détection automatique de la langue VSCode (robuste)
  - Version anglaise COMPLÈTE (50+ fonctions essentielles)
  - Version française complète (83 fonctions)
  - Fallback intelligent sur le français si l'anglais n'est pas disponible
- Nouveau système de chargement dynamique sans bloquer VSCode
- Fichier `glsl-functions-en.js` complet avec traductions professionnelles

### Modifié
- `glsl-functions.js` utilise maintenant un loader dynamique robuste
- Amélioration de la détection de langue (plus fiable)
- Meilleure gestion des erreurs de chargement

### Corrigé
- ✅ Le problème "glslFunctions is not defined" est résolu
- ✅ L'extension ne bloque plus VSCode au démarrage
- ✅ Chargement stable et rapide

## [1.1.0] - 2025-10-25 (Non publiée - problème technique)

### Tentative
- Première tentative de support multilingue (causait des erreurs)

## [1.0.0] - 2025-10-25

### Ajouté
- Documentation au survol pour plus de 100 fonctions GLSL natives
- Support des extensions `.frag`, `.vert`, `.glsl`, `.vs`, `.fs`, `.gs`, `.comp`, `.tesc`, `.tese`
- Catégories de fonctions :
  - Trigonométriques (sin, cos, tan, asin, acos, atan, etc.)
  - Exponentielles (pow, exp, log, sqrt, inversesqrt, etc.)
  - Communes (abs, sign, floor, ceil, fract, mod, min, max, clamp, mix, step, smoothstep, etc.)
  - Géométriques (length, distance, dot, cross, normalize, reflect, refract, etc.)
  - Matricielles (matrixCompMult, transpose, determinant, inverse, etc.)
  - Vectorielles et relationnelles (lessThan, greaterThan, equal, any, all, etc.)
  - Textures (texture, texture2D, textureCube, textureLod, texelFetch, etc.)
  - Dérivées (dFdx, dFdy, fwidth)
  - Packing/Unpacking (packUnorm2x16, unpackHalf2x16, etc.)
- Documentation formatée en Markdown avec signatures, descriptions, détails et exemples
- Commande "GLSL: List Functions" pour voir toutes les fonctions disponibles
- README complet avec guide d'utilisation

### Caractéristiques
- Aucune configuration requise
- Activation automatique pour les fichiers GLSL
- Interface claire et professionnelle
- Exemples de code pour chaque fonction
