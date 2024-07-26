/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let h = {}
    for(let i = 0; i <= nums.length; i++) {
        if(h[nums[i]] >= 1){
            return true
        } else {
            if (nums[i] in h) {
                h[nums[i]] += 1 
            } else {
                h[nums[i]] = 1                
            }
        }
    }
    return false
};