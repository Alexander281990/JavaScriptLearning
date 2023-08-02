

// Цикл for
for(let i = 0; i < 15; i ++) {
    if(i === 10) {
        break;   // слово break прерывает цикл for, когда это условие выполнится
    }
    if(i === 6) {
        continue; // слово continue пропускает итерацию цикла если условие выполнилось
        // но сам цикл не останавливается в отличии от слова - break
    }
    console.log(i);
}


// цикл в нутри цикла(вложенные циклы)
for(let i = 0; i < 3; i ++) {
    console.log(i);
    for(let j = 0; j < 3; j ++) {
        console.log(j);
    }
}
// задача на вложенные циклы
// сформировать пирабиду из звездочек
// *
// **
// ***
// ****
// *****
// ******
let = result = "";
const length = 7;
for(let i = 1; i < length; i ++) {
    for(let j = 0; j < i; j ++) {
        result += "*";
    }
    result += "\n"; // знак "\n" - перенос строки на следующую 
}
console.log(result);

// метки с continue
first: for(let i = 0; i < 3; i ++) {
    console.log(`First level: ${i}`);
    for(let j = 0; j < 3; j ++) {
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 3; k ++) {
            if(k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}
// в данном примере в роли метки выступает слово "first" на 42 и 47 строчках
// в 47 строке, если выполняется условие, то continue с меткой first перебрасывает 
// работу программы сразу на главный цикл. К метке first на 42 строчке
// слово first - это вымышленное слово(не зарезервированное)

// метки с break
first: for(let i = 0; i < 3; i ++) {
    console.log(`First level: ${i}`);
    for(let j = 0; j < 3; j ++) {
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 3; k ++) {
            if(k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}
// в данном примере метка с break перебросит на главный цикл и полностью его остановит

for(let i = 1; i < 11; i ++) {
    if(i%2 === 0) {
        console.log(i);
    }
}