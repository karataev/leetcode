// 169

var majorityElement = function(nums) {
  let table = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    table[num] = table[num] === undefined ? 1 : table[num] + 1;
  }
  let maxValue = 0;
  let result;
  for (let key in table) {
    if (table[key] > maxValue) {
      maxValue = table[key];
      result = Number(key);
    }
  }
  return result;
};

const arr = [1, 1, 2, 3, 4, 1, 1];
const res = majorityElement(arr);
console.log(res);
