/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let h = {}
    
    for(let i = 0; i < s.length; i++) {
        h[s[i]] = (h[s[i]] || 0) + 1
    }
    
    for(let j = 0; j < s.length; j++) {
        if(h[s[j]] == 1) {
            return j
        }
    }
    
    return -1
};

