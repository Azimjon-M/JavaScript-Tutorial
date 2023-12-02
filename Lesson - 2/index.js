//  Data Types in JavaScript 8

// 1 Number
// 2 Bigint
// 3 String
// 4 Boolean
// 5 Null
// 6 Undefined
// 7 Symbols
// 8 Objects

// Premitive Data type deb o'zida value qaytaradi
// Premitive Data Type:
// 1 Number
// 2 Bigint
// 3 String
// 4 Boolean
// 5 Null
// 6 Undefined
// 7 Symbols

// non Premitive Data type deb o'zidan referens (link) qayteradi
// non Premitive Data Type:
// 8 Objects

let N = 123; //Number
let Bint = 1231231312313123n; //Bigint
let S = "string"; //String
let B = true; //(true, false)   //Boolean
let Nl = null; //Null
let U; //Undefined
let Sy; //Symbols Bizga unik ID yasab beradi

//  Objects:
//  1 Function
function name(params) {}
name("argument");

//  2 Array
let a = [];

// 3 Object
let l = {};

//  Null va Undefined farqi
console.log(typeof null); //object
console.log(typeof undefined); //undefined

//  (null == undefined) // true
//  (null === undefined) // false

console.log(null + 1);  // 1
console.log(undefined + 1); // NaN (Not a Number)
