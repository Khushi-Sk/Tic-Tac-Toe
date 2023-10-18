const {ticTacToe} = require("./ticTacToe");

const play = ticTacToe('Messi','Ronaldo');

let result, board;


const printBoard = (board) => {
    console.log(`${board[1] || '_'}  ${board[2] || '_'}  ${board[3] || '_'}`);
    console.log(`${board[4] || '_'}  ${board[5] || '_'}  ${board[6] || '_'}`);
    console.log(`${board[7] || '_'}  ${board[8] || '_'}  ${board[9] || '_'}`);
    console.log(` `); // empty space for clear view at console
}

[result, board] = play("X", 1);
if (result) {
    printBoard(board)
} else {
    console.log(board)
}

[result, board] = play("O", 3);
if (result) {
    printBoard(board)
} else {
    console.log(board)
}

[result, board] = play("X", 3);
if (result) {
    printBoard(board)
} else {
    console.log(board)
}

[result, board] = play("X", 5);
if (result) {
    printBoard(board)
} else {
    console.log(board)
}

[result, board] = play("X", 9);
if (result) {
    printBoard(board)
} else {
    console.log(board)
}

[result, board] = play("O", 6);
if (result) {
    printBoard(board)
} else {
    console.log(board)
}

