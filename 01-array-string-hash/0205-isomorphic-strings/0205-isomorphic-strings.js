/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false 

    const hs = {}
    const ht = {}

    for (let i = 0; i < s.length; i++) {
       if((s[i] in hs && hs[s[i]] !== t[i]) 
        || (t[i] in ht && ht[t[i]] !== s[i])
        ) return false
       hs[s[i]] = t[i]
       ht[t[i]] = s[i]
    }

    return true
};