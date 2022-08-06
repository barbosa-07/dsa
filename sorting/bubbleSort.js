function bubbleSort(nums) {
  // code goes here
  let swapped = false;
  let count = 0;
  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1 - count; i++) {
      if (nums[i] > nums[i + 1]) {
        // swap
        let temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
        // maake swapped true
        swapped = true;
      }
    }
    count += 1;
  } while (swapped);
  return nums;
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(bubbleSort(nums));
