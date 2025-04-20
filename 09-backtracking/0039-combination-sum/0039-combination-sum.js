/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(start, path, sum) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]);
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
};

// []
// ├── +2 → [2]
// ├── +3 → [3]
// ├── +6 → [6]
// └── +7 → [7]

// [2] (sum = 2)
// ├── +2 → [2,2] (sum = 4)
// │   ├── +2 → [2,2,2] (sum = 6)
// │   │   ├── +2 → [2,2,2,2] (sum = 8) ❌ over → backtrack
// │   │   ├── +3 → [2,2,2,3] (sum = 9) ❌ over → backtrack
// │   │   ├── +6 → ... ❌ over
// │   │   └── +7 → ... ❌ over
// │   ├── +3 → [2,2,3] ✅ (sum = 7) → simpan
// │   ├── +6 → [2,2,6] (sum = 10) ❌
// │   └── +7 → ...
// ├── +3 → [2,3] (sum = 5)
// │   ├── +3 → [2,3,3] (sum = 8) ❌
// │   └── +6 → ...
// ├── +6 → [2,6] (sum = 8) ❌
// └── +7 → [2,7] (sum = 9) ❌

// [3] (sum = 3)
// ├── +3 → [3,3] (sum = 6)
// │   └── +3 → [3,3,3] (sum = 9) ❌
// ├── +6 → [3,6] (sum = 9) ❌
// └── +7 → [3,7] (sum = 10) ❌

// [6] (sum = 6)
// └── +6 → [6,6] (sum = 12) ❌
// └── +7 → [6,7] ❌

// [7] ✅ langsung cocok