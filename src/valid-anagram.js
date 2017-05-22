// 242

var isAnagram = function(s, t) {

  let dict = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    dict[letter] = dict[letter] === undefined ? 1 : dict[letter] + 1;
  }
  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (dict[letter] === undefined) return false;
    else if (dict[letter] === 1) delete dict[letter];
    else dict[letter] -= 1;
  }
  let keys = Object.keys(dict);
  return keys.length === 0;
};

const res = isAnagram('hello', 'olleh');
console.log(res);