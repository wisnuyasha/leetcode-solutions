
## Approach
this problem requires returning the index of the searched target in a 2D matrix where each row and column is sorted

it looks a bit confusing in first sight, but after staring at it for 15 minutes straight i found the keys. treat the 2D matrix as a 1D sorted array so that we can use binary search method to this. using `modulo(%)` and `divide(/)`, it can be reached. for example :

```js
matrix2D = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
//change to 1D index
matrix1D = [[0,1,2,3], [4,5,6,7], [8,9,10,11]]
```

approach :
- terms :
    - height (x) matrix length
    - width (y) columns number
- use left and right pointers to define the search range (from first to last element in the matrix, treated as 1D)
- loop while left is less than or equal to right
- determine the middle index between left and right
    - to get the row index, divide (/) the mid index by width
    - to get the column index, take the remainder (%) of mid divided by width
- compare the value at that 2D position with the target
    - if equal, return true
    - if smaller than target, move the left pointer forward
    - if greater than target, move the right pointer backward


## Solution

```js
var searchMatrix = function (matrix, target) {
    let x = matrix.length, y = matrix[0].length
    let l = 0, r = (x * y) - 1

    while(l <= r) {
        let m = Math.floor(((l + r) / 2))
        let mx = Math.floor(m / y), my = m % y
        let mid = matrix[mx][my]

        if(mid == target) return true
        else if(mid > target) r = m - 1
        else l = m + 1
    }

    return false
};
```

time complexity O(log(m*n)) -> halves every total width and height combines
space complexity O(1) -> no extra spaces


## Illustration & Dry Run


## Lesson Learned
- learned how to convert 2D matrix search into 1D binary search using modulo and divide