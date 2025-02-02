## Analysis

My first approach is to use brute force with nested loops, checking if the sum of any two numbers is equal to the target and returning their indices. This is not an ideal solution because the time complexity is O(N²).

### Solution 1 : Brute Force
```js
function twoSum(nums: number[], target: number): number[] {

  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(i === j) continue
      if(nums[i] + nums[j] === target) return [i, j]
    }
  }
}
```

With the hint, 

> The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search? 

I realized that it can be done with a more effective approach. So i used the hashmap (object in JS) to store the `x` of `target - y` with the index (`i`), `y` is the current iteration number (`nums[i]`). This way, if `target - y` is available in the hashmap, it will return the two of indexes. This approach has a time complexity of O(N) because it requires only a single loop

### Solution 2 : Hashmap
```js
function twoSum(nums: number[], target: number): number[] {
    const h: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const c = target - nums[i];
        if (c in h) {
            return [h[c], i];
        }
        h[nums[i]] = i;
    }
    return [];
}
```

### Bonus Solution : Sort + Two Pointer

```js
function twoSum(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b)

    let right = 0
    let left = nums.length - 1

    while(left < right) {
      let sum = nums[left] + nums[right]
      if(sum == target) return [nums[left], nums[right]]
      else if(sum < target) left++
      else if (sum > target) right++
    }

    return [];
}
```

If the problem doesn't require an "index" and only asks for the values, then sort + two-pointer can be one of the solutions. After sorting the array, we can apply the two-pointer approach: if the sum of the left and right elements is smaller than the target, move the left pointer to the right; if it's larger, move the right pointer to the left. If the sum equals the target, then that's the answer!

it has O(NlogN) space complexity and O(1) space complexity, making it more space-efficient than the previous hashmap solution, which requires O(N) space.

## Lesson Learned

- Time & Space Complexity :
Time complexity is the time it takes to run a function relative to the input size. Usually, it's affected by loops, recursive, or sorting. Space complexity is the total memory used by the function. These two complexities written on Big O notation

- Hashmap :
Hashmap is a data structure similar to an array, but it can store values with keys or indexes as we define them uniquely. Hashmap offers more advantages over iterating through a large list of an array.