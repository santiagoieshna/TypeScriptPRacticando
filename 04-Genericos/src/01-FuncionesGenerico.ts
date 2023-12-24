

function log<T, V>(a: T, b: V){
    console.log(a, b);
}

log<string, number>('dato', 42)
log<string, boolean>('datito',true)
log(1, 2)
log('Saludos', true)

// Ejemplo 

async function fetchData<T>(recurso: string): Promise<T>
{
    var respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id: string,
    name: string
}
async function main(){
    var user = fetchData<User>('/usuarios')
    
}