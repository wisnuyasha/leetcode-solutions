## Approach
This problem requires finding two indices `i1`, `i2` that `numbers[i1]` + `numbers[i2]` that equals to `target`

My approach :
- use two pointer, starting from left (`numbers[0]`) and other from the right (`numbers[length - 1]`)
- calculate the sum of two pointers and adjust them :
    - if sum is lower than target move left pointer forward
    - if sum is bigger than target move right pointer backward
- return the indices when sum equal to target

## Solution
```js
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1

    while(left < right) {
      let sum = numbers[left] + numbers[right]
      if(sum == target) return [left+1, right+1]
      else if(sum < target) left++
      else if (sum > target) right--
    }
};
```

This solution has O(N) time complexity (traverse the array once with two pointer) and O(1) space complexity (no extra space used)

## Illustration & Dry Run
![Two Sum II](https://github.com/user-attachments/assets/9fc35099-f363-4163-a2c5-1fed3ec79de7)

## Lesson Learned
- improving my problem solving using two-pointer tech.
