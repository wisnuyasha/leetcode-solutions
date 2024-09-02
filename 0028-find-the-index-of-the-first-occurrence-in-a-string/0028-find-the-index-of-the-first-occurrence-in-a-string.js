/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length < needle.length) return -1
    
    let k = 0
    let firstIndex = 0
    
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] == needle[0]) {
            k = i
            firstIndex = i
            for(let j = 0; j <= needle.length; j++){
                if(j == needle.length) {
                    return firstIndex
                } else if(haystack[k] != needle[j]) {
                    break
                } else {
                    k++
                }
            }
        }
    } 
        
    return -1
};