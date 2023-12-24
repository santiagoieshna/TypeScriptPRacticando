// Cambiamos nombres a los objetos, porque dan error con los archivos anteriores

// esta clase no va a ser usada
abstract class DatosBasicos02{

    constructor
    (
     public name: string,
     public desc: string,
     public created_at: Date,
     public created_by: number,
    ){}

    get fullYear(): number
    {
        return this.created_at.getFullYear()
    }
    // NUEVO METODO
    get fullDesc(){
        return this.name+' '+ this.desc
    }
    
    abstract guardar():void
}

// OVERRIDE
class Producto02 extends DatosBasicos02{
    
    constructor
    (
        public stock: number,
        public sku: number,

        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, desc, created_at, created_by)
    }

    override get fullDesc(){
        return 'Producto: '+super.fullDesc
    }
    override guardar(): void {
        console.log("Guardando Producto");
    }
}

class Categoria02 extends DatosBasicos02{
    public productos: Array<Producto01>
    constructor
    (
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, desc, created_at, created_by)
        this.productos= []
    }

    agregarProducto( producto: Producto02)
    {
        this.productos.push(producto)
    }
    override get fullDesc()
    {
        return 'Categoria: '+super.fullDesc
    }
    override guardar(): void {
        console.log("Guardando Categoria");
    }
}

let producto03= new Producto02 ( 
    100,
    1,
    'iPhone',
    'este es un smartphone', 
    new Date(), 
    1
)

let categoria03 = new Categoria02(
    'Celulares',
    '',
    new Date(),
    1
)

//let datos = new DatosBasicos02('dato1', 'desc', new Date(), 1)