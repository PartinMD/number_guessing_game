let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// My Code starts here

const generateTarget = () => Math.floor(Math.random() * 10); //This function randomly generates a number between 0 (inclusive) and 10 (exclusive)

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;
}

const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
const advanceRound = () => currentRoundNumber++;

