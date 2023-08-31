
// Infinity // Положительное число, слишком большое для представления

console.log(Number.POSITIVE_INFINITY); // Infinitiy
console.log(1 / 0); // Infinitiy
console.log(Number.MAX_VALUE * 2); // Infinitiy, переполнение
console.log(-Infinity); // - Infinitiy(Отрицательное число, слишком большое для представления)
console.log(Number.NEGATIVE_INFINITY); // - Infinity
console.log(-1 / 0); // - Infinity
console.log(-Number.NEGATIVE_INFINITY * 2); // - Infinity
// NaN - Значение не число
console.log(NaN); // NaN
console.log(Number.NaN); // NaN
console.log(0 / 0); // NaN
console.log(Infinity / Infinity); // NaN
console.log(Number.MAX_VALUE / 2); // 0. Потеря значимости
console.log(-Number.MIN_VALUE / 2); // -0. Отрицательный 0
console.log(-1 / Infinity); // -0
console.log(-0); // -0
// Number в ES6
console.log(Number.parseInt); // То же, что и глобальная функция parseInt
console.log(Number.parseFloat); // То же, что и глобальная функция parseFloat
//console.log(Number.isNaN(x)); // Является ли х значением NaN
console.log(Number.isNaN(12)); // Является ли 12 значением NaN
console.log(Number.isNaN(0 / 0)); // Является ли 0 / 0 значением NaN
//console.log(Number.isFinite(x)); // Является ли х конечным числом(не NaN, Infinity, -Infinity)
console.log(Number.isFinite(1)); // true
console.log(Number.isFinite(0 / 0)); // false
//console.log(Number.isInteger(x)); // Является ли х целым числом
console.log(Number.isInteger(2));
console.log(Number.isInteger(2.1));

// NaN обладает необычной особенностью
// оно не равно никакому другому значению
// даже самому себе
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// Отрицательный 0 (-0) тоже кое в чем необычно
let zero = 0;
let negz = -0;
console.log(zero === negz); // true. 0 и -0 равны
console.log(1/zero === 1/negz); // false. Infinity и -Infinity не равны

// Двоичное представление чисел с плавающей точкой
let x = .3 - .2;
let y = .2 - .1;
console.log(x); // 0.099999999999998
console.log(y); // 0.1
console.log(x === y); // false. Два значения не одинаковы
// Из-за ошибки округления имеется разница между x и y


