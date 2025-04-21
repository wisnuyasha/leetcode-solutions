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
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(i + 1, path, candidates[i] + sum);
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return res;
};
