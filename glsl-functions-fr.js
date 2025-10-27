const glslFunctions = {
  // Fonctions trigonométriques
  "radians": {
    signature: "genType radians(genType degrees)",
    description: "Convertit des degrés en radians.",
    details: "La valeur retournée est `(π / 180) * degrees`.",
    examples: ["float angleRad = radians(90.0); // π/2"]
  },
  "degrees": {
    signature: "genType degrees(genType radians)",
    description: "Convertit des radians en degrés.",
    details: "La valeur retournée est `(180 / π) * radians`.",
    examples: ["float angleDeg = degrees(3.14159); // ~180"]
  },
  "sin": {
    signature: "genType sin(genType angle)",
    description: "Retourne le sinus d'un angle en radians.",
    details: "Fonctionne avec float, vec2, vec3 ou vec4. Chaque composant est traité séparément.",
    examples: ["float y = sin(time);"]
  },
  "cos": {
    signature: "genType cos(genType angle)",
    description: "Retourne le cosinus d'un angle en radians.",
    details: "Fonctionne avec float, vec2, vec3 ou vec4. Chaque composant est traité séparément.",
    examples: ["float x = cos(time);"]
  },
  "tan": {
    signature: "genType tan(genType angle)",
    description: "Retourne la tangente d'un angle en radians.",
    details: "Fonctionne avec float, vec2, vec3 ou vec4.",
    examples: ["float t = tan(angle);"]
  },
  "asin": {
    signature: "genType asin(genType x)",
    description: "Retourne l'arc sinus de x en radians.",
    details: "Résultat dans la plage [-π/2, π/2]. x doit être dans [-1, 1].",
    examples: ["float angle = asin(0.5); // π/6"]
  },
  "acos": {
    signature: "genType acos(genType x)",
    description: "Retourne l'arc cosinus de x en radians.",
    details: "Résultat dans la plage [0, π]. x doit être dans [-1, 1].",
    examples: ["float angle = acos(0.0); // π/2"]
  },
  "atan": {
    signature: "genType atan(genType y, genType x)\ngenType atan(genType y_over_x)",
    description: "Retourne l'arc tangente.",
    details: "Version à 2 paramètres: retourne l'angle dont la tangente est y/x.\nVersion à 1 paramètre: retourne l'angle dont la tangente est y_over_x.",
    examples: [
      "float angle = atan(y, x); // prend en compte le quadrant",
      "float angle = atan(1.0); // π/4"
    ]
  },
  "sinh": {
    signature: "genType sinh(genType x)",
    description: "Retourne le sinus hyperbolique de x.",
    details: "Résultat: (e^x - e^(-x)) / 2",
    examples: ["float sh = sinh(1.0);"]
  },
  "cosh": {
    signature: "genType cosh(genType x)",
    description: "Retourne le cosinus hyperbolique de x.",
    details: "Résultat: (e^x + e^(-x)) / 2",
    examples: ["float ch = cosh(1.0);"]
  },
  "tanh": {
    signature: "genType tanh(genType x)",
    description: "Retourne la tangente hyperbolique de x.",
    details: "Résultat: sinh(x) / cosh(x)",
    examples: ["float th = tanh(1.0);"]
  },
  "asinh": {
    signature: "genType asinh(genType x)",
    description: "Retourne l'arc sinus hyperbolique de x.",
    examples: ["float ash = asinh(1.0);"]
  },
  "acosh": {
    signature: "genType acosh(genType x)",
    description: "Retourne l'arc cosinus hyperbolique de x.",
    details: "x doit être >= 1.",
    examples: ["float ach = acosh(2.0);"]
  },
  "atanh": {
    signature: "genType atanh(genType x)",
    description: "Retourne l'arc tangente hyperbolique de x.",
    details: "x doit être dans ]-1, 1[.",
    examples: ["float ath = atanh(0.5);"]
  },

  // Fonctions exponentielles
  "pow": {
    signature: "genType pow(genType x, genType y)",
    description: "Retourne x élevé à la puissance y.",
    details: "Résultat: x^y. Indéfini si x < 0 ou si x = 0 et y <= 0.",
    examples: ["float squared = pow(value, 2.0);"]
  },
  "exp": {
    signature: "genType exp(genType x)",
    description: "Retourne la constante naturelle e élevée à la puissance x.",
    details: "Résultat: e^x",
    examples: ["float result = exp(1.0); // e ≈ 2.718"]
  },
  "log": {
    signature: "genType log(genType x)",
    description: "Retourne le logarithme naturel de x.",
    details: "Résultat: ln(x). x doit être > 0.",
    examples: ["float lg = log(10.0);"]
  },
  "exp2": {
    signature: "genType exp2(genType x)",
    description: "Retourne 2 élevé à la puissance x.",
    details: "Résultat: 2^x",
    examples: ["float result = exp2(3.0); // 8.0"]
  },
  "log2": {
    signature: "genType log2(genType x)",
    description: "Retourne le logarithme en base 2 de x.",
    details: "Résultat: log₂(x). x doit être > 0.",
    examples: ["float lg2 = log2(8.0); // 3.0"]
  },
  "sqrt": {
    signature: "genType sqrt(genType x)",
    description: "Retourne la racine carrée de x.",
    details: "Résultat: √x. x doit être >= 0.",
    examples: ["float root = sqrt(16.0); // 4.0"]
  },
  "inversesqrt": {
    signature: "genType inversesqrt(genType x)",
    description: "Retourne l'inverse de la racine carrée de x.",
    details: "Résultat: 1/√x. Plus rapide que 1.0/sqrt(x). x doit être > 0.",
    examples: ["float invRoot = inversesqrt(4.0); // 0.5"]
  },

  // Fonctions communes
  "abs": {
    signature: "genType abs(genType x)\ngenIType abs(genIType x)",
    description: "Retourne la valeur absolue de x.",
    details: "Résultat: x si x >= 0, sinon -x.",
    examples: ["float positive = abs(-5.0); // 5.0"]
  },
  "sign": {
    signature: "genType sign(genType x)\ngenIType sign(genIType x)",
    description: "Retourne le signe de x.",
    details: "Résultat: 1.0 si x > 0, 0.0 si x = 0, -1.0 si x < 0.",
    examples: ["float s = sign(-3.14); // -1.0"]
  },
  "floor": {
    signature: "genType floor(genType x)",
    description: "Retourne le plus grand entier inférieur ou égal à x.",
    details: "Arrondit vers le bas.",
    examples: ["float f = floor(3.7); // 3.0"]
  },
  "ceil": {
    signature: "genType ceil(genType x)",
    description: "Retourne le plus petit entier supérieur ou égal à x.",
    details: "Arrondit vers le haut.",
    examples: ["float c = ceil(3.2); // 4.0"]
  },
  "fract": {
    signature: "genType fract(genType x)",
    description: "Retourne la partie fractionnaire de x.",
    details: "Résultat: x - floor(x). Toujours dans [0, 1).",
    examples: ["float f = fract(3.7); // 0.7"]
  },
  "mod": {
    signature: "genType mod(genType x, float y)\ngenType mod(genType x, genType y)",
    description: "Retourne le modulo de x divisé par y.",
    details: "Résultat: x - y * floor(x/y)",
    examples: ["float m = mod(5.5, 2.0); // 1.5"]
  },
  "min": {
    signature: "genType min(genType x, genType y)\ngenType min(genType x, float y)",
    description: "Retourne le minimum entre x et y.",
    details: "Compare composant par composant pour les vecteurs.",
    examples: ["float minimum = min(3.0, 5.0); // 3.0"]
  },
  "max": {
    signature: "genType max(genType x, genType y)\ngenType max(genType x, float y)",
    description: "Retourne le maximum entre x et y.",
    details: "Compare composant par composant pour les vecteurs.",
    examples: ["float maximum = max(3.0, 5.0); // 5.0"]
  },
  "clamp": {
    signature: "genType clamp(genType x, genType minVal, genType maxVal)\ngenType clamp(genType x, float minVal, float maxVal)",
    description: "Limite la valeur x entre minVal et maxVal.",
    details: "Résultat: min(max(x, minVal), maxVal)",
    examples: ["float clamped = clamp(value, 0.0, 1.0);"]
  },
  "mix": {
    signature: "genType mix(genType x, genType y, genType a)\ngenType mix(genType x, genType y, float a)",
    description: "Interpolation linéaire entre x et y.",
    details: "Résultat: x * (1 - a) + y * a. a est généralement dans [0, 1].",
    examples: ["vec3 color = mix(red, blue, 0.5); // violet"]
  },
  "step": {
    signature: "genType step(genType edge, genType x)\ngenType step(float edge, genType x)",
    description: "Fonction de seuil.",
    details: "Résultat: 0.0 si x < edge, sinon 1.0.",
    examples: ["float s = step(0.5, x); // 0 ou 1"]
  },
  "smoothstep": {
    signature: "genType smoothstep(genType edge0, genType edge1, genType x)\ngenType smoothstep(float edge0, float edge1, genType x)",
    description: "Interpolation Hermite lisse entre 0 et 1.",
    details: "Retourne 0 si x <= edge0, 1 si x >= edge1, sinon interpolation lisse.\nUtilise la formule: t * t * (3 - 2 * t) où t = clamp((x - edge0) / (edge1 - edge0), 0, 1)",
    examples: ["float smooth = smoothstep(0.0, 1.0, x);"]
  },
  "isnan": {
    signature: "bvec isnan(genType x)",
    description: "Vérifie si x est NaN (Not a Number).",
    details: "Retourne true pour chaque composant qui est NaN.",
    examples: ["bool check = isnan(value);"]
  },
  "isinf": {
    signature: "bvec isinf(genType x)",
    description: "Vérifie si x est l'infini.",
    details: "Retourne true pour chaque composant qui est infini (positif ou négatif).",
    examples: ["bool check = isinf(value);"]
  },
  "round": {
    signature: "genType round(genType x)",
    description: "Arrondit x à l'entier le plus proche.",
    details: "Les valeurs à mi-chemin (.5) sont arrondies vers l'entier pair.",
    examples: ["float r = round(3.5); // 4.0"]
  },
  "roundEven": {
    signature: "genType roundEven(genType x)",
    description: "Arrondit x à l'entier pair le plus proche.",
    details: "Identique à round() dans GLSL.",
    examples: ["float r = roundEven(3.5); // 4.0"]
  },
  "trunc": {
    signature: "genType trunc(genType x)",
    description: "Tronque x vers zéro.",
    details: "Retourne l'entier le plus proche de x dont la valeur absolue n'est pas supérieure à celle de x.",
    examples: ["float t = trunc(3.7); // 3.0", "float t2 = trunc(-3.7); // -3.0"]
  },
  "modf": {
    signature: "genType modf(genType x, out genType i)",
    description: "Sépare x en parties entière et fractionnaire.",
    details: "La partie entière est stockée dans i, la partie fractionnaire est retournée.",
    examples: ["float frac = modf(3.7, intPart); // frac=0.7, intPart=3.0"]
  },

  // Fonctions géométriques
  "length": {
    signature: "float length(genType x)",
    description: "Retourne la longueur du vecteur x.",
    details: "Résultat: sqrt(x[0]² + x[1]² + ...)",
    examples: ["float len = length(vec3(1.0, 2.0, 2.0)); // 3.0"]
  },
  "distance": {
    signature: "float distance(genType p0, genType p1)",
    description: "Retourne la distance entre deux points.",
    details: "Résultat: length(p0 - p1)",
    examples: ["float dist = distance(pos1, pos2);"]
  },
  "dot": {
    signature: "float dot(genType x, genType y)",
    description: "Retourne le produit scalaire de x et y.",
    details: "Résultat: x[0]*y[0] + x[1]*y[1] + ...",
    examples: ["float d = dot(vec3(1,0,0), vec3(0,1,0)); // 0.0"]
  },
  "cross": {
    signature: "vec3 cross(vec3 x, vec3 y)",
    description: "Retourne le produit vectoriel de x et y.",
    details: "Fonctionne uniquement avec vec3. Retourne un vecteur perpendiculaire à x et y.",
    examples: ["vec3 normal = cross(tangent, bitangent);"]
  },
  "normalize": {
    signature: "genType normalize(genType x)",
    description: "Retourne un vecteur de même direction que x mais de longueur 1.",
    details: "Résultat: x / length(x). Indéfini si length(x) = 0.",
    examples: ["vec3 dir = normalize(targetPos - currentPos);"]
  },
  "faceforward": {
    signature: "genType faceforward(genType N, genType I, genType Nref)",
    description: "Oriente un vecteur pour qu'il pointe dans la bonne direction.",
    details: "Retourne N si dot(Nref, I) < 0, sinon -N.",
    examples: ["vec3 oriented = faceforward(normal, incident, normal);"]
  },
  "reflect": {
    signature: "genType reflect(genType I, genType N)",
    description: "Calcule le vecteur de réflexion.",
    details: "I: vecteur incident, N: normale de surface (doit être normalisée).\nRésultat: I - 2 * dot(N, I) * N",
    examples: ["vec3 refl = reflect(viewDir, normal);"]
  },
  "refract": {
    signature: "genType refract(genType I, genType N, float eta)",
    description: "Calcule le vecteur de réfraction.",
    details: "I: vecteur incident, N: normale (normalisée), eta: ratio des indices de réfraction.\nUtilise la loi de Snell-Descartes.",
    examples: ["vec3 refr = refract(viewDir, normal, 1.0/1.33);"]
  },

  // Fonctions matricielles
  "matrixCompMult": {
    signature: "mat matrixCompMult(mat x, mat y)",
    description: "Multiplie deux matrices composant par composant.",
    details: "Attention: ce n'est PAS le produit matriciel standard (utilisez * pour ça).",
    examples: ["mat3 result = matrixCompMult(mat1, mat2);"]
  },
  "outerProduct": {
    signature: "mat2 outerProduct(vec2 c, vec2 r)\nmat3 outerProduct(vec3 c, vec3 r)\nmat4 outerProduct(vec4 c, vec4 r)",
    description: "Produit externe de deux vecteurs.",
    details: "Traite le premier paramètre comme un vecteur colonne et le second comme un vecteur ligne.",
    examples: ["mat3 m = outerProduct(vec3(1,2,3), vec3(4,5,6));"]
  },
  "transpose": {
    signature: "mat2 transpose(mat2 m)\nmat3 transpose(mat3 m)\nmat4 transpose(mat4 m)",
    description: "Retourne la transposée de la matrice m.",
    details: "Échange lignes et colonnes.",
    examples: ["mat4 transposed = transpose(matrix);"]
  },
  "determinant": {
    signature: "float determinant(mat2 m)\nfloat determinant(mat3 m)\nfloat determinant(mat4 m)",
    description: "Retourne le déterminant de la matrice m.",
    examples: ["float det = determinant(matrix);"]
  },
  "inverse": {
    signature: "mat2 inverse(mat2 m)\nmat3 inverse(mat3 m)\nmat4 inverse(mat4 m)",
    description: "Retourne l'inverse de la matrice m.",
    details: "Indéfini si la matrice n'est pas inversible (déterminant = 0).",
    examples: ["mat4 invMatrix = inverse(modelMatrix);"]
  },

  // Fonctions vectorielles et relationnelles
  "lessThan": {
    signature: "bvec lessThan(genType x, genType y)\nbvec lessThan(genIType x, genIType y)",
    description: "Compare composant par composant si x < y.",
    details: "Retourne un vecteur booléen.",
    examples: ["bvec3 result = lessThan(vec3(1,2,3), vec3(2,2,2));"]
  },
  "lessThanEqual": {
    signature: "bvec lessThanEqual(genType x, genType y)\nbvec lessThanEqual(genIType x, genIType y)",
    description: "Compare composant par composant si x <= y.",
    examples: ["bvec2 result = lessThanEqual(a, b);"]
  },
  "greaterThan": {
    signature: "bvec greaterThan(genType x, genType y)\nbvec greaterThan(genIType x, genIType y)",
    description: "Compare composant par composant si x > y.",
    examples: ["bvec4 result = greaterThan(a, b);"]
  },
  "greaterThanEqual": {
    signature: "bvec greaterThanEqual(genType x, genType y)\nbvec greaterThanEqual(genIType x, genIType y)",
    description: "Compare composant par composant si x >= y.",
    examples: ["bvec3 result = greaterThanEqual(a, b);"]
  },
  "equal": {
    signature: "bvec equal(genType x, genType y)\nbvec equal(genIType x, genIType y)\nbvec equal(bvec x, bvec y)",
    description: "Compare composant par composant si x == y.",
    examples: ["bvec2 result = equal(a, b);"]
  },
  "notEqual": {
    signature: "bvec notEqual(genType x, genType y)\nbvec notEqual(genIType x, genIType y)\nbvec notEqual(bvec x, bvec y)",
    description: "Compare composant par composant si x != y.",
    examples: ["bvec3 result = notEqual(a, b);"]
  },
  "any": {
    signature: "bool any(bvec x)",
    description: "Retourne true si au moins un composant de x est true.",
    examples: ["bool hasAny = any(bvec3(false, true, false)); // true"]
  },
  "all": {
    signature: "bool all(bvec x)",
    description: "Retourne true si tous les composants de x sont true.",
    examples: ["bool allTrue = all(bvec2(true, true)); // true"]
  },
  "not": {
    signature: "bvec not(bvec x)",
    description: "Inverse logiquement chaque composant de x.",
    examples: ["bvec2 inverted = not(bvec2(true, false));"]
  },

  // Fonctions de texture (principales)
  "texture": {
    signature: "gvec4 texture(gsampler1D sampler, float P [, float bias])\ngvec4 texture(gsampler2D sampler, vec2 P [, float bias])\ngvec4 texture(gsampler3D sampler, vec3 P [, float bias])\ngvec4 texture(gsamplerCube sampler, vec3 P [, float bias])",
    description: "Échantillonne une texture.",
    details: "P: coordonnées de texture (normalisées [0,1]).\nbias: décalage de niveau mipmap (optionnel, fragment shader seulement).",
    examples: [
      "vec4 color = texture(myTexture, uv);",
      "vec4 color = texture(myTexture, uv, -1.0);"
    ]
  },
  "texture2D": {
    signature: "vec4 texture2D(sampler2D sampler, vec2 coord [, float bias])",
    description: "Échantillonne une texture 2D (ancienne syntaxe).",
    details: "Préférez texture() dans les versions modernes de GLSL.",
    examples: ["vec4 color = texture2D(myTexture, uv);"]
  },
  "textureCube": {
    signature: "vec4 textureCube(samplerCube sampler, vec3 coord [, float bias])",
    description: "Échantillonne une cubemap (ancienne syntaxe).",
    details: "Préférez texture() dans les versions modernes de GLSL.",
    examples: ["vec4 color = textureCube(envMap, reflectDir);"]
  },
  "textureProj": {
    signature: "gvec4 textureProj(gsampler1D sampler, vec2 P [, float bias])\ngvec4 textureProj(gsampler2D sampler, vec3 P [, float bias])\ngvec4 textureProj(gsampler3D sampler, vec4 P [, float bias])",
    description: "Échantillonnage de texture avec projection.",
    details: "Les coordonnées sont divisées par la dernière composante avant l'échantillonnage.",
    examples: ["vec4 color = textureProj(tex, vec3(uv, depth));"]
  },
  "textureLod": {
    signature: "gvec4 textureLod(gsampler1D sampler, float P, float lod)\ngvec4 textureLod(gsampler2D sampler, vec2 P, float lod)\ngvec4 textureLod(gsampler3D sampler, vec3 P, float lod)",
    description: "Échantillonne une texture à un niveau mipmap explicite.",
    details: "lod: niveau de détail (0 = plus haute résolution).",
    examples: ["vec4 color = textureLod(tex, uv, 2.0);"]
  },
  "textureSize": {
    signature: "ivec2 textureSize(gsampler2D sampler, int lod)\nivec3 textureSize(gsampler3D sampler, int lod)",
    description: "Retourne les dimensions d'une texture.",
    details: "lod: niveau mipmap à interroger.",
    examples: ["ivec2 size = textureSize(myTexture, 0);"]
  },
  "texelFetch": {
    signature: "gvec4 texelFetch(gsampler2D sampler, ivec2 P, int lod)",
    description: "Lit directement un texel par coordonnées entières.",
    details: "Pas d'interpolation, accès direct aux pixels.",
    examples: ["vec4 pixel = texelFetch(tex, ivec2(10, 20), 0);"]
  },
  "textureGrad": {
    signature: "gvec4 textureGrad(gsampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy)",
    description: "Échantillonne avec dérivées explicites.",
    details: "Utile pour contrôler manuellement le niveau mipmap.",
    examples: ["vec4 color = textureGrad(tex, uv, dFdx(uv), dFdy(uv));"]
  },
  "textureOffset": {
    signature: "gvec4 textureOffset(gsampler2D sampler, vec2 P, ivec2 offset [, float bias])",
    description: "Échantillonne avec un décalage de pixels.",
    details: "offset: décalage en pixels avant échantillonnage.",
    examples: ["vec4 color = textureOffset(tex, uv, ivec2(1, 0));"]
  },

  // Fonctions de dérivées (fragment shader seulement)
  "dFdx": {
    signature: "genType dFdx(genType p)",
    description: "Dérivée partielle par rapport à x (écran).",
    details: "Disponible uniquement dans les fragment shaders.",
    examples: ["float dx = dFdx(value);"]
  },
  "dFdy": {
    signature: "genType dFdy(genType p)",
    description: "Dérivée partielle par rapport à y (écran).",
    details: "Disponible uniquement dans les fragment shaders.",
    examples: ["float dy = dFdy(value);"]
  },
  "fwidth": {
    signature: "genType fwidth(genType p)",
    description: "Somme des valeurs absolues des dérivées.",
    details: "Résultat: abs(dFdx(p)) + abs(dFdy(p)). Utile pour l'antialiasing.",
    examples: ["float w = fwidth(uv.x);"]
  },

  // Fonctions de manipulation de bits (GLSL 1.30+)
  "floatBitsToInt": {
    signature: "genIType floatBitsToInt(genType value)",
    description: "Réinterprète les bits d'un float en int.",
    examples: ["int bits = floatBitsToInt(3.14);"]
  },
  "floatBitsToUint": {
    signature: "genUType floatBitsToUint(genType value)",
    description: "Réinterprète les bits d'un float en uint.",
    examples: ["uint bits = floatBitsToUint(3.14);"]
  },
  "intBitsToFloat": {
    signature: "genType intBitsToFloat(genIType value)",
    description: "Réinterprète les bits d'un int en float.",
    examples: ["float f = intBitsToFloat(bits);"]
  },
  "uintBitsToFloat": {
    signature: "genType uintBitsToFloat(genUType value)",
    description: "Réinterprète les bits d'un uint en float.",
    examples: ["float f = uintBitsToFloat(bits);"]
  },

  // Fonctions de packing/unpacking
  "packUnorm2x16": {
    signature: "uint packUnorm2x16(vec2 v)",
    description: "Pack deux floats normalisés [0,1] en un uint.",
    examples: ["uint packed = packUnorm2x16(vec2(0.5, 1.0));"]
  },
  "unpackUnorm2x16": {
    signature: "vec2 unpackUnorm2x16(uint p)",
    description: "Unpack un uint en deux floats normalisés [0,1].",
    examples: ["vec2 unpacked = unpackUnorm2x16(packed);"]
  },
  "packSnorm2x16": {
    signature: "uint packSnorm2x16(vec2 v)",
    description: "Pack deux floats normalisés [-1,1] en un uint.",
    examples: ["uint packed = packSnorm2x16(vec2(-0.5, 1.0));"]
  },
  "unpackSnorm2x16": {
    signature: "vec2 unpackSnorm2x16(uint p)",
    description: "Unpack un uint en deux floats normalisés [-1,1].",
    examples: ["vec2 unpacked = unpackSnorm2x16(packed);"]
  },
  "packHalf2x16": {
    signature: "uint packHalf2x16(vec2 v)",
    description: "Pack deux floats en half-floats (16-bit) dans un uint.",
    examples: ["uint packed = packHalf2x16(vec2(1.0, 2.0));"]
  },
  "unpackHalf2x16": {
    signature: "vec2 unpackHalf2x16(uint v)",
    description: "Unpack un uint contenant deux half-floats en vec2.",
    examples: ["vec2 unpacked = unpackHalf2x16(packed);"]
  }
};

module.exports = glslFunctions;
