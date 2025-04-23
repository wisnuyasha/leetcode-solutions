/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  if (n <= 1) return s;

  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(false));
  let start = 0,
    maxLen = 1;

  // Single characters are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // dp[i][j] = true if s[i..j] is a palindrome
  //      j
  // [1][0][0][0]
  //    [1][1][0]
  // i     [1][0]
  //          [1]

  // check all substring of length >= 2
  // iterate flow :
  // (0,1 -> 1,2 -> 2,3 -> 3,4) len 2
  // (0,2 -> 1,3 -> 2,4) len 3
  // (0,3 -> 1,4) len 4
  // (0,4) len 5 (last)

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      // if left/right boundary is same
      if (s[i] === s[j]) {
        // if still 2 words (true) / check inside the word
        if (len === 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true;
          if (len > maxLen) {
            start = i;
            maxLen = len;
          }
        }
      }
    }
  }

  return s.substring(start, start + maxLen);
};
