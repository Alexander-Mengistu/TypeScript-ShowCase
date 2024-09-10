//Function, is a piece of code that has input and returns and output they is variety of different functions
//"Varibale" function" function assigned to a varible
//"Method " function is function inside of a object
//"Higher function" a function that recieves arrgument from another function
//"Anynomous function" function definition that is not bound to an identifier
//"Build-in function" functions that are pre-build that comes with the programming lanuage
//"Lambda functions" decorators are functions that can modify classes, methods, properties, or even parameters. They provide a way to add behavior or metadata to various parts of your code without altering the source code.
//"Impure function" functions that have side effects, takes arugments and maniplates them and output values change.
//"Return function" function that returns a output when the task is completed or function, similiar to promises
//"Void function" function that doesnt have return value
//"Default function" a value that can be used for a parameter if the calling statment does not pass an argument. if an argument is proveded, the default value is ignored, this is usefull to use with "optional type ?"
//Note default parametors are often used with "optional ?"

//to write a typescript function is similiar to javascript, just need to specify what the arguments of the functin will be
function greet(name : string) : void {  //void doesnt return value //varible is string
    console.log("hello" + name);
}
greet(" alex ")





//example 2///////////seperate them by commas 
function sum(a: number, b:number): void {
    const sum = a + b;
    console.log("the sum is " + sum)
}
sum(10,4)





////example 3/////////////////////////////////////////////
//if we return something, we define it by specifying the return type. in this case, we want to set it to number as we return a number
function Total(a: number, b:number): number {  //specify the arugment is a number
    const Total = a + b;
    console.log("the Total is " + Total)
    return Total  //because we specified value return is a number, will need to write "return"
}
Total(10,4)







////////////////////////////////////////////////////////This is how a void function is written
function logMessage(message: string): void {
    console.log(message);
}

logMessage("I love coding")




/////////////////////////////////////////////////////////////////////////example 04
function countCharacters(str: string): number {
    return str.length;
}
return str.length
}
console.log(countCharacters("TypeScript"));



//////////////////////////////////////////////////////////////////////////example 05
//optional symbol ? with function
function introPerson(name: string, occupation?: string): void {
    if (occupation !== undefined) {
        console.log(`hello, my name ${name} and my occupation is a ${occupation}.`);
    } else {
        console.log(
            `Hello, my Name is ${name} and my occupation is not specified.`);
    }
 }

 introducePerson("pam", "teacher") //This function satisfied both values in the function
 introducePerson("pam")   //This function doesnt satisfy both value, but doesnt cause error becaue other value is "optional"







 ////////////////////////////////////////////////////////////////////////////////example 06
 //default function, is default parameters if one of the arugments needed for function is not provided. can contine with default value insted
function calculateTotalPrice(price: number, taxRate: number = 0.05):
number {
    return price + (price * taxRate);
}
console.log(calculateTotalPrice(100)) //if second parameter is not provide function will continue with default variable
console.log(calculateTotalPrice(100,0.8)); //if second parameter is provided function will use it and ignore the deafult variable