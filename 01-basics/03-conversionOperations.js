let score = 33;

// find type of score
console.log(typeof score); // number

let scoreString = "33";
// find type of score
console.log(typeof scoreString); // string

let isScoreAvailable = true;
// find type of score
console.log(typeof score); // boolean
//covert isScoreAvailable to number

let isScoreAvailableNum = Number(isScoreAvailable);
console.log(typeof isScoreAvailableNum); // number
console.log(isScoreAvailableNum); // 1

// Convert scoreString to number
let scoreStringNum = Number(scoreString);
// find type of scoreStringNum
console.log(typeof scoreStringNum); // number

scoreString = "33abc";
// find type of scoreString
console.log(typeof scoreString); // string

// Convert scoreString to number
scoreStringNum = Number(scoreString);
// find type of scoreStringNum
console.log(typeof scoreStringNum); // NaN -> Not a Number

score = null;
// find type of score
console.log(typeof score); // object

//covert score to number
score = Number(score);
// find type of score
console.log(typeof score); // number
console.log(score); // 0

score = undefined;
// find type of score
console.log(typeof score); // undefined

//covert score to number
score = Number(score);
// find type of score
console.log(typeof score); // number
console.log(score); // NaN

let isLoggedIn = 1;
// find type of isLoggedIn
console.log(typeof isLoggedIn); // number
// convert isLoggedIn to boolean
isLoggedIn = Boolean(isLoggedIn); 
// find type of isLoggedIn
console.log(typeof isLoggedIn); // boolean
console.log(isLoggedIn); // 1 -> true

isLoggedIn = 0;
// find type of isLoggedIn
console.log(typeof isLoggedIn); // number
// convert isLoggedIn to boolean
isLoggedIn = Boolean(isLoggedIn); 
// find type of isLoggedIn
console.log(typeof isLoggedIn); // boolean
console.log(isLoggedIn); // 0 -> false

let emptyString = "";
// find type of emptyString
console.log(typeof emptyString); // string
// convert emptyString to boolean
emptyString = Boolean(emptyString);
// find type of emptyString
console.log(typeof emptyString); // boolean
console.log(emptyString); // "" ->  false

emptyString = " ";
// find type of emptyString
console.log(typeof emptyString); // string
// convert emptyString to boolean
emptyString = Boolean(emptyString);
// find type of emptyString
console.log(typeof emptyString); // boolean
console.log(emptyString); // " " ->  true

let hight = 80;
// find type of hight
console.log(typeof hight); // number
// convert hight to string
hight = String(hight);
console.log(typeof hight); // string
console.log(hight); // 80 ->  80


