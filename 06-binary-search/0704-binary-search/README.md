## Approach
This problem requires returning the index of the searched target using binary search.

Binary search approach (iterative) :
- use left and right pointer
- loop while left is less than or equal to right
- determine the mid value using `left+right/2`
    - if mid value equals the target, return the mid index
    - if mid is smaller than the target, move the left pointer to `m + 1`
    - if mid is greater than the target, move the right pointer to `m - 1`

## Iterative Solution

```js
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;

    while(l <= r) {
        let m = Math.floor((l + r)/2)

        if(nums[m] === target) return m
        else if(nums[m] < target) l = m + 1
        else r = m - 1
    }

    return -1
};
```

time complexity O(log n) -> halves the search space each loops
space complexity O(n) -> no extra memory, only few variables


## Recursive Solution

how recursive solution works :
- create a recursion function that accepts the `nums` array, `left`, `right`, and `target`
- base case -> if left is greater than right, return -1
- determine the mid value using `left+right/2`
    - if mid value equals the target, return the mid index
    - if mid is smaller than the target, call the recursive function again with left = m + 1
    - if mid is greater than the target, call the recursive function again with right = m - 1

```js
var search = function(nums, target) {
    const recursion = (nums, l, r, target) => {
        if (l > r) return -1;
    
        let m = Math.floor((l + r) / 2);

        if (nums[m] === target) return m;
        else if (nums[m] < target) return recursion(nums, m + 1, r, target);
        else return recursion(nums, l, m - 1, target);
    }

    return recursion(nums, 0, nums.length - 1, target);
};
```

time complexity O(log n) -> halves the search space each call
space complexity O(log n) -> uses stack space for recursive calls

## Edge cases
- rounding down midpoint
`Math.floor((l + r) / 2);`, ensures we don’t skip elements and safely check all cases.

- loop condition
`while (l <= r)`, allows checking the last element. Using `<` may skip it.


## Illustration & Dry Run
![Binary Search](https://github.com/user-attachments/assets/d27e2e2f-5a72-4106-978b-a4e39db1418b)

## Lesson Learned
- learned 2 main binary search approach (iterative & recursive)
- recursive offers an elegant code but has extra space
