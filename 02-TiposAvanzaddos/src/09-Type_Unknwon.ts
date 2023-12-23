
type Personita ={nombre:string, apellido:string }

function fn(params:unknown) {
    if( typeof params == 'number'){
        params.toFixed
    }
    if( typeof params == 'string'){
        params.toLowerCase
    }
    if(params instanceof HTMLAllCollection ){
        params.item
    }
}


