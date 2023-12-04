// Ternary operator, Question mark operator, Conditional operator + ESX
// if = ?
// else if = : (Operations) ? (Code)
// else = : //Requared

// Recommended
10 > 5 ? console.log("10 katta 5 dan") : console.log("10 katta emas 5 dan");
5 > 10 ? console.log("5 katta 10 dan") : console.log("5 katta emas 10 dan");

//Multple no Recommended (Maslaxat berilmaydi)
let a = 11;

a < 0
    ? console.log(`${a} soni 0 dan kichkina`)
    : a < 10
    ? console.log(`${a} soni 10 dan kichkina`)
    : console.log(`${a} soni 10 dan katta`);
