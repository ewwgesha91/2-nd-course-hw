// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
const yearRelease = 'Год выпуска первого iPhone - 2007г.'
alert(yearRelease);

// Задание 3
const creatorJS = 'Имя создателя языка JavaScript - Брендан Эйх.'
alert(creatorJS);

// Задание 4
let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
let d = 9;
let e = 2;
result = d % e;
alert(result);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// Задание 8
let age = prompt('Сколько вам лет?');
alert(age);

// Задание 9.0
const user = {
    name: 'Мария',
    age: 27,
    isAdmin: false
}

// Задание 9.1
user.cityOfResidence = true;

// Задание 9.2
user.age = 35;

// Задание 9.3
delete user.cityOfResidence;

// Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// Задание 10
let yourName = prompt('Как Вас зовут?');
alert(`Привет, ${yourName} !`)