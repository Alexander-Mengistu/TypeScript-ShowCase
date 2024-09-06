//objects is collection of properties and a property is an association between name or key value.
//objects are used to create real models of the world around us such as a Vechile example car is object, values are properties, and pressing gas and break is a function, which is called methods in javascript


//object data values for varible are declared withing the object block just like any varible.
let Vechile: {
    brand: string,
    year: number
}

Vechile = {
    brand: "nissan",
    year: 1996
};
console.log(Vechile.brand + " " + Vechile.year)   //accesing Vechile object properties brand and year

//change value name to something else. 
Vechile.brand = "toyota" 
console.log(Vechile.brand)                        //object proptertie has now changed to toyota
//keep in mind can store arrays in object using string[] or union for more broad data type




//in objects can also directly assign objects 

let players: {
    name: string,
    score: number[]
} = {
    name: "lee",
    score: [1,2,3]
};
console.log(players.score)



//typescript will "infer" when data types are not declare, infer = to make a well informed guess
let man = {
    person: "john",
    speed: [144,234,323]
}
//then access a array values from object can also store them in seperate variable, 
let scores: number[] = man.speed;
console.log(scores)


