/* 
NUMBER FOR THE MARATON
by MDN Data Software - Mirica Dragos-Neculai
v 1.0
*/

//05/12/2020
//Get your number for the registration to the maratone
//Generate random number and default values
let raceNumber = Math.floor(Math.random() * 1000);
//registrated early or late?
let early =false;
//age?
let age = 18;
//if early and >18 = +1000
early && age>18 ? raceNumber+=1000 : undefined;
//conditions
if(early && age>18){
  console.log(`Race start at 9:30AM, your number is ${raceNumber}`);
} else if (!early&&age>18){
  console.log(`Race start at 11AM, your number is ${raceNumber}`);
} else if (!early && age < 18) {
  console.log(`Race start at 12:30pm, your number is ${raceNumber}`);
} else {
  console.log('See registration desk!');
}

