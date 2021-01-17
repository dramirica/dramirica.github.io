/* 
FROM CELSIUS TO KELVIN / FAHRENHEIT / NEWTON 
by MDN Data Software - Mirica Dragos-Neculai
v 3.0
*/

//Update 17/01/2021
//  c = celsius

let tempObj = {
    celsius: 0,
    kelvin: function() {
        return this.celsius + 273
    },
    fahrenheit: function() {
        return this.celsius * (9/5) + 32
    },
    newton: function() {
        return Math.floor(this.celsius * (33 / 100));
    } 
}

const completeTemp = (c=20, obj=tempObj) => {
    //check input 
    const checkInput = c => typeof c !== 'number' ? true : false;

    if(checkInput(c)) {
        console.log('Wrong input!');
        return;
    } else {
        //if all fine
        tempObj.celsius = c;
        
        console.log(`The temperature is ${tempObj.celsius} degrees Celsius.`);
        console.log(`The temperature is ${tempObj.kelvin()} degrees Kelvin.`);
        console.log(`The temperature is ${tempObj.fahrenheit()} degrees Fahrenheit.`);
        console.log(`The temperature is ${tempObj.newton()} degrees Newton.`);
    }
}

completeTemp(15);
