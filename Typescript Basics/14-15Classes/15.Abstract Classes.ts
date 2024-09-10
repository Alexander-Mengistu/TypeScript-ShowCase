//Abstract class is a class that cannot be instantiated directly. we use them as base classes from which other classes can be derived.
//We can use abstract classes to define a common structure but dont want them to be used directly
//all types of class list below
//this first section of class is structured around typescript
//"Regular Classes" - The JavaScript RegExp class represents regular expressions, and both String and RegExp define methods that use regular expressions to perform powerful pattern-matching and search-and-replace functions on text.
//"Abstract Classes" - An abstract class is a class that cannot be instantiated. This means that you cannot use an abstract class to directly create an object. if we think of a class as a blueprint for constructing a house for example, then an abstract class is a type of blueprint that we cannot use to directly build a house.
//"Concrete Classes" - A concrete class is a class that allows creating an instance or an object using the new keyword. A concrete method is a method that can be called directly.
//"Interface Classes" - Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development.
//"Enums" - Enums are a feature added to JavaScript in TypeScript which makes it easier to handle named sets of constants. By default an enum is number based, starting at zero, and each option is assigned an increment by one. This is useful when the value is not important. enum CompassDirection { North, East, South, West, }
//"Nested Classes" - you can create 3 different nested classes in typescript - read more https://www.geeksforgeeks.org/how-to-create-nested-classes-in-typescript/
//"Data Classes" - A data class is a list of data set allocation attributes and their values. You cannot assign a data class to an object; however, data class may be used for allocation of a scratch tape to be used to write objects.
//"Singleton Classes" - The Singleton pattern is a design pattern that restricts the instantiation of a class to a single instance. This is particularly useful when a single object is required to control and coordinate actions across a system.
//"Static Classes" - In TypeScript, you can use the static keyword to define static class members, including properties. A static property is a property that is shared across all instances of a class, and can be accessed without creating an instance of the class.
//"Uitility Classes" - TypeScript provides a feature known as utility types which help in common type transformations. These utilities help you manipulate types easily, making your applications more robust and maintainable.
//"Generic Classes" - Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use. Generics makes it easier to write reusable code.
//"Decorator Classes" - Decorators are a TypeScript feature that enables the application of higher-order functions to class constructors and their members. These functions, known as decorators, are prefixed with the '@' symbol and are applied using special metadata to classes and class members during the compilation process.
//"Proxy Class" - Description. The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.
//"Mixins" - Mixins are a faux-multiple inheritance pattern for classes in JavaScript which TypeScript has support for. The pattern allows you to create a class which is a merge of many classes. To get started, we need a type which we'll use to extend other classes from.

//Class in javascript - Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes. For more examples and explanations, see the Using classes guide.
//"Regular Classes" - The JavaScript RegExp class represents regular expressions, and both String and RegExp define methods that use regular expressions to perform powerful pattern-matching and search-and-replace functions on text.
//"Static Classes" - A static class is basically the same as a non-static class, but there is one difference: a static class cannot be instantiated. In other words, you cannot use the new operator to create a variable of the class type
//"Abstract Classes" - Abstract classes are useful for structuring and enforcing behaviors within our code. With an abstract class, developers can establish and enforce how each sub-class should be implemented. This helps with documentation and communicating the intended structure of our code.
//"Derived Classes" - Instead, in object-oriented programming, we would create a derived class. The derived class has access to all public properties of the parent class. In JavaScript, derived classes are declared with an extends clause, which indicates the class it extends from.
//"Mixins" - A mixin is a class whose methods are added to, or mixed in, with another class. A base class includes the methods from a mixin instead of inheriting from it. This allows you to add to or augment the behavior of the base class by adding different mixins to it.

//Typescript classes - 
//"Decorators Classes"
//"Abstract Base Classes with Decorators"
//"Mixins" - Mixins are a faux-multiple inheritance pattern for classes in JavaScript which TypeScript has support for. The pattern allows you to create a class which is a merge of many classes. To get started, we need a type which we'll use to extend other classes from.


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
