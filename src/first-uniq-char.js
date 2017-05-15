// #387

var firstUniqChar = function(s) {
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    dict[letter] = dict[letter] === undefined ? i : null;
  }
  const keys = Object.keys(dict);
  let minIndex = Number.POSITIVE_INFINITY;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const index = dict[key];
    if (index === null) continue;
    if (index < minIndex) minIndex = index;
  }
  console.log(dict);
  return minIndex === Number.POSITIVE_INFINITY ? -1 : minIndex;
};

const res = firstUniqChar('lovelov');
console.log(res);
