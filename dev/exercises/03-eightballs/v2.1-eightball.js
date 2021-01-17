/* 
SEE IN THE FUTURE EIGHT BALL
by MDN Data Software - Mirica Dragos-Neculai
v 2.1
*/

//Update 16/01/2021

//get the name of the player
const getName = (name='Dra') => {
  userName = name;
  console.log("Hello, " + userName + "!");
}

//generate a random answer
const answer = () => {
  //Randomize
  let randomNumber = Math.floor(Math.random() * 8);
  switch (randomNumber) {
    case 0:
      return "It is certain";
    case 1:
      return "It is decidedly so";
    case 2:
      return "Reply hazy try again";
    case 3:
      return "Cannot predict now";
    case 4:
      return "Do not count on it";
    case 5:
      return "My sources say no";
    case 6:
      return "Outlook not so good";
    case 7:
      return "Signs point to yes";
  }
}

//ask and give an answer
const eightBall = (question = "Will I fly?") => {
  console.log(`${userName} asked: ${question}`);
  console.log(answer());
}

//run
getName();
eightBall();