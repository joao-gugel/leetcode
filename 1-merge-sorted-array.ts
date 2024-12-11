let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

// Alterar array original, sorteando os 2 arrays.

function merge(nums1: number[], m: number, nums2: number[], n: number) {
  const filteredNums1 = nums1.filter((num) => num);
  const filteredNums2 = nums2.filter((num) => num);

  const newArr = [...filteredNums1, ...filteredNums2].sort((a, b) => a - b);

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = newArr[i];
  }
}

merge(nums1, m, nums2, n);
