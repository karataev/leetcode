// #566

var matrixReshape = function(nums, r, c) {
  if (nums.length * nums[0].length !== r * c) return nums;

  const flatten = [].concat(...nums);
  const result = [];
  for (let i = 0; i < r; i++) {
    result.push([]);
    for (let j = 0; j < c; j++) {
      let index = i * c + j;
      result[i][j] = flatten[index];
    }
  }
  return result;
};

const matrix = [
  [1,2],
  [3,4]
];

const res = matrixReshape(matrix, 4, 2);
console.log(res);
