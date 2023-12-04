// Operators
// +, -, *, /, %, (), ++, -- **

let a = 5;
let b = 10;
let c = 5;

console.log(a + c); // 10
console.log(b - a); // 5
console.log(a * c); // 25
console.log(b / a); // 2
console.log(b % a); // 0
console.log(11 % a); // 1
console.log(18 % a); // 3
console.log(a + b / c * a); // b/c*a+a 15
console.log((a + b) / c * a); // a+b/c*a 15
console.log(a++); //a=5
console.log(a); // a=6
console.log(a--); //a=6
console.log(a); //a=5
console.log(++b); //b=11
console.log(--b); //b=10
console.log(a**2); //25 (kvadrad) darajaga oshirish

a = a + 1 // = a+= 1
b += 1 
console.log(a); // 6
console.log(b); // 11