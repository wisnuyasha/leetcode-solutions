/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length == 0) return true
                
    let i = 0
    let j = s.length - 1
    
    while (i <= j) {
        //         
        if (!/[a-zA-Z0-9]/.test(s[i])) {
            i++;
        } else if (!/[a-zA-Z0-9]/.test(s[j])) {
            j--;
        } else {
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
    }
    
    return true
};