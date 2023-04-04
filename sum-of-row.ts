function runningSumDave(nums: number[]): number[] {
  console.log("length: ", nums.length);
  for (let i = 1; i < nums.length && nums.length <= 1000; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
}

function runningSum(nums: number[]): number[] {
  let sum = 0;
  return nums.map((val) => (sum += val));
}

function runningSum2(nums: number[]): number[] {
  nums.forEach((n, idx) => {
    nums[idx] = idx != 0 ? nums[idx - 1] + n : n;
  });
  return nums;
}

const nums = [1, 2, 3, 4];
console.log(this.runningSum2(nums));
