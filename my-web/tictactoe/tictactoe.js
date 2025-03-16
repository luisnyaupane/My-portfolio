let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbutton");
let newgame = document.querySelector(".newGame");
winmsg=document.querySelector(".win");
let turno = true;
let msgforwinner =document.querySelector("#Winner");
let secdContener=document.querySelector(".secContener");

const winPattern = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], //]Right column
  [0, 4, 8], // Main diagonal
  [2, 4, 6], // Anti-diagonal
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.backgroundColor = "#495057";
    console.log("box was clicked");
    
    if (turno === true) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
    // if(winnero===true){
    //   console.log("winner is player 1")
    // }
    // if(winnerx===true){
    //     console.log("winner is player 1")
    //   }
  });
});
const showWinner=(winner)=>{
    msgforwinner.innerText=`congratulation winner is ${winner}`;
    secdContener.classList.remove("win");
        boxes.forEach((box) => { 
            box.disabled = true;
            box.innerText="";
        }
    )
}

const checkWinner = () => {
  for (pttrn of winPattern) {
    // console.log(pttrn[0],pttrn[1],pttrn[2]);
    // console.log(boxes[pttrn[0]], boxes[pttrn[1]], boxes[pttrn[2]]);

    let position1 = boxes[pttrn[0]].innerText;
    let position2 = boxes[pttrn[1]].innerText;
    let position3 = boxes[pttrn[2]].innerText;
    let p =0;
         p=p+1;
    // console.log(position1);
    // console.log(position2);
    // console.log(position3);
    if(position1 != "" &&position2 != ""&& position3 != ""  ){
        if(position1===position2 &&position2===position3  )
            {
            
            console.log("winner ",boxes[pttrn[0]].innerText);
         showWinner(position1);
         
           
        }
        
    }
    

  }
};
const resetgame=()=>{
    boxes.forEach((box) => { 
        box.disabled = false;
         box.innerText="";
        box.style.backgroundColor = "#778da9";
        
    })
    secdContener.classList.add("win");
    turno = true;

    
};
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);