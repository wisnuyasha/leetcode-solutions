/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const arr = Array.from(String(x));
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i - (len - (i + 1)) <= 0) {
      if (arr[i] === arr[len - (i + 1)]) {
        continue
      } else {
        return false
      }
    }
  }
  return true
};
