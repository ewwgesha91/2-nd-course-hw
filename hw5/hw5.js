// // Задание 1
//     let a = Number(prompt('Введите первое число'));
//     let b = Number(prompt('Введите второе число'));
// function num(a, b) {
//     if (a < b) {
//         return a
//     } else {
//         return b
//     }
// }
// let result = num(a, b);
// console.log(result);

// // Задание 2
// let answer = Number(prompt('Введите любое число'));
// function userAnswer(answer) {
//     if (answer % 2 == 0) {
//         return 'Число чётное'
//     } else {
//         return 'Число нечётное'
//     }
// }
// let res = userAnswer(answer)
// console.log(res);

// Задание 3.1
let c = Number(prompt('Введите любое число'));
function number(c) {
    console.log(c ** 2);
}
number(c);

// Задание 3.2
let d = Number(prompt('Введите любое число'));
function square(d) {
    return d ** 2;
}
console.log(square(d));

// Задание 4
let age = Number(prompt('Сколько Вам лет?'));
function sayHi(age) {
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else if (age >= 13) {
        console.log('Добро пожаловать!')
    }
}
sayHi(age);