/* 
SEE IN THE FUTURE EIGHT BALL
by MDN Data Software - Mirica Dragos-Neculai
v 3.1
*/

//Update 17/01/2021

//get the name of the player
const getName = (name='Dra') => {
  userName = name;
  console.log("Hello, " + userName + "!");
}

//generate a random answer
const answer = () => {

  //answers array
  let answer = [
    "It is certain",
    "It is decidedly so",
    "Reply hazy try again",
    "Cannot predict now",
    "Do not count on it",
    "My sources say no",
    "Outlook not so good",
    "Signs point to yes"
  ];

  //Randomize
  let randomNumber = Math.floor(Math.random() * answer.length);

  return answer[randomNumber];

}

//ask and give an answer
const eightBall = (question = "Will I fly?") => {
  console.log(`${userName} asked: ${question}`);
  console.log(answer());
}

//run
getName();
eightBall();
