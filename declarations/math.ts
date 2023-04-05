import './simpleMath.js';

const result1 = add(3, 4); // TypeScript sait que result1 est de type `number`
const result2 = subtract(10, 5); // TypeScript sait que result2 est de type `number`

console.log('Addition :', result1);
console.log('Soustraction :', result2);