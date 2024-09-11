/* var a=10

while(a<15)
{
    console.log("I am Safa")
    a++
}
for (var j = 1; j<=5 ; j++) {
    console.log(j);
}

for (var k = 5; k >=1; k-- ) {
    console.log(k);
} 
 */

// break 
/* for(var i=1; i<=5; i++ ) {
    if ( i == 3) {
        break;
    }
    console.log(i);
}



// continue
for (var i =1; i <= 10; i++){
    if(i % 2 == 1) {
        continue;
    }
    console.log(i);
} 
 */


// String and array
let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Ice Cream"];
let len = name.length;

for(var i = 0; i < len; i++) {
    console.log(`Index : ${i}`);
    console.log(food[i]); 
    console.log(name[i]);
} 



//for-in string/array/object
//for-of string/array
let name1 = "I am learning Javascript!";
let food1 = ["Cake", "Chocolate", "Ice Cream"];

//object doesn't have index
let person = {
    name: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 33,
}

// We will get index
 for( var x in name1 ) {
    console.log(`index ${x} and item ${ name1[x] }` );
} 


// We will get items/values
for(var x of name1 ) {
    console.log(x);
}

// We will get indexes
for (var y in food1) {
    console.log(`Index: ${y}; and item: ${food[y]}`);
}

// We will get items
for (var y of food) {
    console.log(y);
}


// For-in with objects
for (var x in person) {
    console.log(`Property: ${x} Value: ${person[x] }`);
}
// For-of won't work for objects 



//problem
var n = parseInt(prompt("Enter the number of terms: "))
var sum=0
var series=""

for(var i=1;i <= n;i++){
    sum=sum+i*i
    series=series+(i**2).toString() + " "
    if(i==n){
        series+= "+"
    }

}
console.log(`${series} = ${sum}`)

//input : 3 ; output : 1 4 9 + = 14