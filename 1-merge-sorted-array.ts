let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

// Alterar array original, sorteando os 2 arrays.

function merge(nums1: number[], m: number, nums2: number[], n: number) {
  let i = m - 1;
  let j = n - 1;
  let lastPos = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[lastPos] = nums1[i];
      i--;
    } else {
      nums1[lastPos] = nums2[j];
      j--;
    }
    lastPos--;
  }
}

merge(nums1, m, nums2, n);

console.log(nums1);
