/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [1, 2];

  if (n <= 1) return dp[n - 1];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};


// no array
// if (n <= 2) return n;

// let a = 1, b = 2;

// for (let i = 3; i <= n; i++) {
//     let next = a + b;
//     a = b;
//     b = next;
// }

// return b
// };