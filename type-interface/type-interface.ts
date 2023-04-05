// On ne peut pas faire ça
type Point = {
  x: number
  y: number
}

type Point = {
  x: number
  y: number
}

// On peut faire ça, c'est "la fusion":

interface PointInterface {
  x: number
  y: number
}

interface PointInterface {
  x: number
  y: number
}

interface Window {
  googleAnalytics: string
}

window.googleAnalytics = 'ga-xxxxxx'
