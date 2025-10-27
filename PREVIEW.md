# 📸 Aperçu Visuel de l'Extension

## Comment ça marche ?

Lorsque vous passez la souris sur une fonction GLSL dans votre code, un popup apparaît avec toutes les informations.

## Exemple Visuel

### Code dans votre shader :

```glsl
void main() {
    vec3 color1 = vec3(1.0, 0.0, 0.0);
    vec3 color2 = vec3(0.0, 0.0, 1.0);
    vec3 result = mix(color1, color2, 0.5);
    //            ^^^
    //            Passez la souris ici !
}
```

### Popup qui apparaît au survol de `mix()` :

```
┌─────────────────────────────────────────────────────────┐
│ ### `mix()`                                             │
│                                                         │
│ **Signature:**                                          │
│                                                         │
│ genType mix(genType x, genType y, genType a)          │
│ genType mix(genType x, genType y, float a)            │
│                                                         │
│ **Description:**                                        │
│ Interpolation linéaire entre x et y.                   │
│                                                         │
│ **Détails:**                                            │
│ Résultat: x * (1 - a) + y * a.                        │
│ a est généralement dans [0, 1].                        │
│                                                         │
│ **Exemples:**                                           │
│                                                         │
│ vec3 color = mix(red, blue, 0.5); // violet           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Autres Exemples de Popups

### Pour `smoothstep()` :

```
┌─────────────────────────────────────────────────────────┐
│ ### `smoothstep()`                                      │
│                                                         │
│ **Signature:**                                          │
│ genType smoothstep(genType edge0, genType edge1,       │
│                    genType x)                          │
│ genType smoothstep(float edge0, float edge1,           │
│                    genType x)                          │
│                                                         │
│ **Description:**                                        │
│ Interpolation Hermite lisse entre 0 et 1.             │
│                                                         │
│ **Détails:**                                            │
│ Retourne 0 si x <= edge0, 1 si x >= edge1,            │
│ sinon interpolation lisse.                             │
│ Utilise la formule: t * t * (3 - 2 * t)               │
│ où t = clamp((x - edge0) / (edge1 - edge0), 0, 1)     │
│                                                         │
│ **Exemples:**                                           │
│ float smooth = smoothstep(0.0, 1.0, x);               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Pour `normalize()` :

```
┌─────────────────────────────────────────────────────────┐
│ ### `normalize()`                                       │
│                                                         │
│ **Signature:**                                          │
│ genType normalize(genType x)                           │
│                                                         │
│ **Description:**                                        │
│ Retourne un vecteur de même direction que x mais de   │
│ longueur 1.                                            │
│                                                         │
│ **Détails:**                                            │
│ Résultat: x / length(x).                               │
│ Indéfini si length(x) = 0.                            │
│                                                         │
│ **Exemples:**                                           │
│ vec3 dir = normalize(targetPos - currentPos);          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Pour `texture()` :

```
┌─────────────────────────────────────────────────────────┐
│ ### `texture()`                                         │
│                                                         │
│ **Signature:**                                          │
│ gvec4 texture(gsampler2D sampler, vec2 P [, float])   │
│ gvec4 texture(gsampler3D sampler, vec3 P [, float])   │
│ gvec4 texture(gsamplerCube sampler, vec3 P [, float]) │
│                                                         │
│ **Description:**                                        │
│ Échantillonne une texture.                             │
│                                                         │
│ **Détails:**                                            │
│ P: coordonnées de texture (normalisées [0,1]).        │
│ bias: décalage de niveau mipmap (optionnel, fragment  │
│       shader seulement).                               │
│                                                         │
│ **Exemples:**                                           │
│ vec4 color = texture(myTexture, uv);                  │
│ vec4 color = texture(myTexture, uv, -1.0);            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## 🎨 Avantages Visuels

### ✨ Formatage Markdown
- Texte en gras pour les sections importantes
- Code formaté avec coloration syntaxique
- Hiérarchie claire avec des titres

### 📚 Organisation
- Signature en haut (toujours visible)
- Description concise
- Détails techniques pour approfondir
- Exemples pratiques en bas

### 🚀 Accessibilité
- Pas besoin de quitter votre code
- Information instantanée
- Pas de recherche Google nécessaire
- Documentation toujours à jour

## 💡 Cas d'Usage Pratiques

### 1. Vous découvrez une nouvelle fonction
```glsl
// "Hmm, c'est quoi faceforward déjà ?"
vec3 oriented = faceforward(normal, incident, normal);
//              ^^^^^^^^^^^ Survolez pour découvrir !
```

### 2. Vous vérifiez l'ordre des paramètres
```glsl
// "C'est mix(a, b, t) ou mix(t, a, b) ?"
vec3 result = mix(color1, color2, factor);
//            ^^^ La signature vous le rappelle !
```

### 3. Vous apprenez les détails mathématiques
```glsl
// "Comment smoothstep calcule-t-il exactement ?"
float gradient = smoothstep(0.0, 1.0, x);
//               ^^^^^^^^^^ Les détails sont là !
```

### 4. Vous copiez un exemple
```glsl
// "Comment utiliser reflect() déjà ?"
vec3 refl = reflect(incident, normal);
//          ^^^^^^^ Les exemples montrent comment !
```

## 🎯 Workflow Optimal

1. **Écrire** votre code GLSL
2. **Survoler** les fonctions dont vous n'êtes pas sûr
3. **Lire** la documentation instantanée
4. **Continuer** sans interruption

**Pas de changement de fenêtre, pas de recherche web, juste du code fluide !**

---

*Cette extension transforme votre expérience de développement GLSL* 🚀
