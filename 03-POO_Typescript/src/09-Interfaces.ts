
interface Animal{
  name: string
  caminar(): void
  onomatopeya():string 
}

class Caballo implements Animal{

    constructor(
        public name:string
        
    ){ }

    caminar(): void {
       console.log("Troto");
    }
    onomatopeya(): string {
      return 'Hii'
    }
}

type Canino = {
    name: string
    caminar(): void
    onomatopeya():string 
}

class Perro implements Canino{
    
    constructor(
        public name:string
        
    ){ }
    
    caminar(): void {
        console.log("Camino");
    }
    onomatopeya(): string {
        return 'Hii'
    }
}