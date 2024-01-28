// Задание 1
let str = 'Строка';
console.log(str.toUpperCase());

// Задание 2
function searchStart(arr, str) {
    const result = arr.filter(el => el.toLowerCase().includes(str.toLowerCase()));
    return result;
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3
let num = 32.58884;
console.log(Math.floor(num), Math.ceil(num), Math.round(num));

// Задание 4
let c = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...c));
console.log(Math.min(...c));

// Задание 5
function getRandomInt() {
    return Math.round(Math.random() * 10 + 1);
}
console.log(getRandomInt());

// Задание 6

// Задание 7
    let a = Number(prompt('Введите первое число'));
    let b = Number(prompt('Введите второе число'));
function getRandomNum() {

    if (isNaN(a) > isNaN(b)) {
        return Math.round(Math.random() * (a - b) + b);
    } else {
        return Math.round(Math.random() * (b - a) + a);
    }
}
console.log(getRandomNum());

//Задание 11
function gameWords() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    let first = prompt('Чему равнялся первый элемент массива?');
    let last = prompt('Чему равнялся последний элемент массива?');
    if (first.toLowerCase() === words[0].toLowerCase() && last.toLowerCase() === words[words.length - 1].toLowerCase()) {
         alert('Поздравляю, Вы угадали!');
    } else if (first.toLowerCase() === words.indexOf[0].toLowerCase() || last.toLowerCase() === words[words.length - 1].toLowerCase()) {
         alert('Вы были близки к победе!');
    } else {
         alert('Вы ответили неверно.');
    }
}
gameWords();
