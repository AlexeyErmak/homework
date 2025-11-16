function letName(name) {
    return console.log(`Hello, ${name}!`)
}

console.log('Название функии - letName. Напишите letName("имя")')


// =========================


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function moreThanTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}

moreThanTen(numbers)

// =============================


function calculator(firstNumber, secondNumber, string) {

    if (string === '-') {
        return firstNumber - secondNumber;
    } else if (string === '+') {
        return firstNumber + secondNumber;
    } else if (string === '/') {
        return firstNumber / secondNumber;
    } else if (string === '*') {
        return firstNumber * secondNumber;
    }
}

console.log('Название функции: calculator. Используйте знаки: +, -, /, *. Пример: calculator(2, 3, "-") ')