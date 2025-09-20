document.querySelector("#guessBtn").addEventListener("click", guess)
document.querySelector(".reset-button").addEventListener("click", resetGame);

let randomNumber = Math.floor(Math.random() * 99) + 1;
let attempts = 0;
let wins = 0;
let losses = 0;

console.log("random number: " + randomNumber);

function guess() {
    let guessBox = document.querySelector("#guessBox");
    let userGuess = Number(guessBox.value);

    let loworHigh = document.querySelector(".low-or-high");
    let final = document.querySelector(".final-message");
    let congrats = document.querySelector("#congrats");

    if (userGuess > 99) {
        document.querySelector(".error-message").textContent = "Please enter a number that is 99 or less.";
        guessBox.value = '';
        return;
    } 
    else {
        document.querySelector(".error-message").textContent = "";
    }

    document.querySelector(".guesses").textContent += `${userGuess} `;
    attempts++;

    if (userGuess === randomNumber) {
        loworHigh.textContent = "";
        final.textContent = "CORRECT!";
        final.style.color = "green";
        congrats.textContent = "CONGRATULATIONS! You guessed it within 7 attempts!";
        wins++;
        document.querySelector(".wins").textContent = wins;
        endGame();
    } 
    else if (attempts >= 7) {
        loworHigh.textContent = "";
        final.textContent = `You Lost! The correct number was ${randomNumber}.`;
        final.style.color = "red";
        congrats.textContent = "";
        losses++;
        document.querySelector(".losses").textContent = losses;
        endGame();
    } 
    else {
        if (userGuess < randomNumber) {
            loworHigh.textContent = "Your guess was too low.";
        } else {
            loworHigh.textContent = "Your guess was too high.";
        }
    }

    guessBox.value = "";
    guessBox.focus();
}

function endGame() {
    document.querySelector("#guessBox").disabled = true;
    document.querySelector("#guessBtn").disabled = true;
    document.querySelector(".reset-button").style.display = "block";
}

function resetGame() {
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 99) + 1;

    document.querySelector(".guesses").textContent = "";
    document.querySelector(".low-or-high").textContent = "";
    document.querySelector(".final-message").textContent = "";
    document.querySelector("#congrats").textContent = "";
    document.querySelector(".error-message").textContent = "";
    
    document.querySelector("#guessBox").disabled = false;
    document.querySelector("#guessBtn").disabled = false;
    document.querySelector(".reset-button").style.display = "none";
    document.querySelector("#guessBox").value = "";
    document.querySelector("#guessBox").focus();

}
