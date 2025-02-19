## Analysis

What the problem wants is :
- To find the maximal (slowest) time in the array `keyTime[i][1]` at the second index = `y`, it can be determined by substracting the current and previous `y`.
- To convert the `keytimes[i][0]` on first index, from an integer to an alphabet

My first approach is to store the substraction between current and previous values in an array, and search the index of the largest item on the array. Then, i use that index to convert the value to anx alphabet. It passed all the test case, but..

### Attempt Solution 1
```js
function slowestKey(keyTimes) {
    const arr = [];
    const char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let biggestIndex = 0;

    for(let i = 0; i < keyTimes.length; i++) {
        let currArr = keyTimes[i];

        if(i > 0) {
            let prevArr = keyTimes[i - 1]
            let total = currArr[1] - prevArr[1]
            arr.push(total)
        } else {
            arr.push(currArr[1])
        }
    }

    let max = arr[0]
    for(let i = 0; i < keyTimes.length; i++) {
        if(i > 0 && arr[i] > max) {
            max = arr[i]
            biggestIndex = i
        }
    }

    let ans = keyTimes[biggestIndex]

    return char[ans[0]]
}
```

i realized that theres no need to add extra array for this. it not efficient because it uses extra storage (array) and extra time to loop for seaching the largest value. So, in the first loop, i added the logic to compare the largest value, and store the current (largest) index to `biggestIndex`. so that we get the largest index directly.

### Attempt Solution 2
```js
function slowestKey(keyTimes) {
    const char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let biggestIndex = 0;

    for(let i = 0; i < keyTimes.length; i++) {
        if(i > 0) {
            let total = keyTimes[i][1] - keyTimes[i - 1][1]

            if(total > currMax) {
                currMax = total
                biggestIndex = i
            }
        } else { 
            currMax = keyTimes[0][1]
        }
    }

    return char[keyTimes[biggestIndex][0]]
}
```

This function has a time complexity O(n) because it has one loops to iterate through `keyTimes` and a space complexity of O(1) because theres no storage that scales with the input.

## Lesson Learned

1. Array of array
I learned how to access elements in an array of array (example: `arr = [[1,2][3,4]]`) with `arr[x][y]`.

2. Unecessaary storage and logic
I learned that in many cases, we dont need extra spaces to store some values. For example, in this problem, i initially stored the values in an array and had to do one more loop, which was really unecessary to find the largest value. this is not good for either time complexity (which would be O(2N)) or space complexity (which would be O(N)).