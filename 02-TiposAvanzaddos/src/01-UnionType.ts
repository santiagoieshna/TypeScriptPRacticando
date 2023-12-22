
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
var cliente: ClienteSocio | ClienteHabitual = {id: 4, nombre: "Beltran"}


