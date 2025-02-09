const choices = { rock: "src/assets/images/stone.png", paper: "src/assets/images/paper.png", scissors: "src/assets/images/scissors.png" };

const buttons = document.querySelectorAll(".piece");
const selectionDiv = document.getElementById("selection");
const resultDiv = document.getElementById("result");
const scoreSpan = document.getElementById("score");
const newGameButton = document.getElementById("newGame");

let score = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});

function playGame(playerChoice) {
    const computerChoices = ["rock", "paper", "scissors"];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    selectionDiv.innerHTML = `
        <p>You: <img src="${choices[playerChoice]}" width="50"/></p>
        <p>Computer: <img src="${choices[computerChoice]}" width="50"/></p>
    `;

    if (playerChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.textContent = "You Win!";
        score++;
    } else {
        resultDiv.textContent = "You Lose!";
        score--;
    }

    scoreSpan.textContent = score;
}

newGameButton.addEventListener("click", resetGame);


function resetGame() {
    userWins = 0;
    document.getElementById('result').innerText = "Click a button to play!";
    document.getElementById('score').innerText = "0";
}
