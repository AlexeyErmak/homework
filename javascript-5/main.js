// задача 1
const person = {
  name: "Alexey",
  lastName: "Ermak",
  age: 15,
  isStudent: true,
};
for (const value in person) {
  console.log(person[value]);
}

// // задача 2
const object = {};

function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}
console.log(`Объект пустой: ${isEmpty(object)}`);

// задача 3
const task = {
  title: "wash",
  description: "wash the dishes",
  isCompleted: false,
};

function cloneAndModify(object, modifications) {
  const cloned = { ...object, ...modifications };
  for (let key in cloned) {
    console.log(`${key}: ${cloned[key]}`);
  }

  return cloned;
}
const modifications = { isCompleted: true };
cloneAndModify(task, modifications);

// задача 4

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

function callAllMethods(object) {
  for (let key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
}
callAllMethods(myObject);
