const choices = ["STONE", "PAPER", "SCISSOR"];
const playerElement = document.getElementById('player');
const computerElement = document.getElementById('computer');
const thebox = document.getElementById('thebox');

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let gameResult = "";

  if (playerChoice === computerChoice) {
    gameResult = "TIE";
  } else {
    switch (playerChoice) {
      case "STONE":
        gameResult = (computerChoice === "SCISSOR") ? "YOU WIN" : "YOU LOSE";
        break;
      case "PAPER":
        gameResult = (computerChoice === "STONE") ? "YOU WIN" : "YOU LOSE";
        break;
      case "SCISSOR":
        gameResult = (computerChoice === "PAPER") ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }

  playerElement.textContent = `PLAYER: ${playerChoice}`;
  computerElement.textContent = `COMPUTER: ${computerChoice}`;
  thebox.textContent = `${gameResult}`;

 
}