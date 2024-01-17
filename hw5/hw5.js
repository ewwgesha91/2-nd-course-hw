// Задание 1
    let a = Number(prompt('Введите первое число'));
    let b = Number(prompt('Введите второе число'));
function num(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}
let result = num(a, b);
console.log(result);

// Задание 2
let answer = Number(prompt('Введите любое число'));
function userAnswer(answer) {
    if (answer % 2 == 0) {
        return 'Число чётное'
    } else {
        return 'Число нечётное'
    }
}
let res = userAnswer(answer)
console.log(res);