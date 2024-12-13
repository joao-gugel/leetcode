function removeDuplicatesTwo(nums: number[]): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[k - 2] === nums[i]) continue;
    nums[k] = nums[i];
    k++;
  }

  return k;
}

console.log(removeDuplicatesTwo([1, 1, 1, 2, 2, 3]));
