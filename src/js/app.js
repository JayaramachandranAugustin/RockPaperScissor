let userWins = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const systemChoice = choices[Math.floor(Math.random() * 3)];

    let selectionMessage = `You chose ${userChoice}, System chose ${systemChoice}. `;
    
    let resultMessage;

    if (userChoice === systemChoice) {
        resultMessage = "It's a tie!";
        userWins+=0.5;
    } else if (
        (userChoice === 'rock' && systemChoice === 'scissors') ||
        (userChoice === 'paper' && systemChoice === 'rock') ||
        (userChoice === 'scissors' && systemChoice === 'paper')
    ) {
        userWins++;
        resultMessage = "You win!";
    } else {
        resultMessage = `System wins! Game Over! Total score - ${userWins}`;
        userWins = 0;
    }

    document.getElementById('score').innerText = userWins;
    document.getElementById('selection').innerText = selectionMessage;
    document.getElementById('result').innerText = resultMessage;
}

