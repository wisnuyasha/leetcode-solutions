function twoSum(nums: number[], target: number): number[] {
  let output: number[] = [];
  let f: boolean = false;

  nums.map((num, idx) => {
    if (f) {
      return;
    }
    nums.map((n, i) => {
      if (i === idx || f) return;
      else {
        if (num + n === target) {
          f = true;
          output.push(idx, i);
          return;
        } else {
          f = false;
        }
      }
    });
  });

  return output;
}