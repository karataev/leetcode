// #389

var findTheDifference = function(s, t) {
  let tArr = t.split('');
  for (let i = 0; i < s.length; i++) {
    const index = tArr.indexOf(s[i]);
    tArr.splice(index, 1);
  }
  return tArr[0];
};

const res = findTheDifference('abcd', 'abcde');
console.log(res);