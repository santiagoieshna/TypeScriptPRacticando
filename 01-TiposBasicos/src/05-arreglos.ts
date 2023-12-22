// manera explicita
var animales: string[] = ['changuito','tortuga','gatete']

//Descomentar linea 7 para ver error
// manera tipo inferido
var numeritos2 = [] // Sera un any[]
//console.log(typeof(numeritos2));

var numeritos: Array<number>  
numeritos = [1,2, 5, -45, 89]

// Sige siendo un any[], pasar raton por encima
numeritos2= [6, -2, 1, 22, -81]

//animales.map(x=> x.) // el autocompletado sugiere metodos del tipo de dato
animales.forEach(x=>console.log(typeof(x)))
