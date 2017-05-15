// #506

var findRelativeRanks = function(nums) {
  const sortedReverse = nums.slice().sort((a, b) => b - a);

  return nums.map(item => {
    const index = sortedReverse.indexOf(item);
    if (index === 0) return 'Gold Medal';
    if (index === 1) return 'Silver Medal';
    if (index === 2) return 'Bronze Medal';
    return (index + 1).toString();
  })
};

const res = findRelativeRanks([10,3,8,9,4]);
console.log(res);