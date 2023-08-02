"use strict";

// все свойства можно узнать через браузер командой console.dir(Number);
// В место Number нужно подставить необходимый тип данных

// длина
const str = "test";
const arr = [1, 2, 5];
console.log(str.length);
console.log(arr.length);

// получение символа по индексу строки
const myName = "Alexander";
console.log(myName[3]);
console.log(myName[3] = "q"); // пытаясь так заменить по индексу символ ничего не получится
                              // для этого есть специальные методы
// изменение регистра
console.log(myName.toUpperCase()); // все буквы большие
console.log(myName.toLowerCase()); // все буквы маленькие
// с какого индекса начинается кусочек строки
let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // с какого индекса начинается кусочек строки
console.log(fruit.indexOf("se")); // получим -1. Такого кусочка строки вообще нет. Часто используется
                                  // для того, чтобы узнать есть ли вообще такая строка

// ВЗАИМОДЕЙСТВИЕ СО СТРОКАМИ
const logg = "Hello world";
// вырезает кусок строки
console.log(logg.slice(6)); // вырезает в 6 и до конца
console.log(logg.slice(6, 11)); // вырезает кусок строки. Где 6 - начало, а 11 - конец выреза
console.log(logg.substring(6, 11)); // аналог предыдущего slice()
console.log(logg.substr(6, 3)); // 6 - это начало выреза, а 3 - это сколько символов вырежем


// ЧИСЛА
// Для работы с числами существует библиотека Math

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); // в нашем случае переводит строку в числовой тип данных и округляет до 12
// parseInt() - метод который переводит число в другую систему исчисления
console.log(parseFloat(test)); // вернет 12.2


