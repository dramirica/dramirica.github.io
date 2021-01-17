/* 
FROM HUMAN TO DOG YEARS 
by MDN Data Software - Mirica Dragos-Neculai
v 1.0
*/

//29/11/2020
const myAge = 22; //my age
let earlyYears = 2; //first 2 years

earlyYears *= 10.5; //first 2 years for dogs

let laterYears = myAge - 2; // my years - firsts

laterYears *= 4; //normal dog years

let myAgeInDogYears = earlyYears + laterYears; //my total years as a dog

let myName = "Dragos".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
