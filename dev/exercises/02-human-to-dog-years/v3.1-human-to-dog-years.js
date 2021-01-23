/* 
FROM HUMAN TO DOG YEARS 
by MDN Data Software - Mirica Dragos-Neculai
v 3.1
*/


//update 23/01/2020
let toDogAge = {
  _humanName: '',
  _humanAge: 0,
  _dogAge: 0,
  get _humanName(){
    return this._humanName;
  },
  get humanAge() {
    return this._humanAge;
  },
  get dogAge(){
    return this._dogAge;
  },
  set humanName(n){
    this._humanName = n;
  },
  set dogAge(age){
    if(age <= 2 && age > 0){//if in 1-2 years
      this._dogAge = age * 10.5;
    } else {
      this._dogAge = 21 + (age-2) * 4;
    }
  },
  set humanAge(age){
    if(typeof age !== 'number'){
      console.log('Wrong input!');
      return;
    } else if (age <= 0){
      console.log("You can't travel to the past!");
      return;
    } else if (age > 0) {
      this._humanAge = age;
      this.dogAge = age;
    }
  }

}

const start = (name = 'Dragos', age = 22) => {
  toDogAge.humanName = name;
  toDogAge.humanAge = age;
  console.log(`My name is ${name}. I am ${age} years old in human years which is ${toDogAge.dogAge} years old in dog years.`);
}

start('Neve', 8);