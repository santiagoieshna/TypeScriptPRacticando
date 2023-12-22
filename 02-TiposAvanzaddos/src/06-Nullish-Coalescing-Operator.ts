
var difficulty: number | null = null // cmabiar a 0 para ver la diferencia

const user2 = {
    userName: 'Cenizo49',
    modo: difficulty || 1 // Operador || 
}
console.log("user2 "+user2.modo);
/* 
 Cuando usamos OR el evalua a traves de falsy.
 ver mas: https://arielfuggini.com/javascript-valores-truthy-falsy/
 falsy da falso en los sigueinte casos -> '' ; 0 ; undefined ; null
 en nuestro caso el 0 y '' nos puede interesar por lo tanto el OR no
 nos sirve como solucion para valor por defecto.
*/

// USANDO NULLISH
var user01 = {
    userName: 'Cenizo49',
    modo: difficulty ?? 1 
} 
console.log("user2 "+user01.modo);