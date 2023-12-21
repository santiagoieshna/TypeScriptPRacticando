var persona = {nombre: "Felix", edad: 22}
// Descomentar para ver error
//persona.nombre = true
//persona.edad = "VeintiDos"
persona.nombre= "Gavilanch"
//console.log(persona.nombre);

var canino: {
	nombre: string,
	raza: string,
	edad: number,
	tienePropietario: boolean
}= {nombre:"Kira", raza: "Yorkie", edad: 7, tienePropietario: true}

// Opcional
const humano:{
    nombre: string,
    edad?: number
} = {nombre: "Felix"}

// Solo lectura - READONLY
const perrete: {
	readonly nombre: string,
	raza: string,
	edad: number,
	tienePropietario?: boolean
}= {nombre:"Lira", raza: "Labrador", edad: 5}
// DESCOMENTAR para ver Error
//perrete.nombre = "Tobi"

enum RazaAves {
    Canario="Canario",
     Agaporni="Agaporni", 
     Paloma="Paloma",
      Avestruz="Avestruz"
}
type Pajaro= {
    readonly nombre: string,
    raza: RazaAves,
    edad?: number,
    esSalvaje: boolean
}
var p1: Pajaro = {
    nombre: "Piti",
    raza: RazaAves.Agaporni,
    esSalvaje: false
}
console.log(typeof(p1));

// Objeto dentro de objeto
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}
type Persona = {
    readonly id: number,
    nombre: string,
    direccion: Direccion
}
var p2: Persona = {
    id: 4,
    nombre: "Chavero",
    direccion: {
        numero: 11,
        calle: "San Roque",
        pais: "Spain"
    }
}