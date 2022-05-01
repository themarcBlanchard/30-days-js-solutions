const log = console.log;

// Exercise: Level 1
// 1. 
const challenge = '30 Days Of JavaScript';
// 2.
log(challenge);
// 3.
log(challenge.length);
// 4.
const upperChallenge = challenge.toUpperCase();
log(upperChallenge);
// 5.
const lowerChallenge = challenge.toLocaleLowerCase();
log(lowerChallenge);
// 6.
const slicing = challenge.substr(0, 2);
log(slicing);
// 7.
const slicing2 = challenge.substr(2);
log(slicing2);
// 8.
const containScript = challenge.includes("Script");
log(containScript);
// 9.
const splitting = challenge.split(' ');
log(splitting);
// 10. 
const titans = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', ');
log(titans);
// 11.
const replace = challenge.replace("JavaScript", "Python");
log(replace);
// 13.
const whatChar = challenge.charAt(15);
log(whatChar);
// 19.
const newSent = "You cannot end a sentence with because because because is a conjunction.";
log(newSent.search('because'));
// 21.
log(challenge.startsWith("3"));
// 22.
log(challenge.endsWith('t'));
// 23.
log(challenge.match('a'));
// 24.
const firstConcat = '30 Days Of';
const secConcat = "JavaScript";
log(firstConcat.concat(" " + secConcat));
// 25.
log(challenge.concat("\n").repeat(2));


// Exercise: Level 2
// 1. 
log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
// 2.
log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t give money but reach out your hand instead."');
// 3.
const strTen = '10';
const numTen = 10;
if(strTen !== numTen){
    log(+strTen === numTen);
}
// 5.
if('python'.includes('on') && "jargon".includes('on')){
    log("They have it");
}else{
    log('They dont have it')
}
// 6.
const lastSent = "I hope this course is not full of jargon."
log(lastSent.includes('jargon'));

// 11.
log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');

// Exercise: Level 3 

// 1.
log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match('love'));
