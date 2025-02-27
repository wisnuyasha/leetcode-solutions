/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
//     let h = {}
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] in h) {
//             h[nums[i]] += 1 
//             if(h[nums[i]] >= (nums.length / 2)) {
//                 return nums[i]
//             }
//         } else {
//             h[nums[i]] = 1
//         }
//     }
    
//     return nums[0]
    
    let candidate = 0;
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(count === 0) {
            candidate = nums[i]
        }
        count += (nums[i] === candidate) ? 1 : -1;
    }
    
    return candidate
};