## Approach
this problem requires to reverse the order of words in a given string `s`, ensuring that spaces in the words are ignored.

My approach :
- Utilize two pointers (left and right) to traverse `s` in reverse.
- The logic involves two if statements:
    1. Detect the end of a word:
        - If `s[left]` is a whitespace and `s[left - 1]` is not a whitespace,
        - Move the `right` pointer to `left - 1` (marking the new word start).
    2. Detect the start of a word:
        - If `s[left]` is not a whitespace and `s[left - 1]` is a whitespace (or `left` reaches `0`),
        - Slice the substring using the `left` and `right` pointers and push it into the result array.
    3. Otherwise, simply decrement `left` until reaching `0`.
- Return the joined array as the final reversed sentence.


## Solution

```js
var reverseWords = function(s) {
    let right = s.length - 1
    let left = right
    let ans = []

    while(left >= 0) {
        if(s[left] == " " && s[left-1] !==  " ") right = left-1
        if(s[left] !== " " && (s[left-1] == " " || left == 0)) ans.push(s.slice(left, right+1))
        left--
    }

    return ans.join(" ")
};
```

This solution has O(N) time complexity (iterate thru `s` once) and O(N) space complexity (for the output array)

## Illustration & Dry Run
![Reverse Words in a String](https://github.com/user-attachments/assets/542fbd62-ece0-4a53-88b4-cbbceae626b8)

## Lesson Learned

- practice my skill to solve two pointer problem & checking the boundaries slowly
