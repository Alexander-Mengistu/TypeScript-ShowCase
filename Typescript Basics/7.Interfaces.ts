//"Interfaces" helps define the shape of objects, enfore consistent structures, and support the application arthitecture by providing contract for what properties and methods should be implemented.
//"Interfaces" works similiar to type annotation for objects, allow you to define custom types for objects and enfore type safety


//Assigining an interface to a new vriable works exactly like specifiying a type
interface Person {
    name: string;   //specifying the attrubutes types every object interface includes
}

let Person: Person = {
    name: "alexander",
};

console.log(Person.name)








//using "extends" means class that is inherited fron another class in java
//"extends" in typescript menas we can create a new interface that inherits properties from an existing interface.

interface Animal {
    species: string
}

interface pets extends Animal {
    name: string;
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<same example from above just extended lol.
interface animal{
    species:string;
}

interface PET extends animal {
    name:string;
}

let doggy: PET = {
    species: "dog",   //interface extends another one, it must satisfy both the extened and the base interface
    name: "james"     //interface extends another one, it must satisfy both the extened and the base interface
}

