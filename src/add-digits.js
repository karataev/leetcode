// #258

var addDigits = function(num) {
  do {
    num = num
      .toString()
      .split('')
      .map(item => Number(item))
      .reduce((item, acc) => item + acc);
  } while (num >= 10);

  return num;
};

const res = addDigits(38);
console.log(res);
