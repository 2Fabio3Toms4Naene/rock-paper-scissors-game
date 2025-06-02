const containerButtons = document.querySelector(".container-buttons");
const containerRounds = document.querySelector(".container-rounds");
const containerFinalScore = document.querySelector(".container-final-score");

let humanScore = 0;
let computerScore = 0;
let rounds = 1

//GET COMPUTER CHOICE
function getComputerChoice() {
    const choicesC = ["rock", "paper", "scissors"];
    const computerChoice = choicesC[Math.floor(Math.random() * choicesC.length)];

    return computerChoice;
};

//GET HUMAN CHOICE AND PLAYROUND
containerButtons.addEventListener("click", (event) => {

    if(rounds > 0 && rounds < 6) {
        let target = event.target;
        let humanChoice = target.id;

        const computerChoice = getComputerChoice();

        const cardRound = document.createElement("div");

        const round = document.createElement("small");
        round.textContent = `Round: ${rounds++}`;
        cardRound.appendChild(round)


        const showHumanChoice = document.createElement("span");
        const img = document.createElement("img");
        if(humanChoice === "rock") {
            img.src = "./images/rock.jpeg";
            img.alt = "rock";
        }
        else if(humanChoice === "paper") {
            img.src = "./images/paper-hand.jpeg";
            img.alt = "paper";
        }
        else if(humanChoice === "scissors") {
            img.src = "./images/scissors-hand.jpeg";
            img.alt = "scissors";
        }
        showHumanChoice.textContent = `You: ${humanChoice}`;
        showHumanChoice.appendChild(img)
        cardRound.appendChild(showHumanChoice);

        const imgC = document.createElement("img")
        if(computerChoice === "rock") {
            imgC.src = "./images/rock.jpeg";
            imgC.alt = "rock";
        }
        else if(computerChoice === "paper") {
            imgC.src = "./images/paper-hand.jpeg";
            imgC.alt = "paper";
        }
        else if(computerChoice === "scissors") {
            imgC.src = "./images/scissors-hand.jpeg";
            imgC.alt = "scissors";
        }
        const showComputerChoice = document.createElement("p");
        showComputerChoice.textContent = `Computer: ${computerChoice}`;
        showComputerChoice.appendChild(imgC);
        cardRound.appendChild(showComputerChoice);

        const showRoundWiner = document.createElement("b");
        cardRound.appendChild(showRoundWiner);

        containerRounds.appendChild(cardRound);

        if(humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
            showRoundWiner.textContent = "It's tie!";
        }
        else if(humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
            showRoundWiner.textContent = "Computer won, paper wins rock!";
            computerScore++;
        }
        else if(humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
            showRoundWiner.textContent = "You won, rock wins scissors!";
            humanScore++;
        }
        else if(humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
            showRoundWiner.textContent = "You won, paper wins rock!";
            humanScore++;
        }
        else if(humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
            showRoundWiner.textContent = "Computer won, scissors wins paper!";
            computerScore++;
        }
        else if(humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
            showRoundWiner.textContent = "Computer won, rock wins scissors!";
            computerScore++;
        }
        else if(humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
            showRoundWiner.textContent = "You won, scissors wins paper!";
            humanScore++;
        }

        if(rounds == 6) {
            const finalScore = document.createElement("h2");
            finalScore.textContent = "Final score";
            containerFinalScore.appendChild(finalScore);

            const showHumanScore = document.createElement("p");
            showHumanScore.textContent = `You: ${humanScore}`;
            containerFinalScore.appendChild(showHumanScore);

            const showComputerScore = document.createElement("p");
            showComputerScore.textContent = `Computer: ${computerScore}`;
            containerFinalScore.appendChild(showComputerScore);

            const winerOfTheGame = document.createElement("p");
            containerFinalScore.appendChild(winerOfTheGame);

            if(humanScore == computerScore) {
                winerOfTheGame.textContent = "It's tie, no one won!";
            }
            else if(humanScore > computerScore) {
                winerOfTheGame.textContent = "You won the game, congretulations!";
            }
            else if(humanScore < computerScore) {
                winerOfTheGame.textContent = "Computer won, you lost the game!";
            };

            const clearGame = document.createElement("button");
            clearGame.textContent = "clear the game and start again"
            containerFinalScore.appendChild(clearGame);

            clearGame.addEventListener("click", () => {
                const allCardRounds = containerRounds.querySelectorAll("div");
                allCardRounds.forEach((div) => {
                    div.remove();
                });

                containerFinalScore.removeChild(finalScore);
                containerFinalScore.removeChild(showHumanScore);
                containerFinalScore.removeChild(showComputerScore);
                containerFinalScore.removeChild(winerOfTheGame);
                containerFinalScore.removeChild(clearGame);
                humanScore = 0;
                computerScore = 0
                rounds = 1;
            });
        };
    }
    else{
        alert("pleae clear the game to play again")
    };
});