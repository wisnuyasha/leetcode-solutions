/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};

// if (n === 0) return 0;
// if (n === 1) return 1;

// let a = 0;
// let b = 1;

// for (let i = 2; i <= n; i++) {
//   let next = a + b;
//   a = b;
//   b = next;
// }

// return b;
