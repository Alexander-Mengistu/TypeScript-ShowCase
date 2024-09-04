/* Key feature of TypeScript its use of types, unlike javascript where data types are dynamic and have automatic types converstion, 
this process can create create many undetected bugs that will know about only in run time, as javascript doesnt have a compiler. 
typescript has build in compiler, that is extenstion on the javascript code, typescript also has features that havent yet been introduced to javascript */

let person : string = "hi there";  //this is a annotation, the explicity of specifying the data type of variable, function parameters and return values 
console.log(typeof(person))        //data type is string

// type script has 3 ways of declaring varibles, var, let or const
// var is global variable can be accessed by any function, var is not recommended for use as its uses too much resources and can cause interfernce with other varibles as its global variable"
// let is the recommended version of varibales to use, as its scope based and muttable.
// const is immutable data place holder, this data cant be alterted or changed as re-assinging the varibale.

/*<---------------------------------------------Benefits of Static-Typing------------------------------------------------------------>*/
// once assign a varible cant re-assing it to another varible
let greeting: string = "Hello, world!";
greeting = 43;
console.log(greeting)  //this will throw a error

/*<---------------------------------------------Declaring and assign varible------------------------------------------------------------>*/
// Setting the type to number, than assign the value
let km: number;
km = 43;
console.log(km)

/*<---------------------------------------------Type Inference ------------------------------------------------------------>*/
// is the automatic detection of the the type of an expression
//example we create a varible and dont assign it to anything
let price = 100;
price = 200;
console.log(price)   //answer is 200, same data type so can be reassinged

let PriCe = 100
PriCe = "this will result in error"
console.log(typeof(PriCe))               //this will result in a error because, 'string' is not assignable to type 'number'

/*<---------------------------------------------Best Practice with - Type Interfernce ------------------------------------------------------------>*/
//even without delcaring annotation with typescript varible can work and will result in erro because of type interfernce feature, its best practice to just write it for visual aids, practice

/*<--------------------------------------------- Varible data types ------------------------------------------------------------>*/
//1.Boolean                    //Boolean is data type for true and fales 
//2.Number                     //Number data type
//3.String                     //String data type
//4.Array                      //Sequnce of data that is mutable and can be re-aranged
//5.Tuples                     //Sequnce of data that is immutable and order matter 
//6.Enums
//7.Unkown
//8.Any                         //Any is similiar to how javascript works now, removes safety net for typescript /*static typing* bypassing/ 
//9.Void                        
//10.Null and Undefined         //Primitive values are undefined, , null , booleans, numbers, bigints, strings). With this type, we can't access any properties of a value.
//11.Never
//12.Objects                    //everything in standard javascript is object, 
/* all data types     https://www.typescriptlang.org/docs/handbook/basic-types.html*/

/*<--------------------------------------------- Any data type ------------------------------------------------------------>*/
//Any is similiar to how javascript works now, removes safety net for typescript /*static typing*/
let car : any = "who am i"
console.log(typeof(car))   //varible type is string
car = 43
console.log(typeof(car))   //varible type is a number now




/*<--------------------------------------------- Varible data types ------------------------------------------------------------>*/




