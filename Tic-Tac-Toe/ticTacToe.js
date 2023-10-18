const ticTacToe = (xName, oName) => {

    const X = "X";
    const O = "O";

    let currentPlayer = X; // plays first

    const players = {
    X : xName,
    O : oName,
}   
    const nextPlayer = {
        X: O,
        O: X,
    }

    const isValidMove = (move) => {
        // move should be the right index and not already taken
        return (1 <= move && move <= 9) && board[move] ==="";
    }

    const computeStatus = () => {
        
        let result = "Ongoing";

        const winningCombos = [
            //rows
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            //columns
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            //digonals
            [1, 5, 9],
            [7, 5, 3],
        ]
        // check for win for X
        // check for win for O

        winningCombos.forEach(([i1, i2, i3]) => {
            if (board[i1] === board[i2] && 
                board[i2] === board[i3] &&
                board[i3] === currentPlayer
            ) {
                result = `${currentPlayer}- Win`;
                return result
            }
        })
        // Check for Draw
        let noEmptyCellsToPlay = false
        for (let i=1; 1<=9; i++) {
            if (board[i] !== "") {
                noEmptyCellsToPlay = true;
                break;
            }

        if (noEmptyCellsToPlay) {
            result = "It's a Draw!";
            return result
            }
        }
        //continue the game
        return result;
        
    }
    
    // game status: Ongoing, draw, X win, O win
    const board = [
        'ongoing',
        '', '', '',
        '', '', '',
        '', '', '',
    ];


    return (player, move) => {

        // validate right player: return false if not
        if (player != currentPlayer) {
            return [ false, `Not your turn. It's ${currentPlayer}'s turn.`]
        }
        // validate rigth move: return false if not
        if (!isValidMove(move)){
            return [false, "invalid move, try again."]
        }
    // progress game:

    // i) update the board
        board[move] = currentPlayer;
    // ii)update the game status
        board[0] = computeStatus();
    // iii)change the current player
        currentPlayer = nextPlayer[currentPlayer];
        
         
    return [true, board];         
        
    };
};

module.exports = { ticTacToe };
