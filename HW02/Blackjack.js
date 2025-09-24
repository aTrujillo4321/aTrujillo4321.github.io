document.querySelector("#hit").addEventListener("click", hit);
document.querySelector("#stand").addEventListener("click", stand);

let dealerScoreText = document.getElementById('dealer-score');
let playerScoreText = document.getElementById('player-score');
let hitButton = document.getElementById('hit');
let standButton = document.getElementById('stand');
let winsSpan = document.getElementById('wins');
let lossesSpan = document.getElementById('losses');
let messageElement = document.createElement('h3'); 
let game_image = document.getElementById('image');
document.querySelector('.game').appendChild(messageElement);

let dealerScore = 0;
let playerScore = 0;
let wins = 0;
let losses = 0;
let isGameOver = true;

function startGame() {
    isGameOver = false;
    dealerScore = 0;
    playerScore = 0;

    dealerScore += getRandomNumber();
    playerScore += getRandomNumber() + getRandomNumber();
    dealerScoreText.textContent = `Score: ${dealerScore}`;
    playerScoreText.textContent = `Score: ${playerScore}`;

    hitButton.textContent = "Hit";
    hitButton.disabled = false;
    standButton.disabled = false;
    messageElement.textContent = "";
    game_image.innerHTML = "";

    if (playerScore === 21) {
        endGame("Someone's Lucky! You Got Blackjack!", "win");
    }
}

function hit() {
    if (isGameOver) {
        startGame(); 
        return;
    }
    
    playerScore += getRandomNumber();
    playerScoreText.textContent = `Score: ${playerScore}`;

    if (playerScore > 21) {
        endGame("You Lose! You Busted!", "loss");
    } 
    else if (playerScore === 21) {
        endGame("You win!", "win");
    }
}

function stand() {
    hitButton.disabled = true;
    standButton.disabled = true;

    while (dealerScore <= 16) {
        dealerScore += getRandomNumber();
        dealerScoreText.textContent = `Score: ${dealerScore}`;
    }

    if (dealerScore > 21) {
        endGame("You Won! Dealer Busted!", "win");
    } 
    else if (playerScore > dealerScore) {
        endGame("You Won!", "win");
    } 
    else if (playerScore < dealerScore) {
        endGame("You Lost!", "loss");
    } 
    else {
        endGame("It's a tie!", "tie");
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 2;
}

function endGame(message, result) {
    isGameOver = true;
    messageElement.textContent = message;
    hitButton.textContent = "Play Again";
    hitButton.disabled = false;
    standButton.disabled = true;

    let img = document.createElement('img');
    img.style.maxWidth = '150px'; 
    img.style.marginTop = '40px'; 
    img.style.borderRadius = '16px';

    if (result === 'win') {
        wins++;
        winsSpan.textContent = wins;
        img.src = 'happy.jpg';
    } 
    else if (result === 'loss') {
        losses++;
        lossesSpan.textContent = losses;
        img.src = 'mad.jpg';
    }
    game_image.appendChild(img);
}

startGame();