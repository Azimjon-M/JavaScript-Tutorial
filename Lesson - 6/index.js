// Comparision (Taqqoslash)
// ! Taqqoslash doimo o'zidan Boolean qiymat qaytaradi !
// >, <, >=, <=, ==, ===, !
// a > b . a Kattami b dan
// a < b . a Kichikmi b dan
// a <= b . a Katta yoki Tengmi b dan
// a >= b . a Kichik yoki Tengmi b dan
// a == b . a Tengmi b ga
// a === b . a Tengmi b ga (type bo'yichaham)
// a != b . a Teng emasmi b ga

let a = 5;
let b = 10;
let c = "5";
console.log(a > b); // false
console.log(a < b); // true
console.log(a <= c); // true
console.log(c >= b); // true
console.log(a == c); // true
console.log(a === c); // false
console.log(a != c); // true
