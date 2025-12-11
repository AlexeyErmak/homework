"use strict";
// задание 1
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

const userNewOne = {
  name: "Ann",
  age: 19,
  isAdmin: false,
};

const userNewTwo = {
  name: "Jack",
  age: 43,
  isAdmin: true,
};
users.push(userNewOne, userNewTwo);
console.log(users);

// задание 2
function getUserAverageAge(users) {
  if (!users || users.length === 0) {
    return 0;
  }
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}
console.log(getUserAverageAge(users));

// задание 3
function getAllAdmins(users) {
  if (!users) return [];
  return users.filter((user) => user.isAdmin === true);
}
console.log(getAllAdmins(users));

// Задание 4.
function first(arr, n) {
  if (!arr) return [];

  if (n === 0) return [];
  if (n === undefined) return [arr[0]];

  return arr.slice(0, n);
}
console.log(first([1, 2, 3, 4, 5], 0));
console.log(first([1, 2, 3, 4, 5], 1));
