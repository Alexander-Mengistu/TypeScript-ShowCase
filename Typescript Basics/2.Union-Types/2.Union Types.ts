//A "union type" describes value that can be on of several types. utilising vertical bar to seperate thems and bar also means "or" gate
//Benefit of "union types" is sometimes its helful to allow mutiple types of values instead of just one, because scenarios where a value might change.
//and union can be utilised for re-assigning variable to different data types.

//01 example variable: number | string;
let variable: number | string;
variable = "  this is a string"    //typescript wont complain as string is part of the union, one of the data type metnion above
console.log(typeof(variable) + ( variable))

variable =  43;                    // re-assing a varible type from a string to a number, and typescript wont complain
console.log(typeof(variable) + (" " + variable))

//02 example union can combine mutiple types in one varible
let VarIable: number | string | boolean;
VarIable = 43;
VarIable = "hi there"
VarIable = true;
console.log(VarIable)

//03 can combine null and undefined aswell
//undefined means variable been declared but not yet been assigned a value.
//null is assignment value means that a variable has been declared and given the value of null
//null & undefined represents the absence of a value. null is an assignment value that represents no value or no object. it is often use to indicate that a varible has no value or that an object does not exist.

//null example
let hold: string | null;
hold = null;
console.log(hold)

//undefined example
let holdsomething: number | undefined;
holdsomething = undefined;
console.log(holdsomething)

