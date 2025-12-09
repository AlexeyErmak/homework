// задача 1
const number = 2 % 2

if (number === 0) {
    console.log('число четное')
} else {
    console.log('число нечетное')
}

// задача 2

let age = 20;
let discount = age < 18 ? 10 : (age <= 65 ? 20 : 30);
console.log(discount);

// задача 3

const userName = prompt('Введите никнейм')
const password = +prompt('Введите пароль')

if (userName === 'admin' && password === 123456) {
    alert('доступ разрешен')
} else {
    alert('доступ запрещен')
}

// задача 4

const weight = +prompt('Введите вес посылки')

if (weight <= 0) {
    alert('Неккоректный вес посылки')
}

const type = prompt('Введите тип доставки ("Стандарт", "Экспресс", "Премиум")')

if (type !== 'Стандарт' && type !== 'Экспресс' && type !== 'Премиум') {
    alert('Неверный тип доставки')
}

let price;
if (weight < 1) {
    price = 5
} else if (weight >= 1 && weight <= 5) {
    price = 10
} else {
    price = 15
}

let coefficient;
switch (type) {
    case "Стандарт":
        coefficient = 1;
        break;
    case "Экспресс":
        coefficient = 1.5;
        break;
    case "Премиум":
        coefficient = 2;
        break;
}

let finalPrice = price * coefficient;

alert(`Итоговая стоимость доставки: ${finalPrice}$`);




