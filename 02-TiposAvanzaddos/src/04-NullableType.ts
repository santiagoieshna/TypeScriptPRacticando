
function toNumber(s: string){
    return parseInt(s)
}

//var n = toNumber(null)

function toNumber2(s:string | null | undefined){
    // Preguntamos si NO existe
    if(!s){
        return 0
    }
    return parseInt(s)
}


