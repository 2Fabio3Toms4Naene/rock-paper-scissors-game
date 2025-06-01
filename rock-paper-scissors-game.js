let humanScore = 0;
let computerScore = 0;

function playRound() {

    console.log("".padStart(10, "-") + " Welcome to rock paper scissors game " +"".padEnd(10, "-"));

    for(let i = 1; i <= 5; i++) {
        console.log(`Round: ${i}`)

        const choicesH = prompt("Enter your choice, rock, paper or scissors:");
        const humanChoice = choicesH;

        const choicesC = ["rock", "paper", "scissors"];
        const computerChoice = choicesC[Math.floor(Math.random() * choicesC.length)];

        console.log(`You: ${humanChoice.toLowerCase()}`);
        console.log(`Computer: ${computerChoice.toLowerCase()}`);

         if(humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
            console.log("It's tie!\n\n\n");
        }
        else if(humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
            console.log("Computer won, paper wins rock!\n\n\n");
            computerScore++;
        }
        else if(humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
            console.log("You won, rock wins scissors!\n\n\n")
            humanScore++;
        }
        else if(humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
            console.log("You won, paper wins rock!\n\n\n");
            humanScore++;
        }
        else if(humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
            console.log("Computer won, scissors wins paper!\n\n\n");
            computerScore++;
        }
        else if(humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
            console.log("Computer won, rock wins scissors!\n\n\n");
            computerScore++;
        }
        else if(humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
            console.log("You won, scissors wins paper!\n\n\n");
            humanScore++;
        }
    }
        console.log("".padStart(20, "-")+ " Final score " +"".padEnd(20, "-"));

        console.log(`You: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
        
        if(humanScore == computerScore) {
            console.log("It's tie, no one won!");
        }
        else if(humanScore > computerScore) {
            console.log("You won the game, congretulations!");
        }
        else if(humanScore < computerScore) {
            console.log("Computer won, you lost the game!");
        };
};
playRound();