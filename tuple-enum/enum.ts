// Définition d'un enum pour représenter les jours de la semaine
enum JourSemaine {
  Dimanche,
  Lundi,
  Mardi,
  Mercredi,
  Jeudi,
  Vendredi,
  Samedi,
}

// Création d'une variable de type JourSemaine
const jourActuel: JourSemaine = JourSemaine.Vendredi;

// Accès aux éléments de l'enum
console.log(`Aujourd'hui, nous sommes ${JourSemaine[jourActuel]}`);
// Affiche : Aujourd'hui, nous sommes Vendredi
