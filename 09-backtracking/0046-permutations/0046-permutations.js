/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []

    function backtrack(path = []) {
        if(path.length == nums.length) {
            res.push([...path])
            return
        }

        if(path.length > nums.length) return
        
        for(let i = 0; i < nums.length; i++) {
            if(!path.includes(nums[i])){
                path.push(nums[i])
                backtrack(path)
                path.pop()
            }
        }
    }

    backtrack()
    return res;
};