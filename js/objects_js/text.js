
// Пустая строка - это строка с длинной = 0

// Возможные записи строк в JavaScript
const str1 = ""; // Пустая строка, содержит 0 символов
console.log(str1.length);
console.log(typeof(str1));
const str2 = 'testing';
const str3 = "3.14";
const str4 = 'name="myform"';
console.log(str4);
const str5 = "Wouldn't you prefer O'Reilly's book?";
console.log(str5);
const str6 = `"She said 'hi'", he said`;
console.log(str6);
const str7 = 'two\nlones'; // Строка, предстовляющая две строки, записаны в одной строке
console.log(str7); 

// Использование \
// 1 - \n - перенос на новую стоку
const str8 = "Hello \nworld";
console.log(str8);
// 2 - \' - включает апостров в строку
console.log("You\'re right, it can\'t be a quote");


// Методы строк
let s = "Hello, World";
console.log(s.substring(1, 4)); // => ell. 2-й 3-й, 4-й
console.log(s.slice(1, 4)); // => ell. то же самое
console.log(s.slice(-3)); // => rld. Последние 3 символа
console.log(s.split(", ")); // => ["Hello", "world"]. разбивает по строке разделителя
let s_substring = s.split(", ");
console.log(s_substring[0]);
console.log(s[0]);
console.log(s.indexOf("l")); // => 2. позиция первой буквы l
console.log(s.indexOf("l", 3)); // => 3. позиция первой буквы l начиная с 3 позиции
console.log(s.indexOf("zz")); // => -1. s не имеет знаков zz
console.log(s.lastIndexOf("l")); // => 10. позиция последней буквы l
console.log(s.startsWith("Hell")); // => true. строка начинается с этих символов
console.log(s.endsWith("!")); // => false. строка не заканчивается на эти символы
console.log(s.charAt(0)); // Получаем первый символ строки
console.log(s.charAt(s.length-1)); // Получаем последний символ строки



