/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;

    function backtrack(x, y, index) {
        // base case: all characters in 'word' have been matched
        // (from word[0] to word[word.length - 1])
        if (index === word.length) return true

        // if indexes is out of the board
        if (x < 0 || y < 0 || x >= m || y >= n ||
            // if didnt match
            board[x][y] !== word[index]
        ) return false

        // mark this cell as visited (marked by "#")
        const temp = board[x][y];
        board[x][y] = '#';

        // explore to up, down, right, left
        const found =
            backtrack(x - 1, y, index + 1) ||
            backtrack(x + 1, y, index + 1) ||
            backtrack(x, y - 1, index + 1) ||
            backtrack(x, y + 1, index + 1);

        // after bfs, clear visited
        board[x][y] = temp; // rollback visited

        return found;
    }

    // starts from first word (word[0])
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                if (backtrack(i, j, 0)) return true;
            }
        }
    }

    return false
};