//console.log(hight == "80"); // true
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
/* ===================================================== */
// function handleEvent() {
//     console.log("Hello");
// 
/*========================================================== */
// console.log("2" > "1"); // true
// console.log("2" >= "1"); // true
// console.log("2" < "1"); // false
// console.log("2" <= "1"); // false
// console.log("2" > 1); // true "2" is converted to number
// console.log("2" >= 1); // true "2" is converted to number
// console.log(2 > "1"); // true  
// console.log(2 >= "1"); // true
// console.log(2 < "1"); // false
// console.log(2 <= "1"); // false

/*========================================================== */

// comparing null with undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log("====================================================");
// comparing null with null
console.log(null == null); // true
console.log(null === null); // true

console.log("====================================================");

// comparing undefined with null
console.log(undefined == null); // true
console.log(undefined === null); // false

console.log("====================================================");

// comparing undefined with undefined
console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log("====================================================");

// comparing null with 0
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true

console.log("====================================================");

// comparing null with ""
console.log(null == ""); // false
console.log(null === ""); // false
console.log(null > ""); // false
console.log(null >= ""); // true

console.log("===================================================");

// comparing null with []
console.log(null == []); // false
//console.log(null === []); // false
console.log(null > []); // false
console.log(null >= []); // true

console.log("====================================================");

// comparing null with {}
console.log(null == {}); // false
//console.log(null === {}); // false
console.log(null > {}); // false
console.log(null >= {}); // true

console.log("====================================================");

// comparing null with function
console.log(null == function(){}); // false
//console.log(null === function(){}); // false
console.log(null > function(){}); // false
console.log(null >= function(){}); // false

console.log("====================================================");

// comparing null with number
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true

// comparing null with boolean
console.log(null == false); // false
console.log(null === false); // false
console.log(null > false); // false
console.log(null >= false); // true

console.log("====================================================");

// comparing undefined with 0
console.log(undefined == 0); // false
console.log(undefined === 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false

console.log("====================================================");

// comparing undefined with boolean
console.log(undefined == false); // false
console.log(undefined === false); // false
console.log(undefined > false); // false
console.log(undefined >= false); // false

console.log("====================================================");

//compare null with NaN
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true



