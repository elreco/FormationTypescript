// scrollTo.d.ts
declare module 'scrollTo' {
  interface ScrollToOptions {
    duration?: number; // Durée de l'animation en millisecondes (optionnel)
  }

  function scrollTo(element: HTMLElement, options?: ScrollToOptions): void;

  export default scrollTo;
}
