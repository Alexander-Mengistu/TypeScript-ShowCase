/* Array is container for data, sequnce of data stored in a object. in javascript everything is object behind the scene. but from highlevel arrays and objects are completely different
as array doesnt have methods and constructor functions can be written withing the array, only sequnce of data, and that data can be altered by outside function */

//primitive = string, number, bigInt, boolean, null, undefined, and symbol
//non-primitive = Objects, array and function and can hold mutiple values

//1.step = we can declare arrays, similiar to primitive types
let nuArray : number;             //keep chaing array name to eliminate conflict, but keep in mind its the same array, as all the steps below

//2.step = we add an opening and closing square bracket right after the type to indicate that this varible will hold an array.
let nArray: number[]             //keep chaing array name to eliminate conflict, but keep in mind its the same array, as all the steps below
 
//3.step assing value to the array
let nrray: number[] = [4,3,3]    //keep chaing array name to eliminate conflict, but keep in mind its the same array, as all the steps below




//array works same as javascript when maniplating values by index
let list: number[] = [3,2,5];
list[1]=2;      //change indext 1 to 2
console.log(list)

//push data into the array
let values: number[] = [2,2,5,]
values.push(4)
console.log(values)


//arrays can "utilise" union types
let stuff: (string | number)[];
stuff = ["coding", 43];
console.log(stuff)

//empty array and then push value
let item: string[] = [];
item.push("hi")
console.log(item)
