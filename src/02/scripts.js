const log = console.log;
// Day 2: 

let num_1 = 3;
let num_2 = 3;

log(typeof num_2);

// Math
const math = Math.PI;

const header = document.querySelector('h1');
header.style.color = "crimson"
header.style.fontFamily = "sans-serif";

// string methods - accessing different characters
let name = "Marc";
let firstLetter = name[0]

log(firstLetter);

const fullName = "Blanchard";
// finding the last letter - 2 ways to find it
let lastIndex = fullName.length - 1;
log(fullName[lastIndex]);


// second method
const secondWay = fullName[-1];
log("This is the last letter using a negative number as the last index: " +  secondWay)

// substr()
const hero = "Iron Man";
const subStr = hero.substr(0, 4);
log(subStr);


// substring() 
const car = "Lamborghini";
const subString = car

// split()
const str = "30 Days of JavaScript";
const strSplit = str.split(' ');
log(strSplit.length)
log(strSplit);


// trim()
const firstName = "      Elon ";
log(firstName);
const lastName = "Musk";
log(firstName.trim(), lastName);

// includes()
if(str.includes('30')){
    log("The string does contain the substring");
}else{
    log("The string does not contains the substring");
}


// replace()
const newString = "My first language is JavaScript";
log(newString.replace('JavaScript', 'Python'));

// charAt()
const secString = "Nikola Tesla is the greatest inventor";
log(secString.charAt(0));


// indexOf()
log(str.indexOf("o"));

// startsWith() 
const lastStr = "it takes a substring as an argument and it";
log(lastStr.startsWith('i'));

// endsWith() 
log(lastStr.endsWith('t'));

// search()
const newStr = "it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign"
log(newStr.search('or'))

// match() 
const strEnd = 'I love JavaScript. If you do not love JavaScript what else can you love';
log(strEnd.match('you'));
log(strEnd.charAt(22))


// converting a string to a number 
let numStr = '10';
log(numStr + 8 + " is the string");

let numInt = parseInt(numStr);
log(numInt * 8);

// converting a string to float
