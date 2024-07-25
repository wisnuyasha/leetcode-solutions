## Analysis

My approach to determines if a number is a palindrome or not is to compare the first and the last index incrementally using for loops. The loops stop exacyly in the middle of the integer. I store boolean value in an array and use `.includes()`, and to check if theres any false in item of array.

### Attempt Solution 1
```js
var isPalindrome = function (x) {
  const arr = Array.from(String(x));
  const len = arr.length;
  let checkArr = [];
  for (let i = 0; i < len; i++) {
    if (i - (len - (i + 1)) <= 0) {
      if (arr[i] === arr[len - (i + 1)]) {
        checkArr.push(true);
      } else {
        checkArr.push(false);
      }
    }
  }

  if (checkArr.includes(false)) {
    return false;
  } else return true;
};
```

I realized that we dont need an extra array to store the values. so, I adjusted the code to directly return false if the values are not equal and continue the loop if they are the same. If the loops end without finding any false values, the function returns true.

### Attempt Solution 2
```js
var isPalindrome = function (x) {
  const arr = Array.from(String(x));
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i - (len - (i + 1)) <= 0) {
      if (arr[i] === arr[len - (i + 1)]) {
        continue
      } else {
        return false
      }
    }
  }
  return true
};
```

The function iterates through the array up to half its length, so the time complexity is O(n/2) which simplifies to O(n). The space complexity is O(n) because of the array used to store the value of the input.

## Lesson Learned

1. Avoid Unnecessary Storage : My first approach used so much space complexity because i stored values in an extra array. This is not good for the space efficiency and performance.

2. Optimizing the code : Instead of using an array, i optimized the logic inside the loops by directly returning `false` and continue the true comparation. Additionally, i improved the logic too by stopping the loop once it reaches the halfway point.
