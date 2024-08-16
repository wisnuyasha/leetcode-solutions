/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sString = s.split("").sort().join("")
    const tString = t.split("").sort().join("")
    
    if(sString.length !== tString.length) return false
    
    for(let i = 0; i < sString.length; i++) {
        if(sString.charAt(i) !== tString.charAt(i)) return false
    }
    
    return true
};