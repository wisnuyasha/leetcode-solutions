## Analysis
What the problem wants is :
- Find value that contains more than one

I used hashmap to store the element to the key and the count of the element to the value of the key. and simply check if the value is more than equal 1 or if not increment the value.

### Solution 1 : Hashmap
```js
var containsDuplicate = function(nums) {
    let h = {}
    for(let i = 0; i <= nums.length; i++) {
        if(h[nums[i]] >= 1){
            return true
        } else {
            if (nums[i] in h) {
                h[nums[i]] += 1 
            } else {
                h[nums[i]] = 1                
            }
        }
    }
    return false
};
```

The time complexity is O(N) (linear time) and the space complexity is O(N) (because of the hashmap)

## Lesson Learned

- Hashmap
I become used to it because the previous problem is using the hashmap, i solved this problem so fast because i know the method.