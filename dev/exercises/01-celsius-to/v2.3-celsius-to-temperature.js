/* 
FROM CELSIUS TO KELVIN / FAHRENHEIT / NEWTON 
by MDN Data Software - Mirica Dragos-Neculai
v 2.3
*/

//Update 16/01/2021
//  c = celsius
//  k = kelvin
//  f = fahrenheit 
//  n = newton
const completeTemp = (c=20) => {

    //Helper calculate Kelvin
    const calcK = (c) => {
        let k = c + 273;
        console.log(`The temperature is ${k} degrees Kelvin.`);
    }

     //Helper calculate fahrenheit
    const calcF = (c) =>{
        let f = c * (9 / 5) + 32;
        console.log(`The temperature is ${f} degrees Fahrenheit.`);
    }

    //Helper calculate newton
    const calcN = (c) =>{
        let n = Math.floor(c * (33 / 100));
        console.log(`The temperature is ${n} degrees Newton.`);
    }

    //check input 
    const checkInput = c => typeof c !== 'number' ? true : false;

    if(checkInput(c)) {
        console.log('Wrong input!');
        return;
    } else {

        //Display celsius
        console.log(`The temperature is ${c} degrees Celsius.`);

        // log other temperatures
        calcK(c);
        calcF(c);
        calcN(c);
    }
}

completeTemp(22);
