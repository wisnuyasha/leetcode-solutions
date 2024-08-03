## Analysis

What the problem wants is :
- Find the value that appears only once
- Time complexity `O(N)` & Space complexity `O(1)`

With the hint :
> Think about the XOR (^) operator's property.

I researched and learned about XOR, so its characteristics are :
- A ^ B = B ^ A
- A ^ 0 = A
- A ^ A = 0

So, all we need to do is iterate and XOR every element because it will return the single value since the duplicate (twin) values will cancel out to `0` and with `A ^ 0 = A`, the solution will be the remaining single value.

For example, [4, 1, 2, 1, 2] becomes `4 ^ 1 ^ 2 ^ 1 ^ 2` -> `4 ^ 1 ^ 1 ^ 2 ^ 2`. Using the XOR characteristics `A ^ A = 0`, we get `4 ^ 0 ^ 0` = and the result is `4`.


### Solution
```js
var singleNumber = function(nums) {
    let res = 0
    for(let i = 0; i < nums.length; i++) {
        res ^= nums[i]
    }
    return res
};
```

The time complexity is O(N) (linear time) and the space complexity is O(1) (only constant space).

## Lesson Learned

- XOR
I learned that the XOR operation is powerful because it allows us to find a unique element in an array with linear time and constant space complexity. XOR's properties enable efficient solutions to problems involving pairs and duplicates.
