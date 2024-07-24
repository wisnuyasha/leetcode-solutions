## Analysis

My first approach is to use brute force with nested loops, checking if the sum of any two numbers is equal to the target and returning their indices. This is not an ideal solution because the time complexity is O(N²).

### Solution 1 : Brute Force
```js
function twoSum(nums: number[], target: number): number[] {
  let output: number[] = [];

  nums.map((num, idx) => {
    if (output.length !== 0) return;
    nums.map((n, i) => {
        if (i !== idx && num + n === target) {
        output.push(idx, i);
        return;
      }
    });
  });

  return output;
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

## Lesson Learned

- Time & Space Complexity :
Time complexity is the time it takes to run a function relative to the input size. Usually, it's affected by loops, recursive, or sorting. Space complexity is the total memory used by the function. These two complexities written on Big O notation

- Hashmap :
Hashmap is a data structure similar to an array, but it can store values with keys or indexes as we define them uniquely. Hashmap offers more advantages over iterating through a large list of an array.