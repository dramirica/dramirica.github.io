/* 
THE ROCK PAPER AND SCISSORS GAME WITH BOMB
by MDN Data Software - Mirica Dragos-Neculai
v 1.0
*/

//10/12/2020
//User input
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log(
      "The value that you choose, isn't a correct one. Try with rock, paper or scissors."
    );
  }
};

//Computer choice
const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

//Win and Lose conditions
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer wins";
    } else {
      return "user wins";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "user wins";
    } else {
      return "computer wins";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer wins";
    } else {
      return "user wins";
    }
  } else if (userChoice === "bomb") {
    return "GG the cup is yours.";
  }
};

//Make the game running
const playGame = () => {
  let userChoice = getUserChoice("ROCK");
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
