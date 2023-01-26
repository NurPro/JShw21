//! ////////////////// example2 /////////////////////

const numbersSum = [1, 2, 3, 4, 5];
const numSUm = numbersSum.map((person) => {
  return person * person;
});
console.log(numSUm);

//!! ///////////////////////// example3 //////////////////
const usersFr = [
  { firstName: 'john ', lastName: 'Oboma', age: 35, gender: 'male' },
  { firstName: 'Ariane ', lastName: 'Grande', age: 18, gender: 'female' },
  { firstName: 'Naruto ', lastName: 'Uzmaki', age: 19, gender: 'male' },
  { firstName: 'Kakashi ', lastName: 'Hatake', age: 28, gender: 'male' },
  { firstName: 'sakura ', lastName: 'chan', age: 18, gender: 'female' },
];

const completedFullName = usersFr.map((item) => {
  let fullName = item.firstName + '' + item.lastName;
  let gender = item.gender;
  return { fullName, gender };
});
console.log(completedFullName);

// ! //////////////////  example4 //////////////////

const numbers = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
let filteredArray = numbers.filter((element) => {
  return element % 2 === 1;
});
console.log(filteredArray);

//! /////////////// example5 //////////////////

const usersF = [
  { firstName: 'john ', lastName: 'Oboma', age: 35, gender: 'male' },
  { firstName: 'Ariane ', lastName: 'Grande', age: 18, gender: 'female' },
  { firstName: 'Naruto ', lastName: 'Uzmaki', age: 19, gender: 'male' },
  { firstName: 'Kakashi ', lastName: 'Hatake', age: 28, gender: 'male' },
  { firstName: 'sakura ', lastName: 'chan', age: 18, gender: 'female' },
];

const filteredGender = usersF.filter((item) => {
  return item.gender === 'female';
});
console.log(filteredGender);

// ! ////////////////// example6 ///////////////////

const numAdd = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const sumAdd = numAdd.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(sumAdd);

//! /////////////////////example 7///////////////////////
let sun = 0;
const num = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
let numForEach = num.forEach((value) => {
  if (value % 2 === 1) {
    sun += value;
  }
  return sun;
});
console.log(sun);

// ! ///////////////example 8///////////////////

const users = [
  { firstName: 'john ', lastName: 'Oboma', age: 35, gender: 'male' },
  { firstName: 'Ariane', lastName: 'Grande', age: 18, gender: 'female' },
  { firstName: 'Naruto', lastName: 'Uzmaki', age: 19, gender: 'male' },
  { firstName: 'Kakashi', lastName: 'Hatake', age: 28, gender: 'male' },
  { firstName: 'sakura', lastName: 'chan', age: 18, gender: 'female' },
];

const nameFind = users.find((item) => {
  return item.firstName === 'Naruto';
});
console.log(nameFind);




//!  //////////// example 9   ////////

const numI = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const numForIndex = numI.findIndex((item) => {
  return item === 34;
});

console.log(numForIndex);




//todo







//
//*
//!
//?
//TODO



 