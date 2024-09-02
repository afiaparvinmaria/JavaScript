
//declaration of array
var count= ["Bangladesh","USA","Poland"] 
var numbers= []//declaring empty array

console.log(count[0]) //printing an array's element
//Bangladesh


let a=count.length //length of an array
console.log(a) // the length is 3


count[0]="Maria" //changing an element from index 0
console.log(count)
//['Maria', 'USA', 'Poland']


//if we dont know the length and want to add a new element
count[count.length]="Saudi"
console.log(count)
//['Maria', 'USA', 'Poland', 'Saudi']


//push and pop method in array
count.push(10)
console.log(count)
//['Maria', 'USA', 'Poland', 'Saudi', 10]
count.push("japan","Mexico","Palestine")
//['Maria', 'USA', 'Poland', 'Saudi', 10, 'japan', 'Mexico', 'Palestine']

count.pop()//removes the last element


//shift and unshift method
//it add and removes the first elements comes in the array
count.shift()//removes the first element index[0]
//['USA', 'Poland', 'Saudi', 10, 'japan', 'Mexico']

count.unshift("Maria")//add elements in index[0]



//string to array conversion using split() function
var v= "Afia"
//v=v.split() //"Afia" string becomes an element of array 
//var y=v.split("") //['A', 'f', 'i', 'a']
var z= v.split("i") //['Af', 'a']
var u= "My name is safa"
var x= u.split(" ")///['My', 'name', 'is', 'safa']



//array to string conversion using toString()
var arraytostring = ["array","to","string","conversion"]
//var z1= arraytostring.toString() // it converts the array to a string but it add commas by default after every element
//'array,to,string,conversion' //commas by default

//to avoid this problem we will use join
//var z1=arraytostring.join(" ")
//'array to string conversion' so its better to use join than using a split function



//concatenating array
let u1 = arraytostring.concat(count)
var b=["I"," am", " studying"]
var c=["Computer","Science"]
var d= b.concat(c) //['I', ' am', ' studying', 'Computer', 'Science']


//sorting an array ascending order
count.sort()

//reverse an array - sorting in decending order
count.reverse()