
class Personaje {

    id: number
    name: string
    nivel: number
    hp: number
    
    constructor(id: number, name: string, nivel: number, hp: number){
        this.id = id
        this.name=name
        this.nivel=nivel
        this.hp=hp
    }
    subirNivel(): number
    {
       return ++this.nivel
    }
    bajarNivel(): number
    {
       return --this.nivel
    }
    restarHp(cantidad: number): number
    {
        this.hp=this.hp - cantidad;
        return this.hp
    }
}

var personaje: Personaje = new Personaje(1, 'Goku', 2, 100)
console.log(personaje.bajarNivel());
console.log(personaje.nivel);

console.log(personaje.restarHp(10));

if( personaje instanceof Personaje){

}