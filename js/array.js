//declare
const cars = new Array("Saab", "Volvo", "BMW");
var count=[1,3,4,7,0]
var num=[]
// Create an array with 40 undefined elements:
const points = new Array(40);  


count=[1,3,4,7,0]//array with 5 elements 
var b= count[4]//accssing elements 
b= count.length//length of array 5
count[0]=78
count[6]=98 //[78, 3, 4, 7, 0, empty, 98]
count[10]=100 //[78, 3, 4, 7, 0, empty, 98, empty × 3,100]
count[count.length]="bangla" //[78, 3, 4, 7, 0, empty, 98, empty × 3, 100, 'bangla']



count.push(18) //[78, 3, 4, 7, 0, empty, 98, empty × 3, 100, 'bangla',18]
count.pop() //removes the last inserted element 18
count.shift() //removes the first element
count.unshift(78) //add 78 as first element


//declaring empty array
var num=[]

//array split (convertion to array from string)
var x= "Bangladesh is a large country"
var y= x.split("a") // y=  ['B', 'ngl', 'desh is ', ' l', 'rge country'] split func makes array out of any element 



//array to string convertion
var a = ["Bangladesh"," China", " Finland"]
var z=a.toString() // returns 'Bangladesh, China, Finland' ( comma by default)
var p= "Bangladesh is a large country"
var t= p.split(" ") // now t is an array
var f=t.toString() // returns  a string with default comma 'Bangladesh,is,a,large,country'
//join decides what should be in between the strings instead of comma
f= t.join(" ") // returns 'Bangladesh is a large country'


//contatenation of array
var c = [1,3,5,6,7,9]
var b= [2,3,4]
var o= c.concat(b) // [1, 3, 5, 6, 7, 9, 2, 3, 4]


//sorting of array
document.write(o.sort())// [1, 2, 3, 3, 4, 5, 6, 7, 9]
o.reverse() // [9, 7, 6, 5, 4, 3, 3, 2, 1]
