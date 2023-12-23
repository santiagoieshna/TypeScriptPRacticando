// Cambiamos nombres a los objetos, porque dan error con los archivos anteriores
class DatosBasicos01{

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

 
}

// OVERRIDE
class Producto01 extends DatosBasicos01{
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
}

class Categoria01 extends DatosBasicos01{
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

    agregarProducto( producto: Producto01)
    {
        this.productos.push(producto)
    }
    override get fullDesc()
    {
        return this.name+': '+super.fullDesc
    }
}

let producto02= new Producto01 ( 
    100,
    1,
    'iPhone',
    'este es un smartphone', 
    new Date(), 
    1
)

let categoria02 = new Categoria01(
    'Celulares',
    '',
    new Date(),
    1
)

categoria02.agregarProducto(producto02)

console.log(producto02, categoria02)

console.log(producto02.fullDesc);