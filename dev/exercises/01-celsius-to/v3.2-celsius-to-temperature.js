/* 
FROM CELSIUS TO KELVIN / FAHRENHEIT / NEWTON 
by MDN Data Software - Mirica Dragos-Neculai
v 3.2
*/

//Update 17/01/2021
//  c = celsius

let tempObj = {
    _celsius: null,
    _kelvin: null,
    _fahrenheit: null,
    _newton: null,
    get celsius(){
        return this._celsius;
    },
    get kelvin(){
        this._kelvin = this.celsius + 273;
        return this._kelvin;
    },
    get fahrenheit(){
        this._fahrenheit = this.celsius * (9/5) + 32;
        return this._fahrenheit;
    },
    get newton(){
        this._newton = Math.floor(this.celsius * (33 / 100));
        return this._newton;
    },
    set celsius(c){
        if(typeof c === 'number'){
            this._celsius = c;
        } else {
            return console.log('Wrong Input!');
        }
    },
    logAllTemps: function(){
        console.log(`The temperature is ${this.celsius} degrees Celsius.`);
        console.log(`The temperature is ${this.kelvin} degrees Kelvin.`);
        console.log(`The temperature is ${this.fahrenheit} degrees Fahrenheit.`);
        console.log(`The temperature is ${this.newton} degrees Newton.`);
    }
}

const completeTemp = (c=20, obj=tempObj) => {
    //set celsius
    tempObj.celsius = c;
    if(typeof c !== 'number'){
        return;
    } else {
        tempObj.logAllTemps();
    }
}

//run
completeTemp(14);