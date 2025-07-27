// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector(".reset");
// let newGame = document.querySelector("#new-game");
// let massage = document.querySelector(".massage")

// let turnO = true;

// const winPattern = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// const resetGame = () => {
//     turnO = true;
//     enableBoxes();
//     massage.classList.add("hide");
// }

// const enableBoxes = () => {
//     for(box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// }

// const disableBoxes = () => {
//     for(box of boxes) {
//         box.disabled = true;
//     }
// }

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box was clicked");
//         if (turnO) {
//             box.innerText = "O";
//             turnO = false;
//         } else {
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         checkWinner();
//     })
// })

// const checkWinner = () => {
//     for(let patterns  of winPattern) {
//         let pos1 = boxes[patterns[0]].innerText;
//         let pos2 = boxes[patterns[1]].innerText;
//         let pos3 = boxes[patterns[2]].innerText;

//         if(pos1 !== "" && pos2 !== "" && pos3 !== "") {
//             if(pos1 === pos2 && pos2 === pos3) {
//                 console.log("winner is ", pos1);
//                 showWinner(pos1);
//             }
//         }
//     }
// }

// const showWinner = (winner) => {
//     massage.innerText = `The winner is ${winner}`;
//     massage.classList.remove("hide");
//     disableBoxes();
// }

// newGame.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

// // Try again // 

// let boxes = document.querySelectorAll(".box");
// let reset = document.querySelector(".reset");
// let newGame = document.querySelector("#new-game");
// let announce = document.querySelector(".massage");

// let turnX = true;

// const winPattern = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was filled");
//         if(turnX) {
//             box.innerText = "X";
//             turnX = false;
//         } else {
//             box.innerText = "O";
//             turnX = true;
//         }
//         box.disabled = true;
//         checkWinner();
//     })
// });

// const resetGame = () => {
//     turnX = true;
//     enableBox();
//     announce.classList.add("hide");
// }

// const enableBox = () => {
//     for(box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// }

// const disableBox = () => {
//     for(box of boxes) {
//         box.disabled = true;
//     }
// }

// const checkWinner = () => {
//     for(let pattern of winPattern) {
//         let pos1 = boxes[pattern[0]].innerText;
//         let pos2 = boxes[pattern[1]].innerText;
//         let pos3 = boxes[pattern[2]].innerText;

//         if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
//             if(pos1 === pos2 && pos2 === pos3) {
//                 console.log("winner is ", pos3);
//                 disableBox();
//                 showWinner(pos1);
//             };
//         };
//     };
// };

// const showWinner = (winner) => {
//     announce.innerText = `The winner is ${winner}`
//     announce.classList.remove("hide");
// }

// reset.addEventListener("click", resetGame);
// newGame.addEventListener("click", resetGame);


// Try again //

// let boxes = document.querySelectorAll(".box");
// let massage = document.querySelector(".massage");
// let reset = document.querySelector(".reset");
// let newGame = document.querySelector("#new-game");
// let hide = document.querySelector(".hide");

// let winPattern = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// let player1 = true;

// const resetGame = () => {
//     player1 = true;
//     enabelBox();
// }

// const disableBox = () => {
//     for(let box of boxes) {
//         box.disabled = true;
//     }
// }

// const enabelBox = () => {
//     for(let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//         hide.classList.add("hide");
//     }
// }

// boxes.forEach((box) => {
//         box.addEventListener("click", () => {
//             if (player1) {
//                 box.innerText = "X";
//                 player1 = false;
//             } else {
//                 box.innerText = "O";
//                 player1 = true;
//             }
//             box.disabled = true;
//             checkWinner();
//         })
//     }
// )

// const checkWinner = () => {
//     for(let pattern of winPattern) {
//             let pos1 = boxes[pattern[0]].innerText
//             let pos2 = boxes[pattern[1]].innerText
//             let pos3 = boxes[pattern[2]].innerText

//             if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
//                 if (pos1 === pos2 && pos2 === pos3) {
//                     console.log("winner is ", pos1);
//                     disableBox();
//                     showWinner(pos1);
//                 };
//             };
//     };
// };

// const showWinner = (winner) => {
//     massage.innerText = `The winner is ${winner}`;
//     hide.classList.remove("hide");
// }

// reset.addEventListener("click", resetGame);
// newGame.addEventListener("click", resetGame);

let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector("#new-game");
let resetGame = document.querySelector(".reset");
let hide = document.querySelector(".hide");
let massage = document.querySelector(".massage");

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let player = "X";
let count = 0;

const reset = () => {
    enableBox();
    count = 0;
}

const disableBox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for(let box of boxes) {
        box.disabled = false;
        hide.classList.add("hide");
        box.innerText = "";
    }
}

const draw = () => {
    hide.classList.remove("hide");
    massage.innerText = "The game is draw";
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player) {
            box.innerText = "X";
            player = false;
            box.classList.add("x");
            box.classList.remove("o");
        } else {
            box.innerText = "O";
            player = true;
            box.classList.add("o");
            box.classList.remove("x")
        }
        box.disabled = true;
        let isWinner = checkWinner();
        count++;
        if (count === 9 && !isWinner) {
            draw();
        }
        checkWinner();
    })
});

const checkWinner = () => {
    for(let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}

const showWinner = (winner) => {
    massage.innerText = `The winner is ${winner}`
    hide.classList.remove("hide");
    disableBox();
}

resetGame.addEventListener("click", reset);
newGame.addEventListener("click", reset);
