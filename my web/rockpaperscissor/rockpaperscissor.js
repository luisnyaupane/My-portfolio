let image=document.querySelectorAll(".img");
let Rock=document.querySelectorAll(".rock");
let playercount=document.querySelector("#numPlayer");
let computercount=document.querySelector("#numComputer");
let reStart=document.querySelector(".resetButton");
let winShow= document.querySelector(".win");
let winMsg =document.querySelector("#Winner");
let showWinner =document.querySelector(".secContener");
rePlay=document.querySelector(".newGameBtn");
const computerClicked = () => {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * 3); // Generate a random number between 0-2
    return choices[randomIndex]; // Return the selected choice
};
Rock.forEach((rock) =>{
    rock.addEventListener("click",()=>{
        // clickedButtonByPlayer = Rock;
        let computerChoice = computerClicked();
        findWinner("Rock",computerChoice);
    

        });
});


let Paper=document.querySelectorAll(".paper");
Paper.forEach((paper)=>{
 paper.addEventListener("click",()=>{
    let computerChoice = computerClicked();
 findWinner("Paper",computerChoice);
 });
});
let Scissor=document.querySelectorAll(".scissor");
Scissor.forEach((scissor)=>{
    scissor.addEventListener("click",()=>{
        let computerChoice = computerClicked();
    findWinner("Scissor",computerChoice);
    });
   });

//    let clickedButtonByComputer ="paper";


const findWinner=(clickedButtonByPlayer ,clickedButtonByComputer)=>{
    // console.log(clickedButtonByComputer);
    // clickedElement.style.backgroundColor = "#f0f0f0";
if(clickedButtonByPlayer==="Rock" && clickedButtonByComputer ==="Rock" ||clickedButtonByPlayer==="Paper" && clickedButtonByComputer ==="Paper"||clickedButtonByPlayer==="Scissor" && clickedButtonByComputer ==="Scissor")
    {

// playercount.value = parseInt(playercount.value) + 1;
// let y = Math.random()*3;
console.log("draw");
showWinner.classList.remove("win");
winMsg.innerText =`computer chose ${clickedButtonByComputer} and you chose ${clickedButtonByPlayer} so match *DRAW*`;

}
else if(clickedButtonByPlayer==="Rock" && clickedButtonByComputer ==="Scissor" ||clickedButtonByPlayer==="Paper" && clickedButtonByComputer ==="Rock"||clickedButtonByPlayer==="Scissor" && clickedButtonByComputer ==="Paper")
    {
        console.log("player won");
        playercount.value = parseInt(playercount.value) + 1;
        showWinner.classList.remove("win");
        winMsg.innerText =`computer chose ${clickedButtonByComputer} and you chose ${clickedButtonByPlayer} so  *YOU* won match `;

}
else if(clickedButtonByComputer==="Rock" && clickedButtonByPlayer ==="Scissor" ||clickedButtonByComputer==="Paper" && clickedButtonByPlayer ==="Rock"||clickedButtonByComputer==="Scissor" && clickedButtonByPlayer ==="Paper")
    {
        console.log("computer won");
        computercount.value = parseInt(computercount.value) + 1;
        showWinner.classList.remove("win");
        winMsg.innerText =`computer chose ${clickedButtonByComputer} and you chose ${clickedButtonByPlayer} so  *COMPUTER* won match`;

}
};

    reStart.addEventListener("click",()=>{
        computercount.value = 0;
        playercount.value = 0;
    });

rePlay.addEventListener("click", ()=>{
    showWinner.classList.add("win");
});