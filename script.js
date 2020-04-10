let playerScore = 0;
let playerScoreDiv = document.getElementById("playerScore");
let computerScore = 0;
let computerScoreDiv = document.getElementById("computerScore");
let moves = ["rock", "paper", "scissors"]
let randomNumber = () => Math.floor(Math.random() * (2 - 0 + 1)) + 0;

let round = (e) => {
    let computerMove = moves[randomNumber()]
    console.log(e.alt, computerMove)
    switch (e.alt) {
        case "rock":
            if (computerMove == e.alt) {
                console.log("draw")
            } else if (computerMove == "scissors") {
                console.log("you win")
                playerScore++
                playerScoreDiv.innerHTML = playerScore;
            } else if (computerMove == "paper") {
                console.log("you lose")
                computerScore++;
                computerScoreDiv.innerHTML = computerScore;
            }
            break;
        case "paper":
            if (computerMove == e.alt) {
                console.log("draw")
            } else if (computerMove == "rock") {
                console.log("you win")
                playerScore++
                playerScoreDiv.innerHTML = playerScore;
            } else if (computerMove == "scissors") {
                console.log("you lose")
                computerScore++;
                computerScoreDiv.innerHTML = computerScore;
            }
            break;
        case "scissors":
            if (computerMove == e.alt) {
                console.log("draw")
            } else if (computerMove == "paper") {
                console.log("you win")
                playerScore++
                playerScoreDiv.innerHTML = playerScore;
            } else if (computerMove == "rock") {
                console.log("you lose")
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