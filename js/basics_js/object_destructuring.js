"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    // метод объекта makeTest
    makeTest: function() {
        console.log("Test");
    },
};
console.log(options.name);
options.makeTest(); // вызов метода объекта

// Удаление объекта
 delete options.name;
 console.log(options);

// Перебор свойств объекта
// Конструкция ${options[key]} получает значение какого-то свойства
for(let key in options) {
    if(typeof(options[key]) === 'object') {
        for(let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// Свойства и методы объектов

// 1 - Object.keys(имя объекта) - Получаем все ключи объекта
console.log(Object.keys(options)); // Получаем массив со всеми ключами
// Теперь используя массив ключей можем использовать свойство lenght, чтобы узнать длинну объектов
// так как у объектов свойства lenght НЕТ
console.log(`Длина объекта ${Object.keys(options).length}`);

// Деструктуризация объектов
// упрощение доступа к каким либо свойствам объекта(ключам)
// будем вытаскивать свойства из объекта в качестве отдельных структур

const object1 = {
    name: 'myName',
    age: 32,
    height: 185,
    skill: {
        js: 'middle',
        java: 'middle',
        cDowblePlus: 'junior',
    },
};

const {js, java, cDowblePlus} = object1.skill;
console.log(java);
console.log(cDowblePlus);



