## Analysis

This problem requires :
- return the common elements between 2 array (intersection)
- result should be  unique and can be any order
## Thought process

My approach is to :
- count the occurences of elements in the smaller arr (swap if necessary)
- iterate thru the second array & collect elements that appear in the hashmap

### Solution

```js
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) return intersect(nums2, nums1);

    let h = {}
    let arr = []
    
    for(let i = 0; i < nums1.length; i++){
        h[nums1[i]] = (h[nums1[i]] || 0) + 1
    }
        
    for(let j = 0; j < nums2.length; j++){
        if(h[nums2[j]] > 0) {
            arr.push(nums2[j])
            h[nums2[j]] -= 1
        }
    }
    
    return arr
};
```

since the code will always iterate both array, the time complexity is O(n+m) n and m is the lengths of nums1 and nums2. 

it used 1 object and 1 array, and each is depends on the minimal lengths between the arrays. the worst case on the array is store all the elements from the objects so : O(min(n+m))

## Follow up Questions
1. What if the given array is already sorted? How would you optimize your algorithm?

if the arrays are sorted, i think the `two pointer tech` is more efficient because it doesnt require a hash map. the algorithm is to compare the elements from both arrays; if the values are the same store to the result array & if first array is smallest increment the first array index and vice versa.

```js
while (i < nums1.length && j < nums2.length) {
 if (nums1[i] === nums2[j]) {
     result.push(nums1[i]);
     i++;
     j++;
 } else if (nums1[i] < nums2[j]) {
     i++;
 } else {
     j++;
 }
}
```
This is because it leverages the smaller array for efficient lookups and minimizes the space used by the hash map, making it more suitable for handling larger arrays.

2. What if nums1's size is small compared to nums2's size? Which algorithm is better?

`hashmap tech` is generally better because it uses smaller array for quiuk lookups and keeps memory/space usage low, whichs more efficient in larger array

## Lesson Learned
- Comparing algorihm with different scenarios, i learned that the better solutions/algo is depends on the situation/scenarios. we just have to be critical and have a good understand about the trade-offs between different approaches