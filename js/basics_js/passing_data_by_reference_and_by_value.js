"use strict";

// Передача по ссылке и по значению


// пример
let a = 5;
    b = a;

b = b + 5;
console.log(b);
console.log(a);
//////
const obj = {
    a: 5,
    b: 1,
};
const copy = obj; // Передача ссылки на объект(Передача по ссылке)
copy.a = 10; // изменяя переменную copy мы модифицируем и первоначальный объект obj
console.log(copy);
console.log(obj);


// Когда мы работаем с примитивными типами данных, то ОНИ ПЕРЕДАЮТСЯ ПО ЗНАЧЕНИЮ
// Когда мы работаем с объектами(а к объектам относятся и массивы, и функции, и специфические объекты(типа объекта даты)), 
// то идет передача не по значению а по ссылке.
// Таким образом в записи 'const copy = obj;' мы не создаем копию объекта(не передаем саму структуру объекта, а передаем именно ссылку)


// Создание копии объекта

// 1 вариант
function copyObj(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}
// Пример
const numbers = {
    a: 2,
    b: 6,
    c: {
        x: 7,
        y: 5,
    },
};

const newNubers = copyObj(numbers);
console.log(newNubers);