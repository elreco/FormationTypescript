// Définition d'un tuple pour représenter une date (année, mois, jour)
type DateTuple = [number, number, number];

// Création d'une variable de type DateTuple
const dateAujourdhui: DateTuple = [2023, 3, 31];

// Accès aux éléments du tuple
console.log(`Aujourd'hui, nous sommes le ${dateAujourdhui[2]}/${dateAujourdhui[1]}/${dateAujourdhui[0]}`);
// Affiche : Aujourd'hui, nous sommes le 31/3/2023