// #485

var findMaxConsecutiveOnes = function(nums) {
  let sums = [];
  let sum = 0;
  nums.forEach(num => {
    if (num === 1) {
      sum++;
    } else {
      sums.push(sum);
      sum = 0;
    }
  });
  sums.push(sum);
  return Math.max(...sums);
};

const res = findMaxConsecutiveOnes([1,1,0,1,1,1]);
console.log(res);
