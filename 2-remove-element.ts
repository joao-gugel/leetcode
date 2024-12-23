function removeElement(nums: number[], val: number) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }

  // The judge will only look for the valid values
  return j;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
