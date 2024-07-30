// Instructions:
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)

const sequence:number[] = [1, 2, 3, 4, 5, 6];
const animals:string[] = ["pangolin", "monkey", "cat", "dog"];

// const stringsAndNumbers:(string|number)[]= [1, "one", 2, "two", 3, "three"];
const stringsAndNumbers:any= [1, "one", 2, "two", 3, "three"];
// const explicit = [1, 2, 3, 4, 5, 6,3,4,5];
// const possible = [1, 2, 3, 4, 5,];

// const allMyArrays:(string|number)[][] = [sequence, animals, stringsAndNumbers];
const allMyArrays:any = [sequence, animals, stringsAndNumbers];

console.log("Exercise 1.5", allMyArrays);
