#!/usr/bin/env python3
# Script pour générer les traductions anglaises des fonctions GLSL

translations = {
    # Phrases courantes
    "Retourne": "Returns",
    "Convertit": "Converts",
    "Calcule": "Calculates",
    "Vérifie": "Checks",
    "Arrondit": "Rounds",
    "Limite": "Limits",
    "Échantillonne": "Samples",
    "Lit": "Reads",
    
    # Termes techniques
    "le sinus": "the sine",
    "le cosinus": "the cosine", 
    "la tangente": "the tangent",
    "l'arc sinus": "the arc sine",
    "l'arc cosinus": "the arc cosine",
    "l'arc tangente": "the arc tangent",
    "la valeur absolue": "the absolute value",
    "le signe": "the sign",
    "la racine carrée": "the square root",
    "l'inverse de la racine carrée": "the inverse square root",
    "le logarithme naturel": "the natural logarithm",
    "le logarithme en base 2": "the base-2 logarithm",
    "la longueur": "the length",
    "la distance": "the distance",
    "le produit scalaire": "the dot product",
    "le produit vectoriel": "the cross product",
    "la transposée": "the transpose",
    "le déterminant": "the determinant",
    "l'inverse": "the inverse",
    
    # Conversions
    "des degrés en radians": "degrees to radians",
    "des radians en degrés": "radians to degrees",
    
    # Descriptions
    "un angle en radians": "an angle in radians",
    "du vecteur": "of the vector",
    "de la matrice": "of the matrix",
    "entre deux points": "between two points",
    "de x et y": "of x and y",
    "de même direction que x mais de longueur 1": "with the same direction as x but length 1",
    
    # Détails
    "Résultat:": "Result:",
    "Fonctionne avec": "Works with",
    "Chaque composant est traité séparément": "Each component is processed separately",
    "x doit être": "x must be",
    "Indéfini si": "Undefined if",
    "doit être normalisé": "must be normalized",
    "doit être normalisée": "must be normalized",
    
    # Mots divers
    "de": "of",
    "dans": "in",
    "pour": "for",
    "avec": "with",
    "entre": "between",
    "sur": "on",
    "vers": "to",
    "depuis": "from"
}

print("Traductions de base créées")
print(f"Nombre de traductions: {len(translations)}")
