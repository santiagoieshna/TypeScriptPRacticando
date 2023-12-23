class Personaje02 {

    profesion?: string

    constructor(
        public readonly id: number,
        public name: string,
        private _nivel: number,
        private _hp: number
    ) { }
}


var personaje02 = new Personaje02(1, 'Sonic', 4, 100)
