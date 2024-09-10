////////////////////////////////////////////////////var function 
//after declaring the type of our variable "myFunction, we can assign a matching function to the previously declared function type"

let myFunc: (x: number, y:number) => number;
//varible with function stating variable type and arugment value, also the parameter type

myFunc = function(x:number, y:number):
number {
    return x + y
    //return vlue been declared as a number on the varible above
}

//return value is number because argument and return value is a number
let result = myFunc(4, 20);
console.log(result)





//Type aliases can clarify certain coding patterns, like callbacks, type alias for our signature to give it a name like "Callback"
type Callback = (data: string) => void;

function processString(input: string, callback: Callback): void {
    const processed = input.toUpperCase();
    callback(processed)
}

const logResult: Callback = (data: string) => 
    {
        console.log(data)
    }

processString("im hungry", logResult)







type myFunc = (data: string) => void;
//example 3 ///////////The name of defined type alias is FunCition








//example 4 function become less safe when dont have "parametrs" and "return" type details