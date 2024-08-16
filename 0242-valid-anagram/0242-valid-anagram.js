/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    let h = {}
    
//     const sString = s.split("").sort().join("")
//     const tString = t.split("").sort().join("")
        
//     for(let i = 0; i < sString.length; i++) {
//         if(sString.charAt(i) !== tString.charAt(i)) return false
//     }
    
    
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) in h ) {
            h[s.charAt(i)] += 1
        } else {
            h[s.charAt(i)] = 1
        }
    }
        
    for(let i = 0; i < s.length; i++) {
        if(t.charAt(i) in h) {
            if(h[t.charAt(i)] == 0) {
                return false
            }
            h[t.charAt(i)] -= 1
        } else {
            return false
        }
    }
    
    return true
};