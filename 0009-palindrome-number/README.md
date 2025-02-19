## Analysis

My approach to determines if a number is a palindrome or not is to compare the first and the last index incrementally using for loops. The loops stop exactly in the middle of the integer. I store boolean value in an array and use `.includes()`, and to check if theres any false in item of array.

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
  const str = String(x);
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    if(arr[i] !== arr[len - i - 1]) {
      return false
    }
  }
  return true
}
```

The function iterates through the array up to half its length, so the time complexity is O(n/2) which simplifies to O(n). The space complexity is O(n) because of the array used to store the value of the input.


### Follow-up Solution
```js
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let div = 1
  while (div * 10 <= x) {
    div *= 10
  }

  while (x) {
    if (Math.floor(x / div) !== x % 10) return false;
    x = Math.floor((x % div) / 10)
    div /= 100
  }

  return true
}
```

This approach mainly uses modulo and division. The key logic is to extract the front and back digits, then shrink the number by removing them using modulo and division. It has a better time complexity of O(log N) because the number of digits decreases by two in each iteration, rather than iterating through all the digits one by one.

## Illustration & Dry Run
![Palindrome Number](https://github.com/user-attachments/assets/2b75b6df-76c4-4a56-bbe1-1a83650388ae)

## Lesson Learned

1. Avoid Unnecessary Storage : My first approach used so much space complexity because i stored values in an extra array. This is not good for the space efficiency and performance.

2. Optimizing the code : Instead of using an array, i optimized the logic inside the loops by directly returning `false` and continue the true comparation. Additionally, i improved the logic too by stopping the loop once it reaches the halfway point.

3. Understanding how to manipulate numbers without converting them to strings improves algorithm efficiency.
