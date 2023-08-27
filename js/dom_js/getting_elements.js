"use strict";


// Плучение элементов со страницы

// DOM объектная модель документа
// Чтобы обратиться к DOM мы должы использовать сущность document

// по ID
const box = document.getElementById("box");
console.log(box);

// Получение по тегам
// При получении элемента по тегам мы получаем псевдомассив
// А у песевдо-массива нет методов как у обычного массива
const btns = document.getElementsByTagName("button");
console.log(btns); // Получили html-коллекцию
// Что бы получить каждую отдельную нужную кнопу
// 1 способ
// const btns = document.getElementsByTagName("button")[1]; // получили в переменную сразу вторую кнопку
// 2 способ
// Используем индекс только тогда, когда используем кнопку
console.log(btns[2]);
// ДАЖЕ если элемент будет один на странице, мы все-равно получим коллекцию html
// На прямую через псевдо-массив не возможно обратиться к странице
// нужно получить конкретный элемент
// Например получив элемент вот так const btns = document.getElementsByTagName("button");
// Мы не можем сказать btns.что-то сделай
// нужен сам элемент btns[1].что-то сделай

// Получение по классам
const circles = document.getElementsByClassName('circle');
console.log(circles); // здесь так-же получаем коллекцию-html

// СОВРЕМЕННЫЕ МЕТОДЫ
// По CSS селектору querySelectorAll('')
const hearts = document.querySelectorAll('.heart');
console.log(hearts); // Получаем коллекцию NodeList
// querySelectorAll('') исключение из правил псевдомассивов
// у него есть один метод forEach
hearts.forEach(item => {
    console.log(item);
}); // Получаем все элементы(Очень частая работа)

// По CSS селектору querySelector('')
// querySelector('') находит первый элемент по селектору, и возвращает его в переменную
const oneHeart = document.querySelector(".heart");
console.log(oneHeart);