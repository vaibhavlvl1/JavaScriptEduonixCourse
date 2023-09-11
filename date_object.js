// create date object

var date = new Date();
console.log(date);

// create date 

var Bdate = new Date("November 12,1994,11:00:00");
console.log(Bdate)

// methods of Date Object

var adjBdate = new Date("May 5,1995 13:00:00")
console.log(adjBdate)


// Date Object get Methods

// date
console.log(Bdate.getDate())

// weekday as number
console.log(Bdate.getDay())
console.log(Bdate.getFullYear())
console.log(Bdate.getMonth())


//  Date ibject set Methods

adjBdate.setDate(12)
console.log(adjBdate)

//  all above get can be sets



// this get miliseconds from 1970 to date set
var x = date.setFullYear(1990);
console.log(x)