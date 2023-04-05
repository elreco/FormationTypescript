import scrollTo from 'scrollTo';

// Sélectionnez un élément dans votre document HTML
const element = document.getElementById('monElement');

// Utilisez la fonction scrollTo pour défiler jusqu'à l'élément en 500ms
if (element) {
  scrollTo(element, { duration: 500 });
}