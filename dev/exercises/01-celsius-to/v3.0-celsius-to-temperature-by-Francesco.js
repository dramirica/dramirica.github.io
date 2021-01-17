/* 
FROM CELSIUS TO KELVIN / FAHRENHEIT / NEWTON 
by MDN Data Software - Mirica Dragos-Neculai
v 3.0
*/

//Update 17/01/2021 by Francesco Pignatale
//  c = celsius
//  k = kelvin
//  f = fahrenheit 
//  n = newton
const completeTemp = (c=20) => {

    //Helper calculate Kelvin
    const calcK = (c) => {
        let k = c + 273;
        alert(`The temperature is ${k} degrees Kelvin.`);
    }

     //Helper calculate fahrenheit
    const calcF = (c) => {
        let f = c * (9 / 5) + 32;
        alert(`The temperature is ${f} degrees Fahrenheit.`);
    }

    //Helper calculate newton
    const calcN = (c) => {
        let n = Math.floor(c * (33 / 100));
        alert(`The temperature is ${n} degrees Newton.`);
    }

    //check input
    const isValidInput = (c) => {
	      if (typeof c == 'string') {
	        //Test that the input string contains only number between regular expression
	        return !(/[0-9]/.test(c));
	      } else if (typeof c == 'number') {
	        return true;
	      }
	      return false;
    }
    
    if(isValidInput(c)) {
        alert('Wrong input!');
    } else {
        //Display celsius
        console.log(`The temperature is ${c} degrees Celsius.`);
	      //Cast the type of input value to double -> decimal number
	      c = parseFloat(c);
        // log other temperatures
        calcK(c);
        calcF(c);
        calcN(c);
    }
}
//Allow the user to insert an input
//prompt(message, defaultValue)
do {
    var temperature = prompt("Please enter a valid temperature expressed in degrees celsius:", "10");
} while(temperature == null);
//Call a procedure defined
completeTemp(temperature); 
