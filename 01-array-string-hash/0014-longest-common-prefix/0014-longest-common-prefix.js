/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ""
    
    let ans = ""
    strs.sort()
    
    const fs = strs[0];
    const ls = strs[strs.length - 1];
    
    for(let i = 0; i < strs[0].length; i++) {
        if(fs.charAt(i) == ls.charAt(i)) {
           ans += strs[0].charAt(i)
        } else {
            return ans
        }
    } 
     
    return ans
};