//  Objects
// 1 Funksya
// 2 Array
// 3 Object

// Funksyalar:
// 1 Function: Function decloration
function name(params) {}

// 2 Function: Function expression
const name = function (params) {};

// 3 Function: Arrow Function
const name = (params) => {};

// Farqlari:

// Function decloration:
name("argument"); // oldindaha chaqirish muammo emas
function name(params) {}
name("argument");

// Function expression:
name("argument"); // ReferenceError: Cannot access 'name' before initialization
const name = function (params) {};
name("argument");

// Arrow Function
name("argument"); // ReferenceError: Cannot access 'name' before initialization
const name = (params) => {};
name("argument");

//Array:
let b = ["Azimjon", "Nodir", "Bahrom"]; // index bo'yicha o'zaruvchiga bog'lanish

//Object:
let a = {               // Key bo'yicha o'zgaruvchiga bog'lanish
    name: "Azimjon",
    age: 23,
};
