function monthNumber() {
    let date = Number(prompt('Введите номер месяца'));
    if (date >= 1 && date <=2 || date === 12) {
        alert('Зима'); 
    } else if (date >= 3 && date <= 5) {
        alert('Весна'); 
    } else if (date >= 6 && date <= 8) {
        alert('Лето'); 
    } else if (date >= 9 && date <= 11) {
        alert('Осень'); 
    } else {
        alert('Неверный ввод'); 
    }
}
