var findAnagrams = function(s, p) {
    let arr = [];
    let hP = {}, hSW = {};

    for (let i = 0; i < p.length; i++) {
        hP[p[i]] = (hP[p[i]] || 0) + 1;
    }

    let matchCount = 0; 
    let left = 0, right = 0;
    
    while (right < s.length) {
        if(s[right] in hP) {
            hSW[s[right]] = (hSW[s[right]] || 0) + 1;
            if(hSW[s[right]] == hP[s[right]]) matchCount++
        }

        if(right - left + 1 > p.length) {
            if(s[left] in hP) {
                if(hSW[s[left]] == hP[s[left]]) matchCount--
                hSW[s[left]]--
            }
            left++
        }

        if(matchCount == Object.keys(hP).length) arr.push(left)

        right++
    }
    
    return arr;
};