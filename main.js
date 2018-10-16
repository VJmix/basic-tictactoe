function init() {
    p1_sym = 'X';
    p2_sym = 'O';
    moves = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    movesNo = 0;
    winningSequences = [
        [[1, 1], [1, 2], [1, 3]],
        [[2, 1], [2, 2], [2, 3]],
        [[3, 1], [3, 2], [3, 3]],
        [[1, 1], [2, 1], [3, 1]],
        [[1, 2], [2, 2], [3, 2]],
        [[1, 3], [2, 3], [3, 3]],
        [[1, 1], [2, 2], [3, 3]],
        [[1, 3], [2, 2], [3, 1]]
    ];
    turn = p1_sym;
    won = 0;
    currPlayer = 'Player 1';
    document.querySelector('#player').innerHTML = currPlayer + `'s turn`;
}
function togglePlayer() {
    if (turn == p1_sym) {
        turn = p2_sym;
        currPlayer = 'Player 2';
    } else {
        turn = p1_sym;
        currPlayer = 'Player 1';
    }
    document.querySelector('#player').innerHTML = currPlayer + `'s turn`;
}
function checkWinner() {
    winningSequences.forEach(sequence => {
        let count = 0;
        sequence.forEach(position => {
            let i = position[0] - 1;
            let j = position[1] - 1;
            if(turn === moves[i][j]) {
                count = count + 1;                 
            }
        });
        if (count === 3 && won == 0) {
            document.querySelector('#result').innerHTML = currPlayer + ' won!';
            won = 1;
        }
    });
}
function set(params) {
    let index1 = parseInt(params[0]) - 1;
    let index2 = parseInt(params[1]) - 1;
    if (moves[index1][index2] === '') {
        moves[index1][index2] = turn;
        document.querySelector('#block' + params).innerHTML = '<div class="symbol">' + turn + '</div>';
        movesNo = movesNo + 1;
        if(movesNo >= 5) {
            checkWinner();
        }
        togglePlayer(turn);
    } else {
        alert('Invalid Move');
    }
}
function restart() {
    location.reload();
}
let turn, next_turn;
let currPlayer;
let p1_sym;
let p2_sym;
let moves;
let movesNo;
let won;
let winningSequences;
