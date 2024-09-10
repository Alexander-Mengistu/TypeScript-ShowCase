//defining a function structure is known as creating its function signature. this signature serves as an interface, specifying the expected parameters and return types

let concatenate: (a: string, b:string) => string;

concatenate = function(a: string, b:string): 
string {
    return a + " " + b;
};

console.log(concatenate("more", "fries"));










//Type aliases can clarify certain coding patterns, like CallBackks, type alias for our signature to give it a name like "Callback"
type CallBackk = (data: string) => void;

function processString(input: string, CallBackk: CallBackk): void {
    const processed = input.toUpperCase();
    CallBackk(processed)
}

const LogResult: CallBackk = (data: string) => 
    {
        console.log(data)
    }
processString("i'm setting", LogResult)


//The code we written above is using old function format should refactor it to arrow function inline
//processString("Print Me!", data => {
//    console.log(data)
//})