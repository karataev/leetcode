// #371

var getSum = function(a, b) {
  while (b !== 0) {
    console.log(a, b);
    const carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};

const res = getSum(1, 2);
console.log(res);