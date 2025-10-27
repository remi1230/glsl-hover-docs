// Exemple de fragment shader pour tester l'extension GLSL Hover Documentation
// Passez la souris sur les fonctions natives pour voir la documentation !

precision mediump float;

uniform float time;
uniform vec2 resolution;
varying vec2 vUv;

void main() {
    // Normalisation des coordonnées
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= resolution.x / resolution.y;
    
    // Calcul de la distance au centre
    float dist = length(uv);
    
    // Animation avec le temps
    float angle = atan(uv.y, uv.x);
    float radius = 0.5 + 0.2 * sin(time * 2.0);
    
    // Création d'un cercle animé
    float circle = smoothstep(radius + 0.02, radius, dist);
    
    // Interpolation de couleurs
    vec3 color1 = vec3(1.0, 0.2, 0.5);
    vec3 color2 = vec3(0.2, 0.5, 1.0);
    vec3 finalColor = mix(color1, color2, sin(time + angle * 3.0) * 0.5 + 0.5);
    
    // Application du cercle
    finalColor *= circle;
    
    // Ajout d'un effet de vignette
    float vignette = smoothstep(1.5, 0.5, dist);
    finalColor *= vignette;
    
    // Clamping des valeurs
    finalColor = clamp(finalColor, 0.0, 1.0);
    
    // Sortie finale
    gl_FragColor = vec4(finalColor, 1.0);
}
