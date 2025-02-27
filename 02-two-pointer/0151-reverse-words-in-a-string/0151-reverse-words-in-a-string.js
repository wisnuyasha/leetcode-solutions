/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let i = s.length - 1
    let j = i
    let ans = []

    while(j >= 0) {
        if(s[j] !== " " && (s[j-1] == " " || j == 0)) ans.push(s.slice(j, i+1))
        if(s[j] == " " && s[j-1] !==  "") i = j-1
        j--
    }

    return ans.join(" ")
};