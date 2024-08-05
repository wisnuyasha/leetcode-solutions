/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j = s.length - 1
    let i = 0
    while(i <= j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++
        j--
    }
};