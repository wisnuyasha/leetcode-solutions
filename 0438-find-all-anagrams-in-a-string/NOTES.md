## Approach
This problem requires to return the starting indices of all anagrams of `p` in `s`

My first approach was to iterate through `s`, slice a substring of length `p`, sort it, and compare it with the sorted `p`.


## First try

```js
var findAnagrams = function(s, p) {
    let arr = []
    let sortedP = p.split("").sort().join("")

    for(let j = 0; j < s.length - p.length + 1; j++) {
        let x = s.slice(j, p.length+j)
        const a = x.split("").sort().join("")
        if(a == sortedP) arr.push(j)
    }
    return arr
};

```

turns out that this solution has TLE because sorting affects the time complexity, making it O(N\*M*logM) (where N is the length of s and M is the length of p). Sorting inside the loop is inefficient. So, I thought of another approach that utilizes hash tables and sliding window.

the approach is :
- Create two hash tables: one for the frequency of characters in `p` (`hP`), and another for the first `p.length` characters of s (`hSW`).
- Iterate through `s` while comparing both hash tables.
- Maintain a sliding window so that `hSW` always has the same length as `hP`.


## Second try

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let arr = []
    let hP = {}, let hSW = {}

    for(let i = 0; i < p.length; i++) {
        hP[p[i]] = (hP[p[i]] || 0) + 1
    }
    for(let k = 0; k < p.length; k++) {
        hSW[s[k]] = (hSW[s[k]] || 0) + 1
    }

    for(let j = 0; j < s.length - p.length + 1; j++) {
        let flag = true
        for (let key in hP) {
            console.log(key)
            if(hP[key] !== hSW[key]) { 
                flag = false
                break 
            }  
        }
        if(flag) arr.push(j)

        if(hSW[s[j]] > 1) hSW[s[j]] -= 1
        else if(hSW[s[j]] == 1) delete hSW[s[j]] 
        hSW[s[j+p.length]] = (hSW[s[j+p.length]] || 0) + 1
    }
    

    return arr
};
```

this solution is accepted but performed poorly (1824ms / 5%). The reason is the nested loop, making its time complexity O(N * M). 

since sliding window is expected to have O(N) time complexity, I realized that I was still performing an inefficient check (comparing hash tables in a nested loop). To fix this, I needed to track the number of matched character frequencies between `hP` and `hSW`.

so the final soluton is :
- create the `hP` hashtable (same as before)
- Use two pointers (right for expanding the window and left for maintaining window size).
- If `s[right]` is in `p`, update `hSW`, and if the frequency matches, increment `matchCount`.
- If the window size exceeds `p.length`, shrink it from the left.
- If `matchCount` equals the number of unique characters in `p`, store the index.

## Solution

```js
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
```

this solution has O(N) time complexity (iterate once thru the `s` array without any nested loops or sort) and O(1) space complexity (only storing char frequencies (26 letter))

## Lesson Learned

- sliding window is often O(N), but incorrect usage can increase complexity.
- instead of checking full hash tables in nested loops, track matched frequencies with a counter.