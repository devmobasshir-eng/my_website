let button = document.querySelectorAll(".but0");
let reset = document.querySelector("#box");
let winnerList = document.querySelector("#winner");
let NewButton = document.querySelector("#newButton");
let massegContener = document.querySelector(".mas-contener");
let drawContener = document.querySelector(".draw-contener");

let turn = true;
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn = true;
    enableButton();
    massegContener.classList.add("hide");  // winner hide
    drawContener.classList.add("hide");    // draw hide
};

const disableButton = () => {
    for (let box of button) {
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
};

const showWinner = (winner) => {
    winnerList.innerText = `Winner is ${winner}`;
    massegContener.classList.remove("hide");
    disableButton();
};

const showDraw = () => {
    drawContener.classList.remove("hide");
    disableButton();
};

const checkwin = () => {
    let winnerfound = false;

    for (let pattern of win) {
        let posVlu = button[pattern[0]].innerText;
        let posVlu2 = button[pattern[1]].innerText;
        let posVlu3 = button[pattern[2]].innerText;

        if (posVlu != "" && posVlu2 != "" && posVlu3 != "") {
            if (posVlu === posVlu2 && posVlu2 === posVlu3) {
                console.log("winner", posVlu);
                showWinner(posVlu);
                winnerfound = true;
                break; // winner mil gaya, loop stop
            }
        }
    }

    // Agar winner nahi mila tabhi draw check hoga
    if (!winnerfound) {
        let allFilled = true;
        for (let box of button) {
            if (box.innerText === "") {
                allFilled = false;
                break;
            }
        }
        if (allFilled) {
            showDraw();
        }
    }
};

NewButton.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
