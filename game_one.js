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
