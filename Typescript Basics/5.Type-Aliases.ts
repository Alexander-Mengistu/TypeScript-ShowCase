// "Type Aliases" creats a name for a types,  lets you create custom types
// "Type Aliases" gives types a name, making code clear and safer. we define "type Aliases" using "type" keyword.
// "Type Aliases are just another way to refer to the type they represent"

//<------------------------------------example 1-------------------------------------->
type person = {
    height: number;
    name: string;
    speed: number;  //union 
}

let person: person = {
    height: 43,
    name: "alex",
    speed: 43,
}
console.log(typeof(person.speed))

//<------------------------------------example 2-------------------------------------->
type PriceSeries = number[]                            //change the data type from numberarray to PriceSeries, benefits this can make visual aids performance on anaylsing and reading code
let cars: PriceSeries = [3, 3, 5, 2, 5]
console.log(typeof(cars[2]))

//<------------------------------------example 3-------------------------------------->



