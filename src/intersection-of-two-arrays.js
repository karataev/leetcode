// #349

var intersection = function(nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    let a = nums1[i];
    if (result.indexOf(a) > -1) continue;

    if (nums2.indexOf(a) > -1) {
      result.push(a);
    }
  }
  return result;
};

const res = intersection([1, 2, 2, 1], [2, 2]);
console.log(res);