/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0, r = nums.length - 1

    if (nums[l] < nums[r]) return nums[l]

    while (l < r) {
        let m = Math.floor((l + r) / 2)

        if (nums[m] < nums[r]) r = m
        else l = m + 1
    }

    return nums[l]
};