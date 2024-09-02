//declaring an object

var student= {
    name:"safa", //properties
    age:24,
    hometown:"Dhaka"
}
//declaring an empty object
var teacher={}


//accessing a property
var j= student["age"] 
console.log(student.age)
console.log(student.name)

//changing property's value
student.age=30
student.name="Mariam Safa"
student.hometown="India"

//adding new property
student["occupatin"]= "student" //occupation is the property here


//deleting a property
delete student.occupatin


//creating and accessing an array in a object
let teachers= {
    name:"mastura", 
    age:24,
    arr:[1,2,3,4]
}

console.log(teachers.arr[0])
