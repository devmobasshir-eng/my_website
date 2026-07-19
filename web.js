let button = document.querySelectorAll(".but0");
let reset = document.querySelector("#box");
let winnerList = document.querySelector("#winner");
let NewButton = document.querySelector("#newButton");
let massegContener = document.querySelector(".mas-contener");

let turn = true;
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [5, 7, 9],
] ;

const resetGame = () => {
         turn = true;
         enableButton();
         massegContener.classList.add("hide");
};

const disableButton = () => {
          for( let box of button) {
            box.disabled = true;
          }
          };

button.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkwin();
});
});

  const enableButton = () => {
    for (let box of button) {
        box.disabled = false;
        box.innerText = "";
    }
  }
         

const showWinner = (winner) => {
         winnerList.innerText = `Congrutulation,Winner is ${winner}`;
         massegContener.classList.remove("hide");
         disableButton();
}

const checkwin = () => {
    for (let pattern of win) {
           let posVlu = button[pattern[0]].innerText;
           let posVlu2 = button[pattern[1]].innerText;
            let posVlu3 = button[pattern[2]].innerText;

         if(posVlu!="" && posVlu2 !="" && posVlu3 !="") {
            if(posVlu === posVlu2 && posVlu2 === posVlu3) {
              console.log("winner",posVlu);  
              showWinner(posVlu);
            }
         }
    }
}
NewButton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);