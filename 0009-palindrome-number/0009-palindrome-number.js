/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let div = 1
  while (div * 10 <= x) {
    div *= 10
  }

  while (x) {
    if (Math.floor(x / div) !== x % 10) return false;
    x = Math.floor((x % div) / 10)
    div /= 100
  }

  return true
}
