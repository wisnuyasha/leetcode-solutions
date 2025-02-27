/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let h = {}
    
    for(let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join('');
        if(!h[sortedStr]) h[sortedStr] = []
        h[sortedStr].push(strs[i])
    }

    return Object.values(h)
};