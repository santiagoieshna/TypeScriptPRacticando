class Personaje01 {

    readonly id: number
    readonly name: string
    private nivel: number
    private hp: number
    profesion?: string


    constructor(id: number, name: string, nivel: number, hp: number){
        this.id = id
        this.name=name
        this.nivel=nivel
        this.hp=hp
    }
}


