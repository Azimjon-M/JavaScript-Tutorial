// Logical Operations
// ||, &&, ??

// (true || true) => true
// (true || false) => true
// (false || true) => true
// (false || false) => false

// (true && true) => true
// (true && false) => false
// (false && false) => false
// (false && false) => false

let a = true;
let b = false;

console.log(a == true || a == true); // => log(a || a) = true
console.log(a || b); // true
console.log(b || a); // true
console.log(b || b); // false

console.log(a && a); // true
console.log(a && b); // false
console.log(b && a); // false
console.log(b && b); // false

//Nulish ??
// for Null, Undefined (bo'lsa)

let x = null;
let y; // = undefined
console.log(x ?? "Ma'lumot yetib kelmagan!");
console.log(y ?? "Ma'lumot yetib kelmagan!");
