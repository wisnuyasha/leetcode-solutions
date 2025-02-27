/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    let h = {}

    for (let i = 0; i < s.length; i++) {
        h[s[i]] = (h[s[i]] || 0) + 1;
    }
    
      for (let i = 0; i < t.length; i++) {
        if (!h[t[i]]) return false;
        h[t[i]]--;
    }
    
    return true
};