## Analysis

What the problem wants is :
- Find the majority element that appears more than 50% of the time.

My first attempt was to store the values in a hashmap, where the elements would be the keys, and their counts would be the values. Then, check if any value in the hashmap exceeds half the length of the array.


### Attempt Solution 1 : Hashmap
```js
var majorityElement = function(nums) {
    let h = {}
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in h) {
            h[nums[i]] += 1 
            if(h[nums[i]] >= (nums.length / 2)) {
                return nums[i]
            }
        } else {
            h[nums[i]] = 1
        }
    }
    
    return nums[0]
};
```

However, there's a follow-up question :
> Could you solve the problem in linear time and in O(1) space?

It cant be solved by hashmap because the space complexity is `O(N)`. So, I looked for a better solution in the discussions and found the Boyer-Moore Majority Voting algorithm. It took me some time to understand why this algorithm works well for this problem.

The Boyer-Moore algorithm uses two main variables `candidate` and `count`. The `candidate` holds a value from the array, and `count` keeps track of how many times the `candidate` appears. During iteration, `count` checks if the current value equals the `candidate`. If they are the same, `count` increases by 1, if not, it decreases by 1. When `count` is 0, the `candidate` is replaced with the current value.

What confused me initially was what if the candidate ends up being the wrong value? But after understanding the algorithm and the problem, I realized that the candidate will ALWAYS return the majority value because the majority value will always exist. For example, in `[2, 1, 2]` and `[2, 1, 2, 2, 1]`, the candidate will ALWAYS be 2 due to the problem's constraints.

### Attempt Solution 2 : Boyer-Moore Majority Voting
```js
var majorityElement = function(nums) {
    let candidate = 0;
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(count === 0) {
            candidate = nums[i]
        }
        count += (nums[i] === candidate) ? 1 : -1;
    }
    
    return candidate
};
```

With this second attempt, the time complexity is O(N) (linear time) and the space complexity is O(1) (no hashmap & no variable dependent on input).

## Lesson Learned

- Boyer-Moore Majority Voting :
I learned a new algorithm that improved space complexity to O(1). I also learned to pay attention to small details in the problem statement, as they might provide clues to answer the problem more efficiently.