//Classes are template for objects, class also describes object behavior. 
//typescript classes are similiar to javascript classes
//extends in class in java is keywords extends a class (indicates that a class is inherited from another class)
//extends in class component, you have the present component have all the omponent properties from the already existing component.

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
    protected password: number | string    //protected keyword in typescript prevents a property or methods of a class from being accessed outside of that class and its subclasses
    constructor(name: string) {
        this.name = name;
    }
}
const pet = new Dog("wolf")
console.log(pet.name)            




//////////////////////////////////////////////////example 06
//by using access modifiers, class properties are defined and initialized within the constructor parameters with proeprty declartion

class Car {
    constructor(public name: string) {
    }
}
let bmw = new Car("20det");
console.log(bmw.name);  // Accessing the 'name' property
