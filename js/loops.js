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
let len = food.length;

for(var i = 0; i < len; i++) {
    console.log(`Index : ${i}`);
    console.log(food[i]); 
} 
