const afficherLongueur = (input: string | number) => {
  if (typeof input === "string") {
    // Ici, TypeScript sait que input est de type string grâce au narrowing
    console.log(`La chaîne de caractères a une longueur de ${input.length}`);
  } else {
    // Ici, TypeScript sait que input est de type number grâce au narrowing
    console.log(`Le nombre est ${input}`);
  }
}

// Exemple d'utilisation
afficherLongueur("Bonjour"); // Affiche : La chaîne de caractères a une longueur de 7
afficherLongueur(42);         // Affiche : Le nombre est 42
