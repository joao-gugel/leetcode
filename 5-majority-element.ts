// It's not the best solution, but it works!!

function majorityElement(nums: number[]) {
  let majorityNumbers: { [T: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (majorityNumbers[curr]) majorityNumbers[curr] += 1;
    else majorityNumbers[curr] = 1;
  }

  let majorityNum: number = 0;
  let mostAppearedNumberTimes: number = 0;

  const numbersPossibilities = Object.keys(majorityNumbers);

  for (let number of numbersPossibilities) {
    const appearedTimes = majorityNumbers[number];

    if (appearedTimes > mostAppearedNumberTimes) {
      mostAppearedNumberTimes = appearedTimes;
      majorityNum = +number;
    }
  }

  return majorityNum;
}

console.log(majorityElement([3, 2, 3]));
