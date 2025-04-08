/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let x = matrix.length, y = matrix[0].length
    let l = 0, r = (x * y) - 1

    while(l <= r) {
        let m = Math.floor(((l + r) / 2))
        let mx = Math.floor(m / y), my = m % y
        let mid = matrix[mx][my]

        if(mid == target) return true
        else if(mid > target) r = m - 1
        else l = m + 1
    }

    return false
};