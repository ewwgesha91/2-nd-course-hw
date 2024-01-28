function monthNumber() {
    let date = Number(prompt('Введите номер месяца'));
    if (date >= 1 && date <=2 || date === 12) {
        return 'Зима'; 
    } else if (date >= 3 && date <= 5) {
        return 'Весна'; 
    } else if (date >= 6 && date <= 8) {
        return 'Лето'; 
    } else if (date >= 9 && date <= 11) {
        return 'Осень'; 
    } else {
        return 'Неверный ввод'; 
    }
}

function gameWords() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    let first = prompt('Чему равнялся первый элемент массива?');
    let last = prompt('Чему равнялся последний элемент массива?');
    if (first.toLowerCase() === words[0].toLowerCase() && last.toLowerCase() === words[words.length - 1].toLowerCase()) {
         alert('Поздравляю, Вы угадали!');
    } else if (first.toLowerCase() === words[0].toLowerCase() || last.toLowerCase() === words[words.length - 1].toLowerCase()) {
         alert('Вы были близки к победе!');
    } else {
         alert('Вы ответили неверно.');
    }
}