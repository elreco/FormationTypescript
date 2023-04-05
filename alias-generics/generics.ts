// Fonction générique pour inverser un tableau
const inverser = <Type>(elements: Type[]): Type[] => elements.reverse();

// Exemple d'utilisation
const nombres: number[] = [1, 2, 3];
const noms: string[] = ["Alice", "Bob", "Charlie"];

const nombresInverses = inverser(nombres); // [3, 2, 1]
const nomsInverses = inverser(noms); // ["Charlie", "Bob", "Alice"]

console.log(nombresInverses); // Affiche : [3, 2, 1]
console.log(nomsInverses); // Affiche : ["Charlie", "Bob", "Alice"]