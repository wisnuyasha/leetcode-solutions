function twoSum(nums: number[], target: number): number[] {
  let output: number[] = [];
  let f: boolean = false;

  nums.map((num, idx) => {
    if (f) return;
    nums.map((n, i) => {
      if (i === idx || f) return;
      if (num + n === target) {
        f = true;
        output.push(idx, i);
        return;
      }
    });
  });

  return output;
}
