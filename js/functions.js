// //built in functions
// //- alert()
// //- console.log()


// function myfunc()
// {
//     console.log("i am safa")

// }

// myfunc()



// //function paremeter/argument

// function func(a,b, fname="fn", lname="ln")//parameter
// //if there is no parameter fname or lname recieve then it will print fn ln by default

// {
//     console.log(`Hello ${ fname } ${ lname }!`);
//     var a,b
//     var sum= a+b
//     console.log(sum)

// }
// func(5,8,"mariam","safa")//arguments



// function addnum(a=0,b=0){
//     console.log(a+b)
// }
// addnum(4,5)
// addnum(2.5,2.5)



// //functional expression
// let func1= function(name){
//     console.log('Hello '+name)

// }


// //Arrow Function (ES6) Before ES6, functions in JavaScript were defined using the function keyword. 

// let func2=(name2)=>{
//     console.log("Hello "+ name2)

// }
// func1("Humayra")
// func2("simanta")



// Array iteration using forEach
var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];
let printeverything = function(item,i,abc){
    console.log(`Index : ${i} and Item: ${item}`)
    console.log(abc)
}
//array.forEach(callback)
foods.forEach(printeverything)//using foreach loop in foods array

/* When you call array.forEach(callback), JavaScript processes the array in a very specific way. The forEach() method is built into JavaScript and knows that:

First Argument (item): It always passes the current element (or "item") of the array as the first argument.
Second Argument (index): It always passes the index (position) of the current element as the second argument.
Third Argument (array): It always passes the entire array being iterated over as the third argument. */



//// Array iteration using Mapping
var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];


function addSomething(item) {
    return `${item} is a Food`;
}
/*function squarenumbers(item){
    return item*item
}*/
let arr_res = foods.map(addSomething);
//Here, the map function applies addSomething to each element of the foods array, producing a new array arr_res where each item is a string indicating that the food item is indeed a food.
let arr_square = numbers.map(function(item){ //annonymoous function declaration
    return item*item;
    //let arr_square = numbers.map(squarenumbers);
})

console.log(arr_res);
console.log(arr_square); 
/*output:[
  'Cake is a Food',
  'Ice Cream is a Food',
  'Chocolates is a Food',
  'Bread is a Food'
]
[ 1, 1024, 961, 4 ]
*/
