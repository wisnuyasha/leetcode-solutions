/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const dpMax = [];
  const dpMin = [];

  dpMax[0] = nums[0];
  dpMin[0] = nums[0];
  res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(
      nums[i],
      nums[i] * dpMax[i - 1],
      nums[i] * dpMin[i - 1]
    );
    dpMin[i] = Math.min(
      nums[i],
      nums[i] * dpMax[i - 1],
      nums[i] * dpMin[i - 1]
    );
    res = Math.max(res, dpMax[i]);
  }

  return res;
};
