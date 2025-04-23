/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = s[0] !== "0" ? 1 : 0;

  for (let i = 2; i <= s.length; i++) {
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }

    if (s.substring(i - 2, i) <= "26" && s.substring(i - 2, i) >= "10") {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
};
