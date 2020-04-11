let playerScore = 0;
let playerScoreDiv = document.getElementById("playerScore");
let computerScore = 0;
let computerScoreDiv = document.getElementById("computerScore");
let roundOutcomeDiv = document.getElementById("result")
let moves = ["rock", "paper", "scissors"]
let randomNumber = () => Math.floor(Math.random() * (2 - 0 + 1)) + 0;

let round = (e) => {
    let computerMove = moves[randomNumber()]
    console.log(e.alt, computerMove)
    switch (e.alt) {
        case "rock":
            if (computerMove == e.alt) {
                roundOutcomeDiv.innerHTML = "Draw"
            } else if (computerMove == "scissors") {
                roundOutcomeDiv.innerHTML = "You win"
                playerScore++
                playerScoreDiv.innerHTML = playerScore;
            } else if (computerMove == "paper") {
                roundOutcomeDiv.innerHTML = "You lose"
                computerScore++;
                computerScoreDiv.innerHTML = computerScore;
            }
            break;
        case "paper":
            if (computerMove == e.alt) {
                roundOutcomeDiv.innerHTML = "Draw"
            } else if (computerMove == "rock") {
                roundOutcomeDiv.innerHTML = "You win"
                playerScore++
                playerScoreDiv.innerHTML = playerScore;
            } else if (computerMove == "scissors") {
                roundOutcomeDiv.innerHTML = "You lose"
                computerScore++;
                computerScoreDiv.innerHTML = computerScore;
            }
            break;
        case "scissors":
            if (computerMove == e.alt) {
                roundOutcomeDiv.innerHTML = "Draw"
            } else if (computerMove == "paper") {
                roundOutcomeDiv.innerHTML = "You win"
                playerScore++
                playerScoreDiv.innerHTML = playerScore;
            } else if (computerMove == "rock") {
                roundOutcomeDiv.innerHTML = "You lose"
                computerScore++;
                computerScoreDiv.innerHTML = computerScore;
            }
            break;

    }

    let icons = document.getElementsByClassName("gameIcon");
    if (computerMove === "rock") {
        icons[3].classList.remove("disabled")
        icons[4].classList.add("disabled")
        icons[5].classList.add("disabled")
    } else if (computerMove === "paper") {
        icons[4].classList.remove("disabled")
        icons[3].classList.add("disabled")
        icons[5].classList.add("disabled")
    } else if (computerMove === "scissors") {
        icons[5].classList.remove("disabled")
        icons[4].classList.add("disabled")
        icons[3].classList.add("disabled")
    }

}

let reset = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.innerHTML = 0;
    computerScoreDiv.innerHTML = 0;
}