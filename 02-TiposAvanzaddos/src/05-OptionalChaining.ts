// Problema principal
function getUser( id: number) {
    if(id<0){
       return null // returna nll
    }
    return {
        id:1,
        name:'CachorroTravieso',
        created_at: new Date()
    }
}
var user = getUser(-1)
// // Descomentar para ver Error
// // user is posiblemente 'null'
// console.log(user.created_at)

// Solucion
console.log(user?.created_at)

// ARRAYS
const arrayUno = null
console.log(arrayUno?.[0]);

// FUNCIONES
var fn1: any = null
console.log(fn1?.());

// nos ahorramos esta validacion

function existeFn( fn: any ){
    if(fn){
        return fn()
    }
}
console.log(existeFn(fn1));