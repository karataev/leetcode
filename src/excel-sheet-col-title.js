// #168 TODO: wrong answer

var convertToTitle = function(n) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const m = Math.floor((n - 1) / 26);
  const prefix = new Array(m + 1).join('A');
  return prefix + alphabet[(n - 1) % 26];
};

const res = convertToTitle(53);
console.log(res);
