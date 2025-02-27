function twoSum(nums: number[], target: number): number[] {
    const h: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const c = target - nums[i];
        if (c in h) {
            return [h[c], i];
        }
        h[nums[i]] = i;
    }
    return [];
}