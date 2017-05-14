// #476

var findComplement = function(num) {
  const binary = num
    .toString(2)
    .split('')
    .map(digit => digit === '0' ? '1' : '0')
    .join('');

  return parseInt(binary, 2);
};

const res = findComplement(1);
console.log(res);