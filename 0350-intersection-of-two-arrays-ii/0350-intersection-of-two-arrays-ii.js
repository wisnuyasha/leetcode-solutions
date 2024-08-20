/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) return intersect(nums2, nums1);

    let h = {}
    let arr = []
    
    for(let i = 0; i < nums1.length; i++){
        h[nums1[i]] = (h[nums1[i]] || 0) + 1
    }
        
    for(let j = 0; j < nums2.length; j++){
        if(h[nums2[j]] > 0) {
            arr.push(nums2[j])
            h[nums2[j]] -= 1
        }
    }
    
    return arr
};