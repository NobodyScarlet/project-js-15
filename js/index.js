'use strict'

let num = +prompt('Введите число');
let i

if (num < 1) {
    console.log('NaN');
} else {
    for (i = 2; i <= num; i++) {
        if (num % i === 0) {
            break;
        }
    }
}

if (i === num || num === 1) {
    console.log("Число простое")
} else {
    console.log("Меньший делитель числа " + num + " будет " + i )
}
