## Approach
This problem requires finding the largest possible area formed by the heights (height[i]) and the width (i).

My approach :
- use two pointer, starting from left (`height[0]`) and other from the right (`height[length - 1]`)
- calculate area (right-left) * (min(height[left], height[right]))
- continously update max area found & move the pointer with smaller height

## Solution
```js
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1

    let biggestVolume = 0

    while(left < right) {
        let vol = (right - left) * (Math.min(height[left], height[right]))
        if(biggestVolume < vol) {
            biggestVolume = vol
        }
        if(height[left] < height[right]) left++
        else right--
    }

    return biggestVolume
};
```

This solution has O(N) time complexity (traverse the array once) and O(1) space complexity (`biggestVol` is independent from input size)

## Illustration & Dry Run
![Container With Most Water](https://github.com/user-attachments/assets/a57f8892-8dc9-49a7-957a-338b85baff78)

## Lesson Learned

- improving my problem solving using two-pointer tech.
