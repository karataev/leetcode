// 217

var containsDuplicate = function(nums) {
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (dict[num] !== undefined) return true;
    else dict[num] = true;
  }
  return false;
};

const res = containsDuplicate([1, 2, 3, 4, 5]);
console.log(res);