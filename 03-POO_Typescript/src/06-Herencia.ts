
/**
 * Producto
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 * 
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */
class DatosBasicos{

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
}

class Producto extends DatosBasicos{
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
}

class Categoria extends DatosBasicos{
    public productos: Array<Producto>
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

    agregarProducto( producto: Producto)
    {
        this.productos.push(producto)
    }
}

let producto01= new Producto ( 
    100,
    1,
    'iPhone',
    'este es un smartphone', 
    new Date(), 
    1
)

let categoria01 = new Categoria(
    'Celulares',
    '',
    new Date(),
    1
)

categoria01.agregarProducto(producto01)

console.log(producto01, categoria01);

