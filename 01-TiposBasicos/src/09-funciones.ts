// Sin tipar
var fn: () => void = () =>{}
function fn1():void{}

// Tipando
var fn: () => void = () =>{}
function fn2():void{}

// Tipado con retorno number
var fn3: () => number = () =>{
    return 2
}

function duplicar(x: number):number{
    return x*2
}
console.log(duplicar(12));

// Usando variable de arrow function
// Primero tipamos su parametro y retorno
var numeroPar: (x: number) => boolean 
// implementamos
numeroPar = (x) =>{
    if(x%2 == 0){
        return true
    }
    return false
}
//Llamamos
console.log(numeroPar(4));

// // DESCOMENTAR para ver el warning (no compila)
// numeroPar = (x) =>{
//     return false
// }
// // unddefined implicito
// function mayorDeEdad( edad: number)
// {
//  if(edad > 17)
// 	 return true
// }