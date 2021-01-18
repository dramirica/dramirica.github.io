/* 
FROM HUMAN TO DOG YEARS 
by MDN Data Software - Mirica Dragos-Neculai
v 2.1
*/

let toDogAge = {
  _humanAge: 0,
  _dogAge: 0,
  get humanAge() {
    return this._humanAge;
  },
  get dogAge(){
    return this._dogAge;
  },
  set humanAge(age){
    if(typeof age !== 'number'){
      console.log('Wrong input!');
      return;
    } else if (age <= 0){
      console.log("You can't travel to the past!");
      return;
    } else if (age > 0) {//if in 1-2 years
      this._humanAge = age;
      console.log(age);
    }
  },
  get dogAge(){
    
  }

}

//Update 16/01/2021
const humanToDog = (name="Jonny", age=22) => {

  let dage; //our age in dog years

  //check input
  if(typeof age !== 'number'){
    console.log('Wrong input!');
    return;
  } else if (age <= 0){
    console.log("You can't travel to the past!");
    return;
  } else if (age >0 && age <3){//if in 1-2 years
    dage = age * 10.5; // for dogs first 2 years have a value of 10.5/year
    console.log(`My name is ${name}. I am ${age} years old in human years which is ${dage} years old in dog years.`);

  } else {
    dage = 21 + ((age-2) * 4);//all years after the first 2 counts has 4
    console.log(`My name is ${name}. I am ${age} years old in human years which is ${dage} years old in dog years.`);
  }
}

//run
humanToDog(undefined, 23);
