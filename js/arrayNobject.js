//declaring an array in an array
 var arr= [10,12,["a","b"],9,11]
 
 //accessing the internal array
var a=arr[2][0] //"a"

//adding array3
var arr= [10,12,[["a","c"],"b"],9,11]
a= arr[2][0][1]//'c'

//adding an object in the array
arr= [10,12,["a","b"],9,11, {name:"safa",age:24,}]

//accessing the objects in the array
a=arr[5]

//accessing the properties in the object in an array
a=arr[5]["name"]//'safa'
a=arr[5].name


//complex
var carr=[1,2, {name:"mariam",age:[0,4,[56,90]],}]
a= carr[2]["age"][2][1]


