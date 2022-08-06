function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] < nums[j]) {
        // swap
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      } else {
        break;
      }
    }
  }
  console.log(nums);
  return nums;
}

console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
