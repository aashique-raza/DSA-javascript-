
// ! word search

var exist = function(board, word) {
    let row = board.length;
    let col = board[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (find(board, i, j, 0, word)) return true;
        }
    }
    return false;
};

function find(board, i, j, idx, word) {
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];

    // out of bounds OR char mismatch OR already visited
    if (
        i < 0 || j < 0 ||
        i >= board.length || j >= board[0].length ||
        board[i][j] !== word[idx]
    ) {
        return false;
    }

    // if last char matches → success
    if (idx === word.length - 1) {
        return true;
    }

    let temp = board[i][j];
    board[i][j] = "$";  // mark visited

    for (let dir of directions) {
        let new_i = i + dir[0];
        let new_j = j + dir[1];

        if (find(board, new_i, new_j, idx + 1, word)) {
            board[i][j] = temp; // restore before returning
            return true;
        }
    }

    board[i][j] = temp; // restore
    return false;
}
