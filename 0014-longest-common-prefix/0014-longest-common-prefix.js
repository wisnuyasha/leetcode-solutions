/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ""
    
    let ans = ""
    for(let i = 0; i < strs[0].length; i++){
        let j = 1
        let char = strs[0].charAt(i);
        while(j < strs.length){
            if(i >= strs[j].length || strs[j].charAt(i) !== char) {
                return ans
            }
            j++
        }
        ans += char
    }
     
    return ans
};