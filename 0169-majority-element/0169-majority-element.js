/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let h = {}
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in h) {
            h[nums[i]] += 1 
            if(h[nums[i]] >= (nums.length / 2)) {
                return nums[i]
            }
        } else {
            h[nums[i]] = 1
        }
    }
    
    return nums[0]
};