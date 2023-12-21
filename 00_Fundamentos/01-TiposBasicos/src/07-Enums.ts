// Descomentar para ver error -> reasignar valor aconstante
// const chica ='s'
// const mediana ='m'
// const grande ='l'
// const extragrande ='xl'
//chica = 'a'

// Definir un Enum
enum Talla {
    chica= 's',
    mediana='m',
    grande='l',
    extragrande='xl'
}
// // Descomentar apra Ejecutar
// var tallaCamisaVerde: Talla
// tallaCamisaVerde = Talla.chica
// console.log(tallaCamisaVerde)

// var tallaChaquetaInvierno: string = 'm'
// var tallaChaquetaVaquera: Talla = Talla.extragrande
// // Ver si corresponde lo mismo
// var esMismaTalla: boolean = tallaChaquetaInvierno == Talla.mediana
// console.log("\nChaqueta de Invierno es de talla mediana? "+ esMismaTalla);

// console.log("\nLas chaquetas son de la misma talla? "+ (tallaChaquetaVaquera==tallaChaquetaInvierno));

// console.log("\nChaqueta Vaqueda Talla: "+ tallaChaquetaVaquera)

// // Descomentar 1 a 1 para ir vienddo valores
// enum Estado {Success=7, Error=14, Loading, IDLE}
// enum Estado {Success, Error=12, Loading, IDLE}
// enum Estado {Success=4, Error, Loading, IDLE}
// enum Estado {Success, Error, Loading, IDLE}

// console.log(Estado.Success); 
// console.log(Estado.Error);
// console.log(Estado.Loading);
// console.log(Estado.IDLE);

const enum LoadingState{Idle, Loading, Succes, Error}

var estado = LoadingState.Succes