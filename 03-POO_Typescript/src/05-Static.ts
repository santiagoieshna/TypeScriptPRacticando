class Personaje04 {
    profesion?: string
    private static equipo: number = 0

    constructor(
        public readonly id: number,
        public name: string,
        private _nivel: number,
        private _hp: number
    ) { 
        Personaje04.incrementarEquipo()
    }

    static incrementarEquipo(): void
    {
        Personaje04.equipo++
    }
    static muestraCantidad(): number
    {
       return Personaje04.equipo
    }
}

var personajes: Personaje04[] = genPersonajes(8)
printArray(personajes)
console.log('Cantidad personajes: '+Personaje04.muestraCantidad());


function genPersonajes(cantidad: number): Personaje04[]
{
    var array: Personaje04[] = []
    var id: number= 0
    var hp= 100
    var nivel = 1
    for (let index = 0; index < cantidad; index++) {
        array.push(new Personaje04(id,'Vegeta'+id,nivel,hp))
        id++
        hp += 15
        if(index%2==0)
            nivel++
    }
    return array
}

function printArray(array:Personaje04[]):void{
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}