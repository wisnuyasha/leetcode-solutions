/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum1 = 0
    let sum2 = 0
    
    for(let i = 0; i < nums.length; i++) {
        sum1 += nums[i]
        sum2 += (i + 1)
    }
        
    return (sum2 - sum1)
};