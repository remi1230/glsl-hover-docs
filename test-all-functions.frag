// Fichier de test pour l'extension GLSL Hover Documentation
// Testez le survol sur chaque fonction marquée avec <-- TEST

precision highp float;

uniform sampler2D texture1;
uniform float time;
uniform vec2 resolution;
varying vec2 vUv;

void main() {
    // ===== FONCTIONS TRIGONOMÉTRIQUES =====
    float angle = radians(45.0);           // <-- TEST: radians
    float deg = degrees(3.14159);          // <-- TEST: degrees
    float s = sin(time);                   // <-- TEST: sin
    float c = cos(time);                   // <-- TEST: cos
    float t = tan(angle);                  // <-- TEST: tan
    float as = asin(0.5);                  // <-- TEST: asin
    float ac = acos(0.5);                  // <-- TEST: acos
    float at = atan(1.0, 1.0);            // <-- TEST: atan
    
    // ===== FONCTIONS EXPONENTIELLES =====
    float p = pow(2.0, 3.0);              // <-- TEST: pow
    float e = exp(1.0);                    // <-- TEST: exp
    float l = log(10.0);                   // <-- TEST: log
    float e2 = exp2(3.0);                  // <-- TEST: exp2
    float l2 = log2(8.0);                  // <-- TEST: log2
    float sq = sqrt(16.0);                 // <-- TEST: sqrt
    float isq = inversesqrt(4.0);         // <-- TEST: inversesqrt
    
    // ===== FONCTIONS COMMUNES =====
    float a = abs(-5.0);                   // <-- TEST: abs
    float sg = sign(-3.14);                // <-- TEST: sign
    float fl = floor(3.7);                 // <-- TEST: floor
    float ce = ceil(3.2);                  // <-- TEST: ceil
    float fr = fract(3.7);                 // <-- TEST: fract
    float mo = mod(5.5, 2.0);             // <-- TEST: mod
    float mn = min(3.0, 5.0);             // <-- TEST: min
    float mx = max(3.0, 5.0);             // <-- TEST: max
    float cl = clamp(1.5, 0.0, 1.0);      // <-- TEST: clamp
    
    // ===== INTERPOLATION =====
    vec3 color1 = vec3(1.0, 0.0, 0.0);
    vec3 color2 = vec3(0.0, 0.0, 1.0);
    vec3 mixed = mix(color1, color2, 0.5);     // <-- TEST: mix
    float stepped = step(0.5, vUv.x);          // <-- TEST: step
    float smooth = smoothstep(0.0, 1.0, vUv.y);// <-- TEST: smoothstep
    
    // ===== FONCTIONS GÉOMÉTRIQUES =====
    vec2 uv = vUv * 2.0 - 1.0;
    float len = length(uv);                    // <-- TEST: length
    float dist = distance(vec2(0.5), vUv);     // <-- TEST: distance
    float d = dot(uv, vec2(1.0, 0.0));        // <-- TEST: dot
    vec3 v1 = vec3(1.0, 0.0, 0.0);
    vec3 v2 = vec3(0.0, 1.0, 0.0);
    vec3 cr = cross(v1, v2);                   // <-- TEST: cross
    vec3 norm = normalize(uv.xyx);             // <-- TEST: normalize
    
    vec3 incident = vec3(0.0, 0.0, -1.0);
    vec3 normal = vec3(0.0, 0.0, 1.0);
    vec3 refl = reflect(incident, normal);     // <-- TEST: reflect
    vec3 refr = refract(incident, normal, 0.75);// <-- TEST: refract
    
    // ===== FONCTIONS MATRICIELLES =====
    mat3 m1 = mat3(1.0);
    mat3 m2 = mat3(2.0);
    mat3 comp = matrixCompMult(m1, m2);        // <-- TEST: matrixCompMult
    mat3 trans = transpose(m1);                // <-- TEST: transpose
    float det = determinant(m1);               // <-- TEST: determinant
    mat3 inv = inverse(m1);                    // <-- TEST: inverse
    
    // ===== FONCTIONS VECTORIELLES =====
    vec3 a1 = vec3(1.0, 2.0, 3.0);
    vec3 a2 = vec3(2.0, 2.0, 2.0);
    bvec3 lt = lessThan(a1, a2);              // <-- TEST: lessThan
    bvec3 gt = greaterThan(a1, a2);           // <-- TEST: greaterThan
    bvec3 eq = equal(a1, a2);                  // <-- TEST: equal
    bool anyTrue = any(lt);                    // <-- TEST: any
    bool allTrue = all(lt);                    // <-- TEST: all
    
    // ===== FONCTIONS DE TEXTURE =====
    vec4 texColor = texture(texture1, vUv);        // <-- TEST: texture (moderne)
    vec4 tex2d = texture2D(texture1, vUv);        // <-- TEST: texture2D (legacy)
    ivec2 texSize = textureSize(texture1, 0);     // <-- TEST: textureSize
    
    // ===== DÉRIVÉES (fragment shader seulement) =====
    float dx = dFdx(vUv.x);                   // <-- TEST: dFdx
    float dy = dFdy(vUv.y);                   // <-- TEST: dFdy
    float fw = fwidth(vUv.x);                 // <-- TEST: fwidth
    
    // ===== RÉSULTAT FINAL =====
    vec3 finalColor = mixed * smooth;
    finalColor = clamp(finalColor, 0.0, 1.0);
    
    gl_FragColor = vec4(finalColor, 1.0);
}

// INSTRUCTIONS DE TEST:
// 1. Ouvrez ce fichier dans VSCode
// 2. Passez la souris sur chaque fonction marquée avec "<-- TEST"
// 3. Vérifiez qu'un popup apparaît avec la documentation
// 4. Si tout fonctionne, l'extension est correctement installée !
