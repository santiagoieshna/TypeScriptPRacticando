
var diaActual: string = "lunes"

// Dia puede obtener cualquier valor
diaActual = 'perro viejo'

var dia: 'lunes'| 'martes'| 'miercoles'| 'jueves'|'viernes'|'sabado'|'domingo'

dia = 'martes'
// // Descomentar para ver error
//dia = 'cachorra'

// Type Alias
type diaNombre = 'lunes'| 'martes'| 'miercoles'| 'jueves'|'viernes'|'sabado'|'domingo'

var hoy: diaNombre = 'lunes'

//Si de pronto se pueden identicar los dias por numero también
type numeroDia = 1|2|3|4|5|6|7

var diaHoy: diaNombre | numeroDia
diaHoy = 'viernes'
diaHoy = 3

//Otra opcion: Recoger todo en un type
type Dia= diaNombre|numeroDia
var hoyDia: Dia = 'lunes'
var hoyDia: Dia = 4

