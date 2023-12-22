function fn(x: number | string){
    if(typeof x == 'number'){
        x.toFixed // TS te da metodos de number
    }
    if( typeof x == 'string'){
        x.replace // TS da metodos de string
    }
}