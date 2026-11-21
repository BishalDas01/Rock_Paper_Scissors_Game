let choices = document.querySelectorAll(".choice")
let comp_score = document.querySelector(".comp-score");
let user_score = document.querySelector(".user-score");
let msg = document.querySelector(".msg");

let userScore = 0;
let compScore = 0;


const genCompChoice = () => {
    const array = ["rock", "paper", "scissors"]
    const randValue = Math.floor(Math.random() * 3);
    return array[randValue];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerText = "This was draw, play again";
    msg.style.backgroundColor = "black";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice()
    let userWin = true;
    
    if(compChoice === userChoice){
        drawGame();
    }
    else{
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})