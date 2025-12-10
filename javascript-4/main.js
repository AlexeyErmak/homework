// задача 1
function calculateFinalPrice(baseCost, percentDiscount, tax) {
    const amountDiscount = baseCost * (percentDiscount / 100)
    const priceWithDiscount = baseCost - amountDiscount
    const finalPrice = priceWithDiscount * (1 + tax)
    return finalPrice
}
alert(`Итоговая цена: ${calculateFinalPrice(+prompt('Введите базовую стоимость:', 0), +prompt('Введите скидку', 0), +prompt('Введите налоговую ставку', 0.0))}`)

// задача 2
function checkAccess(userName, password) {
    if (userName === 'admin' && password === '123456') {
        return alert('Доступ разрешен')
    } else {
        return alert('Доступ запрещен')
    }
}
checkAccess(prompt('Введите никнейм:', 'admin'), prompt('Введите пароль:', '123456'))

// задача 3
function getTimeOfDay(currentTime) {
    switch (true) {
        case currentTime >= 0 && currentTime <= 5:
            alert('Ночь')
            break
        case currentTime >= 6 && currentTime <= 11:
            alert('Утро')
            break
        case currentTime >= 12 && currentTime <= 17:
            alert('День')
            break
        case currentTime >= 18 && currentTime <= 23:
            alert('Вечер')
            break
        default:
            alert('Ввели неккоректное время')
    }
}
getTimeOfDay(+prompt('Введите время:', 0))

// задача 4
function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i
        }
    }
    return 'четных чисел нет'
}
alert(`Итог: ${findFirstEven(+prompt('Введите первое число:', 0), +prompt('Введите последнее число:', 0))}`)