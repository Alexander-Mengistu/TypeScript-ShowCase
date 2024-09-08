//"readonly" indicates that the string cant be only be "read" or "print" cant be modified or maniplated

type Character = {
    readonly id: number;
    name: string;
}

let anna: Character = {
    id: 1,
    name: "anna"
};

anna.id = 2;   //This will cause a error as its only meant to be read only and not modified