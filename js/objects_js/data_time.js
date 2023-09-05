
let timestamp = Date.now(); // Количество миллисекунд, прошедших с полуночи 1 января 1970 года по UTC
console.log(timestamp);

let now = new Date(); // Текущее время как объект Date()
console.log(now);

let ms = now.getTime(); // Перобразователь в милисекундную отметку времени
console.log(ms);

let iso = now.toISOString(); // Преобразователь в строку со стандартным значением
console.log(iso);