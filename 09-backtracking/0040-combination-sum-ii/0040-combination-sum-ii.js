/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort();

  function backtrack(start, path, sum) {
    if (sum === target) {
      res.push([...path]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      // skip duplicate elements at the same recursion level
      // - i > start: ensures we're not skipping the first occurrence
      // - candidates[i] === candidates[i - 1]: detects consecutive duplicates
      // prevents generating duplicate combinations like [1,2,2] more than once
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      // move to next index; each number can be used only once
      backtrack(i + 1, path, candidates[i] + sum);
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return res;
};
