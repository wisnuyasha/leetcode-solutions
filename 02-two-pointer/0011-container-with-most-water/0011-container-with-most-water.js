/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1

    let biggestVolume = 0

    while(left < right) {
        let vol = (right - left) * (Math.min(height[left], height[right]))
        if(biggestVolume < vol) {
            biggestVolume = vol
        }
        if(height[left] < height[right]) left++
        else right--
    }

    return biggestVolume
};