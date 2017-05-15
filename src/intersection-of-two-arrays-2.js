// #350

var intersect = function(nums1, nums2) {
  let result = [];
  let table = {};
  for (let i = 0; i < nums1.length; i++) {
    let a = nums1[i];
    table[a] = table[a] ? table[a] + 1 : 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    let a = nums2[i];
    if (table[a]) {
      table[a]--;
      result.push(a);
    }
  }

  return result;
};

const res = intersect([1, 2, 2, 1], [2, 2]);
console.log(res);