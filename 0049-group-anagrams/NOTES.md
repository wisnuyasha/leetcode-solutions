## Approach
This problem requires to group the strings that has the same anagrams.

My approach :
1. Sorting each word:
    - Since anagrams contain the same letters in different orders, sorting a word gives a unique key for all its anagrams.
    - For example, "eat", "tea", and "ate" all become "aet" after sorting.
2. Using a hash table
    - Store words in a hashmap where the sorted word is the key.
    - All anagrams will be grouped under the same key.

## Solution

```js
var groupAnagrams = function(strs) {
    let h = {}
    
    for(let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join('');

        if(!h[sortedStr]) h[sortedStr] = []
        h[sortedStr].push(strs[i])
    }

    return Object.values(h)
};
```

this solution has O(N) time complexity (N*MlogM) (iterate over `strs` and sorting each word (`strs[i]`)) and O(N\*M) space complexity (storing `strs` & each hash's key takes `strs[i]` longest word)

i found another unique solution, the idea is :
- Instead of sorting, every word is represented as a character frequency array of size 26 (since there are only 26 alphabet).
- Count the frequency of each character in O(M) and use this frequency array as a key to store anagrams in a hash table.

## Bonus Solution 

```js
var groupAnagrams = function(strs) {
    let h = {}

    for(let i = 0; i < strs.length; i++) {
        let freqArr = new Array(26).fill(0);

        for(let j = 0; j < strs[i].length; j++) {
            freqArr[strs[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = freqArr.join(',');

        if(!h[key]) h[key] = []
        h[key].push(strs[i])
    }

    return Object.values(h);
};

```

so it will produce fixed-length array (26) to represent characters frequency :

```
[
  1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0
]
```

each number visualize frequencies of the alphabet, in above example is `a:1` `e:1` `t:1`. it solves the sort problem, every anagram will be captured because we have frequencies of the string


## Lesson Learned

- hashmaps efficiently group anagrams, while sorting provides a simpler approach but adds unnecessary O(M log M) complexity.
- using a character frequency array is more efficient (O(M) per word) when dealing with fixed character sets like `a-z`.