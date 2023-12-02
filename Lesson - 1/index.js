//  Verible
var a = 11; // var global o'zgaruvchan o'zgaruvchi e'lon qilish uchun
let b = 22; //  let scope (block) o'zgaruvchan o'zgaruvchi e'lon qilish uchun
const c = 33; //  const o'zgarmas o'zgaruvchilarni e'lon qilish uchun

//  var va let farqlari
//  ****************
console.log(x); // undefined
var x = 5;

console.log(y); // Error: "y" is not defined
let y = 10;

//  ****************
if (true) {
    var a = 5;
    let b = 10;
}

console.log(a); // 5
console.log(b); // Error: b is not defined

//  const o'zgarmas qiymat e'lon qilishligiga misol.
const k = 342;
k = 7878;   // o'zgartirish
console.log(k); // TypeError: Assignment to constant variable.