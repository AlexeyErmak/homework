const me = {
    name: 'Alexey',
    age: 15,
    metodName(name) {
        return (`Hello, ${name}`)
    }
}

console.log(me.metodName('Danil'))


const users = [
    {
        name: "Иван",
        age: 25,
        isAdmin: false
    },
    {
        name: "Мария",
        age: 30,
        isAdmin: true
    },
    {
        name: "Петр",
        age: 22,
        isAdmin: false
    },
    {
        name: "Анна",
        age: 28,
        isAdmin: false
    },
    {
        name: "Алексей",
        age: 35,
        isAdmin: true
    },
    {
        name: "Елена",
        age: 27,
        isAdmin: false
    }
];

let regularUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        regularUsersCount++;
    }
}

console.log(regularUsersCount); 
