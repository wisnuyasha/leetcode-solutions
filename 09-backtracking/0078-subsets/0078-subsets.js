/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  function backtrack(start, path = []) {
    res.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return res;
};

// Level 0: []
//          ├── +1 → [1]
//          │     ├── +2 → [1,2]
//          │     │     ├── +3 → [1,2,3]
//          │     │     └── backtrack, pop 3 → [1,2]
//          │     └── +3 → [1,3]
//          │           └── backtrack, pop 3 → [1]
//          ├── backtrack, pop 2 → [1]
//          └── backtrack, pop 1 → []
//          ├── +2 → [2]
//          │     ├── +3 → [2,3]
//          │     └── backtrack
//          └── +3 → [3]
