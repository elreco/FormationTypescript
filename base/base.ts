// Déclaration de variables avec des types explicites
let prenom: string = "Alice";
let age: number = 30;

// Déclaration d'une constante avec un type explicite
const pays: string = "France";

// Fonction avec des types pour les paramètres et le retour
const saluer = (nom: string, anneeNaissance: number): string => {
  const age: number = new Date().getFullYear() - anneeNaissance;
  return `Bonjour ${nom}, vous avez ${age} ans et vous vivez en ${pays}.`;
}

// Utilisation de la fonction
const message: string = saluer(prenom, 1993);
console.log(message); // Affiche : Bonjour Alice, vous avez 30 ans et vous vivez en France.
