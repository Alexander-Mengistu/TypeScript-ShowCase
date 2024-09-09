//Abstract class is a class that cannot be instantiated directly. we use them as base classes from which other classes can be derived.
//We can use abstract classes to define a common structure but dont want them to be used directly
//all types of class list below
//"Regular Classes" 
//"Abstract Classes"
//"Concrete Classes"
//"Interface Classes"
//"Enums"
//"Nested Classes"
//"Data Classes"
//"Singleton Classes"
//"Static Classes"
//"Uitility Classes"
//"Generic Classes"
//"Decorator Classes"
//"Proxy Class"

//Class in javascript
//"Regular Classes"
//"Static Classes"
//"Abstract Classes"
//"Derived Classes"
//"Mixins"

//Typescript classes
//"Decorators Classes"
//"Abstract Base Classes with Decorators"
//"Mixins"


abstract class Animal {
    abstract makesound(): void;  //inside a class, we can also create an abstract method.
}
let x = new Animal();
//This will cause error as cant create new instances of animal, which is abstract class...hidden class

//To access a abstract class and its abstract methods, we need to extend the abstract classs using the extends keyword.
let wood: any extends new Animal {
    makeSound() {
        console.log("wwwoofff")
    }
}
const doggy = new Dog();
doggy.makeSound();
