"use strict";

// 
function showFirstMessage(text) {
    console.log(text);
}
showFirstMessage("Hello world");
//-------------------//
function showSecondMessage() {
    let num = 8;
}
//console.log(num); // Ошибка. Переменная num объявленна в нутри функции(локально). И нигде не видна кроме функции
//-------------------//
let number = 20;
function showTriedMessage() {
    number = 10;
}
showTriedMessage();
console.log(number);

// Замыкание функции
// Когда у нас в нутри функции есть обращение к какой либо переменной. Например console.log(n)
// То в первую очередь функция ищет эту переменную в нутри себя
// Если в нутри себя она ничего не находит, то поднимается на уровень выше и начинает искать там
// Замыкание функции - это сама функция вместе со всеми переменными, которые ей доступны
let n = 20;
function showFourthMessage() {
    let n = 10;
    console.log(n);
}
showFourthMessage();
console.log(n);

// return - возвращает значение функции во внешний мир
function calc(a, b) {
    return(a + b);
}
console.log(calc(8, 1));
console.log(calc(4, 6));
console.log(calc(5, 67));
// если функция встретила слово return, то она заканчивает свою работу
function calc2(a, b) {
    return(a + b);
    console.log("Hello world"); // unreachable code. Он не будет далее выполняться так как стоит после return
}
console.log(calc2(8, 1));
console.log(calc2(4, 6));
console.log(calc2(5, 67));
// возвращение своей локальной переменной во внешний мир
function ret() {
    let num = 50;
    return num;
}
console.log(ret());
// или
const anotherNum = ret();
console.log(anotherNum);

// КЛАСИФИКАЦИЯ ФУНКЦИЙ

// 1. Function declaration(создается до начала выполнения скрипта. Можно вызвать перед объявлением)
function foo() {
    // код
}

// 2. Function exspression(зоздается только тогда, когда доходит поток кода. Можно вызвать только после объявления)
// функциональное выражение
// в конце функции нужно ставить точку с запятой
let foo = function() {
    // код
};

const logger = function() {
    console.log("function expression");
}
logger();

// 3. Стрелочные функции(не имеют своего контекста (this))
//  () =>

const calc = (a, b) => a + b; // сокращенный вариант
const calc = (a, b) => {
    return a + b;
}; // не сокращенный вариант
