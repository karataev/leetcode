// #448

var findDisappearedNumbers = function(nums) {
  let ordered = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    ordered[num - 1] = num;
  }
  let res = [];
  for (let i = 0; i < ordered.length; i++) {
    if (!ordered[i]) res.push(i + 1);
  }
  return res;
};

const res = findDisappearedNumbers([4,3,2,7,8,2,3,1]);
console.log(res);
