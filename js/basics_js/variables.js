"use strict";

// Переменные
let number = 5;
const leftBorderWidth = 1;
console.log(leftBorderWidth);

// особенности var
console.log(myName); // ошибки не будет. Будет undefined
// вызов переменной до ее создания - хоистинг(или всплытие переменной)
var myName = "Alex";
console.log(myName);
///////
{
    let result = 20;
}
//console.log(result); // ошибка
// но
{
    var result = 20;
}
console.log(result); // ошибки нет

// константы - не совсем константы
const obj = {
    a: 50
};
obj.a = 10;
console.log(obj);