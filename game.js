const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const userchoice1= "rock"
const userchoice2="paper"
const userchoice3="scissors"

const computerChoice1= "rock"
const computerChoice2="paper"
const computerChoice3="scissors"

const outcome1="win"
const outcome2="lose"
const outcome3="tie"


function play(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  displayResult(result, userChoice, computerChoice);
  rl.close();
}

const getComputerChoice = function() {
  const random = Math.random();
  if (random < 0.34) return computerChoice1;
  if (random < 0.67) return computerChoice2;
  return computerChoice3;
};



const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return outcome3;
  if (
    (userChoice === userchoice1 && computerChoice === computerChoice1) ||
    (userChoice === userchoice2 && computerChoice === computerChoice2) ||
    (userChoice === userchoice3 && computerChoice === computerChoice3)
  ) {
    return outcome1;
  }
  return outcome2;
};

const displayResult = function(result, userChoice, computerChoice) {
  const outcome = result === outcome1 ? 'You win!' : result === outcome2 ? 'computer wins!' : 'It\'s a tie!';
  console.log(`
    ${outcome}
    You chose: ${userChoice}
    Computer chose: ${computerChoice}
  `);
};

console.log("Rock Paper Scissors");

rl.question("Enter rock, paper, or 'scissors': ", (answer) => {
  const userChoice = answer.trim().toLowerCase();
  if (userChoice !== userchoice1 && userChoice !== userchoice2 && userChoice !== userchoice3) {
    console.log("Invalid choice. enter rock, paper, or scissors.");
    rl.close();
  } else {
    play(userChoice);
  }
});
