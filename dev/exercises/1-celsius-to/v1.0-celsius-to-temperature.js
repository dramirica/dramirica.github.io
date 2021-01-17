/* 
FROM CELSIUS TO KELVIN / FAHRENHEIT / NEWTON 
by MDN Data Software - Mirica Dragos-Neculai
v 1.0
*/

//29/11/2020
const celsius = 13; // my temperature celsius
console.log(`The temperature is ${celsius} degrees Celsius.`);

const kelvin = celsius + 273; //kevin is celsius+273
console.log(`The temperature is ${kelvin} degrees Kelvin.`);

let fahrenheit = celsius * (9 / 5) + 32; //calc
fahrenheit = Math.floor(fahrenheit); //make integer
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton.`);
