const playerchoice = document.getElementById("playerchoice")
const computerchoice = document.getElementById("computerchoice")
const resultDisplay = document.getElementById("result")
const options = ["rock", "paper", "scissor"]
const playerscore = document.getElementById("playerscore")
const computerscore = document.getElementById("computerscore")
const restart = document.getElementById("restart")
let playersscore = 0;
let computersscore = 0;
function Restart() {
    playerscore.textContent = 0; 
    computerscore.textContent = 0;  
    resultDisplay.textContent ="";
   playerchoice.textContent="player";
   computerchoice.textContent="computer";
}
function playBtn(playeroption) {
    const computeroption = options[Math.floor(Math.random() * 3)]
    let result = "";

    if (playeroption === computeroption) {
        result = "IT'S TIE";
    } else {
        switch (playeroption) {
            case "rock":
                result = (computerchoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                result = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }


    playerchoice.textContent = `PLAYER: ${playeroption}`;
    computerchoice.textContent = `Computer: ${computeroption}`;
    resultDisplay.textContent = result;

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greentext");
            playersscore++;
            playerscore.textContent = playersscore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redtext");
            computersscore++;
            computerscore.textContent = computersscore;
            break;
    }
}
