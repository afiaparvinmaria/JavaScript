/* var n1=prompt("first number : ")
var n2= prompt("second number: ")
var n3=prompt("third number : ")

if (n1 >= n2) {
    if (n1 >= n3) {
        console.log(n1 + " is the largest!");
    }
    else {
        console.log(n3 + " is the largest!");
    }
} else {
    if (n2 >= n3) {
        console.log(n2 + " is the largest!");
    }
    else {
        console.log(n3 + " is the largest!");
    }
} 


 // Switch
 console.log("Select an option:na. Option 1 nb. Option 2 nc. Option 3 ");

 choice = prompt();
 
 var text;
 
 switch (choice) {
     case "a": //if(choice=="a")
         text = "Option 1 Selected!";
         break;
     case "b":
         text = "Option 2 Selected!";
         break;
     case "c":
         text = "Option 3 Selected!";
         break;
     default: // else
         text = "No option is selected!";
         break;
 }
 
 console.log(text); */

 /* var number = prompt("What is your number?");
number = parseInt(number);
var grade;

if ( number <= 100 && number >= 80 ) {
    grade = "A+";
} else if ( number < 80 && number >= 70 ) {
    grade = "A";
} else if ( number < 70 && number >= 60 ) {
    grade = "A-";
} else if ( number < 60 && number >= 50 ) {
    grade = "B";
} else if ( number < 50 && number >= 40 ) {
    grade = "C";
} else if ( number < 40 && number >= 33 ) {
    grade = "D";
} else if ( number < 30 && number >= 0 ) {
    grade = "F";
} else {
    grade = "Invalid Input!";
}

console.log("Your Grade: " + grade);  */


//switch problem
console.log("Select an Option: n1. Add n2. Subtractn3. Mulitply n4. Divide");

var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose an operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input!");
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) {
        console.log("No Result!");
    }
    else {
        console.log("Result: " + result);
    }
}  