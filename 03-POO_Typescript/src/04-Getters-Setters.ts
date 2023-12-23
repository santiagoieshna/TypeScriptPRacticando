class Personaje03 {

    profesion?: string

    constructor(
        public readonly id: number,
        public name: string,
        private _nivel: number,
        private _hp: number
    ) { }
   
   get hp(): number {
       return this._hp
   }
   
   set hp(value: number) {
       this._hp = value;
   }
   
   get nivel(): number {
       return this._nivel;
   }
   
   set nivel(value: number) {
       this._nivel = value;
   }
}