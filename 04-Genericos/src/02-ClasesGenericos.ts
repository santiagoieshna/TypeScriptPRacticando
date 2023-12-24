

class Programador<T>{
    private ordenador: T;
    constructor(t:T){
        this.ordenador = t
     }
}

type Ordenador={
    encender: () => void,
    apagar: ()=> void
}

var acer: Ordenador = {
    encender: () => {console.log("Encendido");},
    apagar() {console.log('Apagado');},
}

var programador1 = new Programador<Ordenador>(acer)
var Programador2 = new Programador<string>('msi')
