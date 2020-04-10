let playerScore = parseInt(document.getElementById("playerScore").innerHTML, 10)
let computerScore = parseInt(document.getElementById("computerScore").innerHTML, 10)
let moves = ["rock", "paper", "scissors"]
let randomNumber = () => Math.floor(Math.random() * (2 - 0 + 1)) + 0;

let round = (e) => {
    let computerMove = moves[randomNumber()]
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