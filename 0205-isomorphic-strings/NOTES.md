## Approach
This problem requires checking whether the string `s` can be transformed into `t` by replacing each char uniquely while maintaning the order

## First Try

At first , i thought that counting occurence of characters in `s` or `t` would be enough solve this problem. the idea is that if the frequency distributions of `s` and `t` didnt match, the strings could not be isomorphic.

```js
var isIsomorphic = function(s, t) {
    const hs = {}
    const ht = {}
    let diff = 0

    for (let i = 0; i < s.length; i++) {
        if(s[i] in hs) hs[s[i]] += 1
        else {
            hs[s[i]] = 1
            diff++
        }
    }

    for(let j = 0; j < t.length; j++) {
        if(t[j] in ht) ht[t[j]] += 1
        else {
            ht[t[j]] = 1
            diff--
        }
    }

    if(diff == 0) return true
    else return false
};
```

However, `s="bbbaaaba"` & `t="aaabbbba"` didnt pass and `36/46` testcases passed. the issue with this approach is that frequency alone is not enough to ensure one-to-one character mapping.


After a while, i just realized the key is 
>every char has only one unique pair, `s` must map to exactly one character in `t`(vice versa)

to apply this, we need two hashmap, why 2 ? not 1 hashmap ? take a look on this failure cases if we have 1 hashmap :

`s = "ab"` &nbsp;&nbsp; `t = "cc"`  
`a -> c` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `c -> a`  
`b -> c` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `c -> b` x (conflict)

if we have just one hashmap from `s -> t`, we might miss cases where multiple char in `s` map to the same char in `t`.


here's the key approach
- iterate thru `s` / `t`    
    - check if char of `s` is already exists in hashtable, check whether `h[s]` matches the char in `t` and vice versa for `t -> s`. 
    - if char from `s` or `t` is not on hashtable, then store the mapping

## Solution

```js
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
```

This solution has O(N) time complexity (traverse the length of `s` or `t` once) and O(n) space complexity (hashmap of `s` and `t` that has the same length)


## Lesson Learned

- Two hashmaps are necessary to ensure unique bidirectional character mapping.
- Understanding constraints is key, focusing on mapping instead of counting solved the issue.
- Two hashmaps are necessary to ensure unique bidirectional character mapping.

 