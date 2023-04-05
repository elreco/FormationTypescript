// Fonction générique pour filtrer une liste d'éléments en fonction d'un prédicat
const filtrer = <T>(liste: T[], predicat: (element: T) => boolean): T[] => {
  const resultat: T[] = [];
  for (const element of liste) {
    if (predicat(element)) {
      resultat.push(element);
    }
  }
  return resultat;
}

// Interface pour décrire un point d'intérêt au Japon
interface PointInteret {
  nom: string;
  ville: string;
  categorie: 'temple' | 'chateau' | 'jardin';
}

// Exemple de liste de points d'intérêt au Japon
const pointsInteret: PointInteret[] = [
  { nom: 'Kinkaku-ji', ville: 'Kyoto', categorie: 'temple' },
  { nom: 'Himeji-jo', ville: 'Himeji', categorie: 'chateau' },
  { nom: 'Kenroku-en', ville: 'Kanazawa', categorie: 'jardin' },
  { nom: 'Fushimi Inari-taisha', ville: 'Kyoto', categorie: 'temple' },
];

// Filtrer les points d'intérêt pour ne conserver que les temples
const temples = filtrer(pointsInteret, (point) => point.categorie === 'temple');
console.log('Temples:', temples);

// Filtrer les points d'intérêt pour ne conserver que ceux situés à Kyoto
const kyotoPoints = filtrer(pointsInteret, (point) => point.ville === 'Kyoto');
console.log('Points d\'intérêt à Kyoto:', kyotoPoints);

// Interface pour décrire un fruit
interface Fruit {
  nom: string;
  poids: number; // en grammes
}

// Liste de fruits
const fruits: Fruit[] = [
  { nom: 'Pomme', poids: 150 },
  { nom: 'Banane', poids: 120 },
  { nom: 'Orange', poids: 200 },
  { nom: 'Kiwi', poids: 80 },
  { nom: 'Fraise', poids: 15 },
];

// Filtrer les fruits qui pèsent plus de 100g
const fruitsLourds = filtrer(fruits, (fruit) => fruit.poids > 100);
console.log('Fruits lourds (> 100g) :', fruitsLourds);

// Filtrer les fruits qui pèsent moins de 50g
const fruitsLegers = filtrer(fruits, (fruit) => fruit.poids < 50);
console.log('Fruits légers (< 50g) :', fruitsLegers);

