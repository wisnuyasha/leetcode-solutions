/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0
    
    for(let i = 0; i < nums.length; i++) {
        let currNum = nums[i]
        if(nums[i] !== 0) {
            if(i !== j) {
                nums[i] = nums[j]
                nums[j] = currNum
            }
            j++
        }
    }
    
    return nums
};