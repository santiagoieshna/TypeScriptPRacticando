type Audit = {
    created_at: string,
    modified_at: string
}
type Product ={
    name: string
}
// Variable con propiedades de dos tipos
var product: Audit & Product = {
    created_at: '05/04/2022',
    modified_at: '01/07/2023',
    name: 'tema1.doc',
}

