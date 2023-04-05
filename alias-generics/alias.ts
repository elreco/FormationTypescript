// Alias de type pour un objet représentant des coordonnées (x, y)
type Coordonnees = {
  x: number;
  y: number;
};

// Fonction pour calculer la distance entre deux points (en 2D)
function calculerDistance(pointA: Coordonnees, pointB: Coordonnees): number {
  const deltaX = pointA.x - pointB.x;
  const deltaY = pointA.y - pointB.y;
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

// Exemple d'utilisation
const point1: Coordonnees = { x: 3, y: 4 };
const point2: Coordonnees = { x: 6, y: 8 };

const distance = calculerDistance(point1, point2);
console.log(distance); // Affiche : 5
