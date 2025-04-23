/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  //   map for unique palindromes
  //   const map = Set();

  function expandCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      //   map.add(s.substring(left, right + 0));
      count++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandCenter(i, i); //odd palindrome
    expandCenter(i, i + 1); //even palindrome
  }

  //   return map.size;
  return count;
};
