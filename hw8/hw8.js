// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort(function(a, b) {
    if (a.age > b.age) {
        return 1
    } else if (b.age > a.age) {
        return -1
    }
    return 0
}));

 // Задание 2
function isPositive() {
    // писать код тут
}
function isMale() {
    // писать код тут
}
function filter() {
    // писать код тут
}
    
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
const men = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(men, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3
function timer() {
    let currentDate = new Date();
    console.log(currentDate);
    
    let interval = setInterval(() => console.log(new Date()), 3000);
    setTimeout(() => { clearInterval(interval); console.log('30 секунд прошло'); }, 1000 * 30);
}
timer();

// Задание 4
function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
  callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(sayHi('Глеб'))