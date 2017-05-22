// 13

var romanToInt = function(s) {
  const table = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  if (s.length === 1) return table[s];

  let result = 0;
  const chars = s.split('');
  for (let i = 0; i < chars.length - 1; i++) {
    const cur = chars[i];
    const next = chars[i + 1];
    const curValue = table[cur];
    const nextValue = table[next];
    if (curValue >= nextValue) result += curValue;
    else result -= curValue;
  }
  const last = chars[chars.length - 1];
  result += table[last];

  return result;
};

const res = romanToInt('I');
console.log(res);

module.exports = romanToInt;