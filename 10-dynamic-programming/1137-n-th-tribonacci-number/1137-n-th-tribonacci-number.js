/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let dp = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};


// if (n === 0) return 0;
// if (n === 1) return 1;
// if (n === 2) return 1;

// let a = 0;
// let b = 1;
// let c = 1;

// for (let i = 2; i <= n; i++) {
//   let next = a + b + c;
//   a = b;
//   b = c
//   c = next;
// }

// return c;