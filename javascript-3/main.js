// задача 1
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue
    }
    console.log(i)
}

// задача 2
let number = +prompt('Введите число', 1)

let factorial = 1
for (let i = 1; i <= number; i++) {
    factorial *= i
}

console.log(`Факториал числа ${number} равен ${factorial}`)

// задача 3

for (let i = 1; i <= 8; i++) {
    let line = ''
    for (let j = 1; j <= 16; j++) {
        if ((i + j) % 2 === 0) {
            line += '#'
        } else {
            line += ' '
        }
    }
    console.log(line)
}