let usrScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".result");

const usrScorePara=document.querySelector(".player-score");
const compScorePara=document.querySelector(".computer-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    console.log(randIdx);
    return options[randIdx];
};

const showResult=(usrWin,usrChoice,compChoice) =>{
    if(usrWin){
        usrScore++;
        usrScorePara.innerText=usrScore;
        msg.innerText=`You won! your ${usrChoice} beat computer's ${compChoice}`;
        msg.style.backgroundColor="rgb(10, 88, 19)";
        msg.style.color="white";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost! computer's ${compChoice} beat yours ${usrChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
};

const drawGame=() =>{
    msg.innerText="Draw Match!";
    msg.style.backgroundColor="black";
    msg.style.color="white";
};

const playGame=(usrChoice) =>{
    const compChoice = genCompChoice();
    if(usrChoice===compChoice){
        drawGame();
    }else{
        let usrWin=true;
        if(usrChoice==="rock"){
            usrWin = compChoice ==="paper"? false:true
        }else if(usrChoice==="scissor"){
            usrWin = compChoice === "rock"? false:true
        }else if (usrChoice==="paper"){
            usrWin = compChoice ==="scissor"? false:true
        }
        showResult(usrWin,usrChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        usrChoice=choice.getAttribute("id");
        console.log(usrChoice);
        playGame(usrChoice);
    });
});