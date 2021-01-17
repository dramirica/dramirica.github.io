/* 
SEE IN THE FUTURE EIGHT BALL
by MDN Data Software - Mirica Dragos-Neculai
v 1.0
*/

//05/12/2020
//Username
let userName = "Dragos";
userName ? console.log("Hello, " + userName + "!") : console.log("Hello!");

//Question
let userQuestion = "Diventero mai invisibile?";
console.log(`${userName} asked: ${userQuestion}`);

//Randomize
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

//Answer
console.log(eightBall);