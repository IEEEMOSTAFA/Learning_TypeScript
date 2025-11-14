class Animal {
//  public name:string;
//      public species: string;
//     public sound: string;

    constructor( public name: string, public species: string, public sound:string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() : void{
        console.log(`Name is : ${this.name} present Address: ${this.sound}`)
    }


}
let result = new Animal("Mostafa","EEE","file doesnt match");

console.log(result.name);
result.makeSound();