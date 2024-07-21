/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let arr = s.split("");
  arr.reverse();
  let h = {};

  arr.map((s, i) => {
    if (s === "I") {
      if (h[i - 1] === 5) {
        h[i] = 4;
        h[i - 1] = 0;
      } else if (h[i - 1] === 10) {
        h[i] = 9;
        h[i - 1] = 0;
      } else {
        h[i] = 1;
      }
    } else if (s === "V") {
      h[i] = 5;
    } else if (s === "X") {
      if (h[i - 1] === 50) {
        h[i] = 40;
        h[i - 1] = 0;
      } else if (h[i - 1] === 100) {
        h[i] = 90;
        h[i - 1] = 0;
      } else {
        h[i] = 10;
      }
    } else if (s === "L") {
      h[i] = 50;
    } else if (s === "C") {
      if (h[i - 1] === 500) {
        h[i] = 400;
        h[i - 1] = 0;
      } else if (h[i - 1] === 1000) {
        h[i] = 900;
        h[i - 1] = 0;
      } else {
        h[i] = 100;
      }
    } else if (s === "D") {
      h[i] = 500;
    } else {
      h[i] = 1000;
    }
  });

  return Object.values(h).reduce((acc, cur) => acc + cur);
};