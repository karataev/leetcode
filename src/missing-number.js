// 268

var missingNumber = function(nums) {
  let fullSum = nums.length;
  let arrSum = 0;
  for (let i = 0; i < nums.length; i++) {
    fullSum += i;
    arrSum += nums[i];
  }
  return fullSum - arrSum;
};

const res = missingNumber([0, 1, 3]);
console.log(res);