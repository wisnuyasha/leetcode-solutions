/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // base case
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // house robber solution
  function robberyBob(arr) {
    const dp = [];
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
    }

    return dp[arr.length - 1];
  }

  return Math.max(
    // skip last index
    robberyBob(nums.slice(0, nums.length - 1)),
    // skip first index
    robberyBob(nums.slice(1))
  );
};
