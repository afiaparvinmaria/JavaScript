//Primtive types- deals with value and no change 
//number, string, boolean

let a=7
let b=a//b=7
a=45 //still b=7




//reference types - deals with address
//array,object

let numbers=[1,2,3,4]
let newnumbers = numbers //same address
numbers[1]= 70 //also change in newnumbers cz they share the same address


// Template literals (ES6)
// Backtick ``
let name = "Rahim";
let age = "38";
let dob = "21 June, 1983";

console.log(`His name is ${name}
His age is ${age}
Date of Birth ${dob}`);

let c = 34
let d = 67
console.log(`${c} + ${d} = ${ c + d }`);
