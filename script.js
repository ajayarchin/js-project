let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let startBtn = document.querySelector("#start");
let msgCont = document.querySelector(".msgcon");
let msg = document.querySelector("#msg");

let turno = true; //playerx,playero

const winpat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWin();
    });
});

const disabledBox = ()=>{
    for (let box of boxes){
        box.disabled = true;

    }
} 
const enabledBox = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
} 
const showWinner = (winner) => {
    msg.innerText = 'Congrats winner is ' + winner;
    msgCont.classList.remove("hide"); 
    disabledBox();
};

const resetGame = ()=>{
    turno = true;
    enabledBox();
    msgCont.classList.add("hide"); 

}

const checkWin = () => {
    for (let pattern of winpat) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) { 
                showWinner(pos1);
            }
        }
    }
};

startBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
