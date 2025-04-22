/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = [0, 0];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp.pop();
};

// let a = 0, b = 0
// for (let i = 2; i <= cost.length; i++) {
//     let next = Math.min(b + cost[i - 1], a + cost[i - 2])
//     a = b // as dp[i-2]
//     // as dp[i-1] and dp[i] himself
//     b = next
// }
// return next
