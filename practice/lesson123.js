//math
Math.round(2.5) // 3
Math.round(2.4) // 2

Math.round((2095 + 799) * 0.1) /100


'hello'
alert('hello');


//Lesson3

//strings
'some' + 'text'
'some' + 'more' + 'text'//concatenation

//typeof is an operator that returns the type of a value or variable
typeof 2 //number
typeof 'hello'//'string'
typeof true//boolean
typeof alert//function
typeof undefined//undefined
typeof null//object
typeof {}//object
typeof []//object
typeof Symbol()//symbol 
//type coercion is the process of converting value from one type to another
//for example when you add a number to a string the number is coerced into a string
'hello' + 3//'hello3'
3 + 3//'6'


'$' + 20.95 + 7.99//'$20.957.99' converts 20.95 to a string and concatenates it with the other strings
'$' + (20.95 + 7.99)//'$28.94' adds the numbers first and then converts the result to a string
'$' + (2095 + 799) / 100//'$28.94' adds the numbers first and then divides the result by 100 and then converts the result to a string

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100//'Items (2): $28.94' adds the numbers first and then divides the result by 100 and then converts the result to a string


"hello"
"I'm learning JavaScript"//single quotes inside double quotes

'I\'m learning JavaScript'//backslash is an escape character which allows you to use a single quote inside a single quote string
alert('some\ntext');//new line character


`hello`//backticks are used for template literals or template strings
//template literals features
//interpolation(feature1) ${} = insert value directly into a string
`Items (${1 + 1}): $${(2095 + 799) / 100}`//Items (2): $28.94 and no need of concatenation

//multiline strings(feature2)
`some
text`
`i am 
Afia parvin 
Maria`





//3a
'My name is:'
//3b
'Afia Parvin Maria'
//3c
'My name is ' + 'Afia Parvin Maria'//My name is Afia Parvin Maria
//3d
'total cost: $'+(5+3)//total cost: $8
//3e
`total cost: $${5+3}`//total cost: $8
//3f
alert('total cost: $'+(5+3))//total cost: $8
//3g
'total cost: $' + (599 + 295)/100 //total cost: $8.94 using concatenation
//3h
`tota cost: $${(599 + 295)/100}`//total cost: $8.94 using template literals
//3j
alert(`total cost: $${(599 + 295)/100}
Thank you, come again!`)//using multiline strings and template literals
//3k
`Items(${2+2}): $${(2*2095 + 2*799)/100}`//Items(4): $57.88
//3l
'Shipping & handling: $' + (499 + 499)/100
//`Shipping & handling: $${(499 + 499) / 100}` using template literals
//3m
`Total before tax: $${(2095*2 + 799*2 + 499 + 499)/100}`//Total before tax: $67.86
//3n
`Estimated tax (10%): ${Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1)/100}`//Estimated tax (10%): 6.79
//without math.round the result will be 6.7860000000000005
