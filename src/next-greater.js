// #496

var nextGreaterElement = function(findNums, nums) {
  return findNums.map(num => {
    const index = nums.indexOf(num);
    if (index === -1) return index;

    for (let i = index; i < nums.length; i++) {
      if (nums[i] > num) return nums[i];
    }
    return -1;
  })
};

const res = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
console.log(res);