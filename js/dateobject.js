let val
let today= new Date()// // Keep 'today' as the Date object
console.log(today)
let a= new Date('November 2 1995 11:34:45')
//console.log(a)


// Get the month (0-based, 0 is January)
console.log(today.getMonth()); 

// Get the day of the month (1-31)
console.log(today.getDate()); 

// Get the day of the week (0-6, 0 is Sunday)
console.log(today.getDay()); 

// Get the full year (e.g., 2024)
console.log(today.getFullYear()); 

// Get the hours (0-23)
console.log(today.getHours()); 

// Get the minutes (0-59)
console.log(today.getMinutes()); 

// Get the seconds (0-59)
console.log(today.getSeconds()); 

// Get the milliseconds (0-999)
console.log(today.getMilliseconds()); 

// Get the time (number of milliseconds since January 1, 1970)
console.log(today.getTime()); 



a.setMonth(0);
a.setDate(12);
a.setFullYear(1996);
a.setHours(3);
console.log(a);