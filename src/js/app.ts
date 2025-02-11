import "../style/styles.css"; 
import paper from "../assets/images/paper.png";
import stone from "../assets/images/stone.png";
import scissors from "../assets/images/scissors.png";

// Define the choices as a key-value pair object with specific types
const choices: Record<string, string> = { rock: stone, paper: paper, scissors: scissors };

// Get references to the required DOM elements
const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".piece");
const selectionDiv: HTMLElement | null = document.getElementById("selection");
const resultDiv: HTMLElement | null = document.getElementById("result");
const scoreSpan: HTMLElement | null = document.getElementById("score");
const newGameButton: HTMLElement | null = document.getElementById("newGame");

let score: number = 0;

// Add event listeners to buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});

// Define function with proper type annotations
function playGame(playerChoice: string): void {
    const computerChoices: string[] = ["rock", "paper", "scissors"];
    const computerChoice: string = computerChoices[Math.floor(Math.random() * 3)];

    if (selectionDiv) {
        selectionDiv.innerHTML = `
            <p>You: <img src="${choices[playerChoice]}" width="50"/></p>
            <p>Computer: <img src="${choices[computerChoice]}" width="50"/></p>
        `;
    }

    if (resultDiv && scoreSpan) {
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

        scoreSpan.textContent = score.toString();
    }
}

// Ensure newGameButton exists before adding event listener
if (newGameButton) {
    newGameButton.addEventListener("click", resetGame);
}

// Reset game function with proper type handling
function resetGame(): void {
    score = 0;
    if (resultDiv) resultDiv.innerText = "Click a button to play!";
    if (scoreSpan) scoreSpan.innerText = "0";
}
