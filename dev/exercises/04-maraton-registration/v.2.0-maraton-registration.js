/* 
NUMBER FOR THE MARATON
by MDN Data Software - Mirica Dragos-Neculai
v 2.0
*/

//17/01/2021
//Get your number for the registration to the maratone
const generateRegNum = (early=false, age=18) => {
  //Generate random number and default values
  let raceNumber = Math.floor(Math.random() * 1000);

  //if early and >18 = +1000
  early && age>18 ? raceNumber+=1000 : undefined;

  const checkConditions = (early, age) => {
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
  }

  checkConditions(early, age);
}

//run
generateRegNum(false, 18);



