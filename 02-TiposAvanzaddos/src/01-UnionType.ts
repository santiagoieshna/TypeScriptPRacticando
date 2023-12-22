
var jugador = 10
// Por tipo inferido es number, no deja poner otro tipo
//jugador= "Messi"

type ClienteHabitual = {
    id: number,
    nombre: string,
}
type ClienteSocio = {
    id: number,
    nombre: string,
    tarjetaDescuento: string
}
var cliente1: ClienteSocio | ClienteHabitual = {id: 4, nombre: "Beltran"}
var cliente2: ClienteSocio | ClienteHabitual = {id: 2, nombre: "Rangel",tarjetaDescuento:'25315-12-234'}

function sumarDos(n: number | string ):number
{
    if(typeof n === 'number'){
        return n+2
    }
    return parseInt(n)+2
}
