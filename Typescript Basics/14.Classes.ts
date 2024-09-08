//Classes are template for objects, class also describes object behavior. 
//typescript classes are similiar to javascript classes

class Mane {
    name: string  //specifying the parameter value type
    constructor(name: string) {
        this.name = name
    }
}
let sheila = new Mane("Sheila")     //Instanctaiating and using a class works as you'd expect
console.log(sheila.name)


//////////////////////////////////////////benefit of using typescript is in class, all properties are accessible from the outside in javascript. The "public" keyword in typescript makes that explicit

class Dog {
    public name: string  //in javascript this is public accessible. in typescript have to make it explict
    private id: number   //in typescript this makes the class value private, from the outside function
    constructor(name: string) {
        this.name = name;
    }
}
const pet = new Dog("wolf")
console.log(pet.name)