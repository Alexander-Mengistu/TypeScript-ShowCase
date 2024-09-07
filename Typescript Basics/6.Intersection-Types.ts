//"Intersection Types"allows you to combine mutiple types into a single type
//"Intersection Types" lets you extends the types buy combining custom types.







//<<<<<<<<<<<<<<<<<<<<Example 1// "type alliases" or known as custom types
// in this "Intersection types" will combine to custom types
type Renters = {
    name: string
    age: number;
};

// "type alliases" or kwnown as custom types
type Landlords = {
    rooms: number | string;
}

type Realestate = Renters & Landlords;   // this is "intersection" lets you combine mutiple alliases

let agency: Realestate = {
    //a variable of an intersection type must satisfy all the types combined. of "Renters & Landlords"
    name: "alex",               
    age: 43,
    rooms: "name",
}








//<<<<<<<<<<<<<<<<<<<<<<Example 2//"Intersection Types" also lets you extends the types buy combining custom types.
type Renter = {
    name: string
    age: number;
};

// "type alliases" or kwnown as custom types
type HouseHold = Renters & {      //this "renders &" ensures the attributes of Renters is still listed
    status: boolean,
}

let PeoPle: HouseHold {
    name: james,
    age: number,
    status: boolean,
}



