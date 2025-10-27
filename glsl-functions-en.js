// Complete English translations for GLSL functions
// Based on official GLSL specifications

const glslFunctionsEN = {
  // === TRIGONOMETRIC FUNCTIONS ===
  "radians": {
    signature: "genType radians(genType degrees)",
    description: "Converts degrees to radians.",
    details: "Result: (π / 180) * degrees",
    examples: ["float angleRad = radians(90.0); // π/2"]
  },
  "degrees": {
    signature: "genType degrees(genType radians)",
    description: "Converts radians to degrees.",
    details: "Result: (180 / π) * radians",
    examples: ["float angleDeg = degrees(3.14159); // ~180"]
  },
  "sin": {
    signature: "genType sin(genType angle)",
    description: "Returns the sine of an angle in radians.",
    details: "Works with float, vec2, vec3 or vec4. Each component is processed separately.",
    examples: ["float y = sin(time);"]
  },
  "cos": {
    signature: "genType cos(genType angle)",
    description: "Returns the cosine of an angle in radians.",
    details: "Works with float, vec2, vec3 or vec4. Each component is processed separately.",
    examples: ["float x = cos(time);"]
  },
  "tan": {
    signature: "genType tan(genType angle)",
    description: "Returns the tangent of an angle in radians.",
    details: "Works with float, vec2, vec3 or vec4.",
    examples: ["float t = tan(angle);"]
  },
  "asin": {
    signature: "genType asin(genType x)",
    description: "Returns the arc sine of x in radians.",
    details: "Result in range [-π/2, π/2]. x must be in [-1, 1].",
    examples: ["float angle = asin(0.5); // π/6"]
  },
  "acos": {
    signature: "genType acos(genType x)",
    description: "Returns the arc cosine of x in radians.",
    details: "Result in range [0, π]. x must be in [-1, 1].",
    examples: ["float angle = acos(0.0); // π/2"]
  },
  "atan": {
    signature: "genType atan(genType y, genType x)\ngenType atan(genType y_over_x)",
    description: "Returns the arc tangent.",
    details: "Two-parameter version: returns the angle whose tangent is y/x.\nOne-parameter version: returns the angle whose tangent is y_over_x.",
    examples: [
      "float angle = atan(y, x); // takes quadrant into account",
      "float angle = atan(1.0); // π/4"
    ]
  },

  // === EXPONENTIAL FUNCTIONS ===
  "pow": {
    signature: "genType pow(genType x, genType y)",
    description: "Returns x raised to the power y.",
    details: "Result: x^y. Undefined if x < 0 or if x = 0 and y <= 0.",
    examples: ["float squared = pow(value, 2.0);"]
  },
  "exp": {
    signature: "genType exp(genType x)",
    description: "Returns the natural constant e raised to the power x.",
    details: "Result: e^x",
    examples: ["float result = exp(1.0); // e ≈ 2.718"]
  },
  "log": {
    signature: "genType log(genType x)",
    description: "Returns the natural logarithm of x.",
    details: "Result: ln(x). x must be > 0.",
    examples: ["float lg = log(10.0);"]
  },
  "exp2": {
    signature: "genType exp2(genType x)",
    description: "Returns 2 raised to the power x.",
    details: "Result: 2^x",
    examples: ["float result = exp2(3.0); // 8.0"]
  },
  "log2": {
    signature: "genType log2(genType x)",
    description: "Returns the base-2 logarithm of x.",
    details: "Result: log₂(x). x must be > 0.",
    examples: ["float lg2 = log2(8.0); // 3.0"]
  },
  "sqrt": {
    signature: "genType sqrt(genType x)",
    description: "Returns the square root of x.",
    details: "Result: √x. x must be >= 0.",
    examples: ["float root = sqrt(16.0); // 4.0"]
  },
  "inversesqrt": {
    signature: "genType inversesqrt(genType x)",
    description: "Returns the inverse of the square root of x.",
    details: "Result: 1/√x. Faster than 1.0/sqrt(x). x must be > 0.",
    examples: ["float invRoot = inversesqrt(4.0); // 0.5"]
  },

  // === COMMON FUNCTIONS ===
  "abs": {
    signature: "genType abs(genType x)\ngenIType abs(genIType x)",
    description: "Returns the absolute value of x.",
    details: "Result: x if x >= 0, otherwise -x.",
    examples: ["float positive = abs(-5.0); // 5.0"]
  },
  "sign": {
    signature: "genType sign(genType x)\ngenIType sign(genIType x)",
    description: "Returns the sign of x.",
    details: "Result: 1.0 if x > 0, 0.0 if x = 0, -1.0 if x < 0.",
    examples: ["float s = sign(-3.14); // -1.0"]
  },
  "floor": {
    signature: "genType floor(genType x)",
    description: "Returns the largest integer less than or equal to x.",
    details: "Rounds down.",
    examples: ["float f = floor(3.7); // 3.0"]
  },
  "ceil": {
    signature: "genType ceil(genType x)",
    description: "Returns the smallest integer greater than or equal to x.",
    details: "Rounds up.",
    examples: ["float c = ceil(3.2); // 4.0"]
  },
  "fract": {
    signature: "genType fract(genType x)",
    description: "Returns the fractional part of x.",
    details: "Result: x - floor(x). Always in [0, 1).",
    examples: ["float f = fract(3.7); // 0.7"]
  },
  "mod": {
    signature: "genType mod(genType x, float y)\ngenType mod(genType x, genType y)",
    description: "Returns the modulo of x divided by y.",
    details: "Result: x - y * floor(x/y)",
    examples: ["float m = mod(5.5, 2.0); // 1.5"]
  },
  "min": {
    signature: "genType min(genType x, genType y)\ngenType min(genType x, float y)",
    description: "Returns the minimum of x and y.",
    details: "Compares component-wise for vectors.",
    examples: ["float minimum = min(3.0, 5.0); // 3.0"]
  },
  "max": {
    signature: "genType max(genType x, genType y)\ngenType max(genType x, float y)",
    description: "Returns the maximum of x and y.",
    details: "Compares component-wise for vectors.",
    examples: ["float maximum = max(3.0, 5.0); // 5.0"]
  },
  "clamp": {
    signature: "genType clamp(genType x, genType minVal, genType maxVal)\ngenType clamp(genType x, float minVal, float maxVal)",
    description: "Clamps value x between minVal and maxVal.",
    details: "Result: min(max(x, minVal), maxVal)",
    examples: ["float clamped = clamp(value, 0.0, 1.0);"]
  },
  "mix": {
    signature: "genType mix(genType x, genType y, genType a)\ngenType mix(genType x, genType y, float a)",
    description: "Linear interpolation between x and y.",
    details: "Result: x * (1 - a) + y * a. a is typically in [0, 1].",
    examples: ["vec3 color = mix(red, blue, 0.5); // purple"]
  },
  "step": {
    signature: "genType step(genType edge, genType x)\ngenType step(float edge, genType x)",
    description: "Step threshold function.",
    details: "Result: 0.0 if x < edge, otherwise 1.0.",
    examples: ["float s = step(0.5, x); // 0 or 1"]
  },
  "smoothstep": {
    signature: "genType smoothstep(genType edge0, genType edge1, genType x)\ngenType smoothstep(float edge0, float edge1, genType x)",
    description: "Smooth Hermite interpolation between 0 and 1.",
    details: "Returns 0 if x <= edge0, 1 if x >= edge1, otherwise smooth interpolation.\nUses formula: t * t * (3 - 2 * t) where t = clamp((x - edge0) / (edge1 - edge0), 0, 1)",
    examples: ["float smooth = smoothstep(0.0, 1.0, x);"]
  },

  // === GEOMETRIC FUNCTIONS ===
  "length": {
    signature: "float length(genType x)",
    description: "Returns the length of vector x.",
    details: "Result: sqrt(x[0]² + x[1]² + ...)",
    examples: ["float len = length(vec3(1.0, 2.0, 2.0)); // 3.0"]
  },
  "distance": {
    signature: "float distance(genType p0, genType p1)",
    description: "Returns the distance between two points.",
    details: "Result: length(p0 - p1)",
    examples: ["float dist = distance(pos1, pos2);"]
  },
  "dot": {
    signature: "float dot(genType x, genType y)",
    description: "Returns the dot product of x and y.",
    details: "Result: x[0]*y[0] + x[1]*y[1] + ...",
    examples: ["float d = dot(vec3(1,0,0), vec3(0,1,0)); // 0.0"]
  },
  "cross": {
    signature: "vec3 cross(vec3 x, vec3 y)",
    description: "Returns the cross product of x and y.",
    details: "Only works with vec3. Returns a vector perpendicular to x and y.",
    examples: ["vec3 normal = cross(tangent, bitangent);"]
  },
  "normalize": {
    signature: "genType normalize(genType x)",
    description: "Returns a vector with the same direction as x but length 1.",
    details: "Result: x / length(x). Undefined if length(x) = 0.",
    examples: ["vec3 dir = normalize(targetPos - currentPos);"]
  },
  "faceforward": {
    signature: "genType faceforward(genType N, genType I, genType Nref)",
    description: "Orients a vector to point in the correct direction.",
    details: "Returns N if dot(Nref, I) < 0, otherwise -N.",
    examples: ["vec3 oriented = faceforward(normal, incident, normal);"]
  },
  "reflect": {
    signature: "genType reflect(genType I, genType N)",
    description: "Calculates the reflection vector.",
    details: "I: incident vector, N: surface normal (must be normalized).\nResult: I - 2 * dot(N, I) * N",
    examples: ["vec3 refl = reflect(viewDir, normal);"]
  },
  "refract": {
    signature: "genType refract(genType I, genType N, float eta)",
    description: "Calculates the refraction vector.",
    details: "I: incident vector, N: normal (normalized), eta: ratio of refraction indices.\nUses Snell's law.",
    examples: ["vec3 refr = refract(viewDir, normal, 1.0/1.33);"]
  },

  // === MATRIX FUNCTIONS ===
  "matrixCompMult": {
    signature: "mat matrixCompMult(mat x, mat y)",
    description: "Multiplies two matrices component-wise.",
    details: "Note: this is NOT standard matrix multiplication (use * for that).",
    examples: ["mat3 result = matrixCompMult(mat1, mat2);"]
  },
  "transpose": {
    signature: "mat2 transpose(mat2 m)\nmat3 transpose(mat3 m)\nmat4 transpose(mat4 m)",
    description: "Returns the transpose of matrix m.",
    details: "Swaps rows and columns.",
    examples: ["mat4 transposed = transpose(matrix);"]
  },
  "determinant": {
    signature: "float determinant(mat2 m)\nfloat determinant(mat3 m)\nfloat determinant(mat4 m)",
    description: "Returns the determinant of matrix m.",
    examples: ["float det = determinant(matrix);"]
  },
  "inverse": {
    signature: "mat2 inverse(mat2 m)\nmat3 inverse(mat3 m)\nmat4 inverse(mat4 m)",
    description: "Returns the inverse of matrix m.",
    details: "Undefined if the matrix is not invertible (determinant = 0).",
    examples: ["mat4 invMatrix = inverse(modelMatrix);"]
  },

  // === VECTOR RELATIONAL FUNCTIONS ===
  "lessThan": {
    signature: "bvec lessThan(genType x, genType y)\nbvec lessThan(genIType x, genIType y)",
    description: "Compares component-wise if x < y.",
    details: "Returns a boolean vector.",
    examples: ["bvec3 result = lessThan(vec3(1,2,3), vec3(2,2,2));"]
  },
  "greaterThan": {
    signature: "bvec greaterThan(genType x, genType y)\nbvec greaterThan(genIType x, genIType y)",
    description: "Compares component-wise if x > y.",
    examples: ["bvec4 result = greaterThan(a, b);"]
  },
  "equal": {
    signature: "bvec equal(genType x, genType y)\nbvec equal(genIType x, genIType y)\nbvec equal(bvec x, bvec y)",
    description: "Compares component-wise if x == y.",
    examples: ["bvec2 result = equal(a, b);"]
  },
  "any": {
    signature: "bool any(bvec x)",
    description: "Returns true if at least one component of x is true.",
    examples: ["bool hasAny = any(bvec3(false, true, false)); // true"]
  },
  "all": {
    signature: "bool all(bvec x)",
    description: "Returns true if all components of x are true.",
    examples: ["bool allTrue = all(bvec2(true, true)); // true"]
  },

  // === TEXTURE FUNCTIONS ===
  "texture": {
    signature: "gvec4 texture(gsampler2D sampler, vec2 P [, float bias])\ngvec4 texture(gsampler3D sampler, vec3 P [, float bias])",
    description: "Samples a texture.",
    details: "P: texture coordinates (normalized [0,1]).\nbias: mipmap level offset (optional, fragment shader only).",
    examples: [
      "vec4 color = texture(myTexture, uv);",
      "vec4 color = texture(myTexture, uv, -1.0);"
    ]
  },
  "texture2D": {
    signature: "vec4 texture2D(sampler2D sampler, vec2 coord [, float bias])",
    description: "Samples a 2D texture (legacy syntax).",
    details: "Prefer texture() in modern GLSL versions.",
    examples: ["vec4 color = texture2D(myTexture, uv);"]
  },
  "textureLod": {
    signature: "gvec4 textureLod(gsampler2D sampler, vec2 P, float lod)",
    description: "Samples a texture at an explicit mipmap level.",
    details: "lod: level of detail (0 = highest resolution).",
    examples: ["vec4 color = textureLod(tex, uv, 2.0);"]
  },
  "textureSize": {
    signature: "ivec2 textureSize(gsampler2D sampler, int lod)",
    description: "Returns the dimensions of a texture.",
    details: "lod: mipmap level to query.",
    examples: ["ivec2 size = textureSize(myTexture, 0);"]
  },
  "texelFetch": {
    signature: "gvec4 texelFetch(gsampler2D sampler, ivec2 P, int lod)",
    description: "Reads a texel directly by integer coordinates.",
    details: "No interpolation, direct pixel access.",
    examples: ["vec4 pixel = texelFetch(tex, ivec2(10, 20), 0);"]
  },

  // === DERIVATIVE FUNCTIONS (fragment shader only) ===
  "dFdx": {
    signature: "genType dFdx(genType p)",
    description: "Partial derivative with respect to x (screen).",
    details: "Available only in fragment shaders.",
    examples: ["float dx = dFdx(value);"]
  },
  "dFdy": {
    signature: "genType dFdy(genType p)",
    description: "Partial derivative with respect to y (screen).",
    details: "Available only in fragment shaders.",
    examples: ["float dy = dFdy(value);"]
  },
  "fwidth": {
    signature: "genType fwidth(genType p)",
    description: "Sum of absolute values of derivatives.",
    details: "Result: abs(dFdx(p)) + abs(dFdy(p)). Useful for antialiasing.",
    examples: ["float w = fwidth(uv.x);"]
  }
};

module.exports = glslFunctionsEN;
