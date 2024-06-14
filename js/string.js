var a= 0xBB; // will return the decimal value 187
var y=a.toString();//"187"
var x=a.toString(16);//will return the hexa/binary/decimal num as string




var a= "heLLoworld"
var aa =a.length; //length of a string
b= a[0] //indexing
ba=a.toUpperCase()
bb=a.toLowerCase()
bc=a.trim(); //removes spaces from front and end
bd=a.slice(1,3)//returns 'eL'
be=a.slice(-5,-1)// returns 'worl'
bee=a.slice(1)//returns 'eLLoworld'
bf=a.concat("1", "2","b");// returns 'heLLoworld12b'
bg= a.substring(0,8)// returns 'heLLowor'
bh= a.substring(2)// returns 'LLoworld'
bi=a.replace("he","paaa")//'paaaLLoworld'
bj=a.concat(bi, "safa")//returns 'heLLoworldpaaaLLoworldsafa'