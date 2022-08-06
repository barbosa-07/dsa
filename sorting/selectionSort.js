function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    // swap
    let temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }

  return nums;
}

console.log(selectionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
