// For loope (tsikli)
// for(boshlanish; tugashManzil; step) {
// code
// break // lupni to'xtatish
// }

// for (i = 1; i < 10; i = i+1) {
// code
//     if (i = 8) {
//         break;
//     }
// }

// Pass loope (continue) (shartiga mos kelganini ishlatmasdan o'tkazib yuborish)
// for (let i = 1; i <= 20; i++) {
//     if (i % 5 !== 0) continue;
//     console.log(i); // 5, 10, 15, 20
// }

// Reverse loope
// for (let i = 20; i >= 1; i--) {
//     console.log(i); // 20, 19, 18, ...
// }

// Outer, Inner loope
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]); // 1, 2, 3, 4, 5, 6, 7, 8, 9
//     }
// }
// Inner tsiklda turib Outer tsiklni to'xtatish
// OuterLoope: for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 7; j++) {
//         if (i == 4 && j == 6) {
//             break OuterLoope;
//         }
//         console.log(i, j); // 0, 0; 0, 1; ... 4, 5;
//     }
// }

// While loope
// let i = 1;
// while (i <= 5) {
//     console.log(i); // 1, 2, 3, 4, 5
//     i++; // i = i+=1
// }

// Do While farqi kamida 1 marta bajariladi!
// let i = 1;
// do {
//     console.log(i); // 1, 2, 3, 4, 5
//     i++;
// } while (i <= 5);

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 !== 0) continue
//     console.log(i);
// }

// let a = 1;
// let foydalanuvchi = 42;
// while (a !== foydalanuvchi+1) {
//     console.log(a);
//     a++;
// }
// let arr = ["a", "b", "c", "d", "e"];

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// for (let i = 2; i <= 9; i++) {
//     if (i !== 5) continue
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }