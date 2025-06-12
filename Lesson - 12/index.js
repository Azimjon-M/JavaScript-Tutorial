// Object

let obj = { key: "value" };

const obj1 = {};
const obj2 = new Object();

const per = {
    id: 1,
    name: "Azimjon",
    age: 25,
};

let name = "name";

// console.log(per.name);
// console.log(per["name"]);
// console.log(per[name]);

// Freeze
obj.name = "Add Clone";
// console.log(obj); // { key: 'value', name: 'Add Clone' }

Object.freeze(obj);
obj.start = true; // not adding!
delete obj.name; // not deleting!
obj.name = "Changed name"; // not Changing!
// console.log(obj); // { key: 'value', name: 'Add Clone' }

// Seal, structuredClone (Clonlash, obj linki 2x)
const newObj = structuredClone(obj);
Object.seal(newObj);
// console.log(newObj); // { key: 'value', name: 'Add Clone' }
newObj.qr = "Quar Code"; // not adding!
delete newObj.name; // not deleting!
newObj.name = "Islom"; // But is Changed
// console.log(newObj); // { key: 'value', name: 'Islom' }

// Object with For in
// console.log(obj); // { key: 'value', name: 'Add Clone' }
// for (let i in obj) {
//     console.log(i); // key name
//     console.log(obj[i]); // value "Add Clone"
// }

// homework

// Object key va value lari type: number bo'lganlarini topish
let obj4 = {
    id: 1,
    name: "Azimjon",
    start: false,
    2025: 25,
    end: true,
};

// let newObj4 = Object.keys(obj4).filter(item => !isNaN(Number(item)))
// console.log(newObj4);

// with key
// for (let i in obj4) {
//     if ( !isNaN(Number(i)) ) {
//         console.log(i);
//     }
// }
// with value
// for (let i in obj4) {
//     if (typeof obj4[i] === "number") {
//         console.log(obj4[i]);
//     }
// }

// with boolean check new Object
// let res = {}
// for (let i in obj4) {
//     if (typeof obj4[i] === "boolean") {
//         res[i] = obj4[i]
//     }
// }
// console.log(res);

// with  check by name
// const CheckByName = (obj, name) => {
//     for (let i in obj) {
//         if (obj[i] === name) {
//             return `${i}: ${obj[i]}`;
//         }
//     }
//     return "Bundayi yo'q"
// };
// console.log(CheckByName(obj4, "Azimjon"));
