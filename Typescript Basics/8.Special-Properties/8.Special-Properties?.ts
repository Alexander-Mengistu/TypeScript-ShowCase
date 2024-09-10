/* "Optional Properties" in typescript, you can use the ? symbol to mark a property or parameter as 
optional. This menas "the proeprty or parameter is not required" and its okay if is not provided. */

///////////////////////////////////////example 01
interface Human {
    firstName: string;
    lastName: string;
    middleName?: string;   //this indicates that this middle name is optional and if object doesnt contain varibale string, wont cause typescript error
}

let firstUser : Human = {
    firstName: "alex",
    lastName: "mengistu",
                           //here is the where the middelName string meant to be provided, since its optional because using ? symbol, wont cause error
}

let secondUser : Human = {
    firstName: "james",
    lastName: "hog",
    middleName: "wang",    // here i have a optional of a middle name
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------------------------------optioal code in use
function introducePerson(name: string, occupation?: string): void {
    if (occupation !== undefined) {
        console.log(`hello, my name ${name} and my occupation is a ${occupation}.`);
    } else {
        console.log(
            `Hello, my Name is ${name} and my occupation is not specified.`);
    }
 }

 introducePerson("pam", "teacher") //This function satisfied both values in the function
 introducePerson("pam")   //This function doesnt satisfy both value, but doesnt cause error becaue other value is "optional"


