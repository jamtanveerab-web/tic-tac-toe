let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let winer = document.querySelector(".msg");
let newbtn = document.querySelector(".new-game");
let msgcontainer = document.querySelector(".msg-container");

let turnO = true ;

const winningpattern =[
    [0,1,2],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]
const resetGame = () => {
    turnO = true;
    enablebtnn ();
    msgcontainer.classList.add("hide");
}
const enablebtnn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disablebtnn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

boxes.forEach((btn) => {
    btn.addEventListener("click",() =>{
    if(turnO){
        btn.innerText = "O";
        turnO = false;
    }else{
        btn.innerText = "x";
        turnO = true;
    }
    btn.disabled = true;
    checkwinner ();
});
});
const showWinnwer =(winner) => {
    winer.innerText = `Congrulation, the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtnn();
}
const checkwinner = () => {
    for(pattern of winningpattern){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;    
    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinnwer(pos1val);
        }
    }
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
