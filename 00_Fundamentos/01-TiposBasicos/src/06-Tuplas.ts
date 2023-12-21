var tupla = [1, "Uno"]
tupla = [2, "Uno"]
tupla = [3,1]
// Deberia dar error, pero no declaro explicito el tipo tupla
tupla = [4,2,"cinco"] 

var tuplita: [number, string] = [1,"Uno"]
tuplita = [2, "sonrisa"]
// Descomentar apra ver error
// tuplita = ["Uno",1]
// tuplita = [2 ,2]
// tuplita = [1, "cachorro", 2]

var tupla2: [number, boolean]
tupla2 = [2 , true]
tupla2.push(8) // No arroja error
console.log(tupla2);