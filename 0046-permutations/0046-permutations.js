/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];

  var backtrack = (tempArr = []) => {
    if (tempArr.length === nums.length) {
      res.push([...tempArr]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (!tempArr.includes(nums[i])) {
        tempArr.push(nums[i]);
        backtrack(tempArr);
        tempArr.pop();
      }
    }
  };
  
  backtrack();
  return res;
};
