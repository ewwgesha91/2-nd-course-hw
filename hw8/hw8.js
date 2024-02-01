// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
 
 // Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort());
 // код выше должен вывеcти =>
 // [
 //  { name: 'Олег', age: 7 },
 //  { name: 'Анна', age: 17 },
 //  { name: 'Глеб', age: 29 },
 //  { name: 'Оксана', age: 47 }
 // ]

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