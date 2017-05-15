// #383

var canConstruct = function(ransomNote, magazine) {
  let dict = {};
  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];
    dict[letter] = dict[letter] ? dict[letter] + 1 : 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];
    if (dict[letter]) {
      dict[letter]--;
      if (dict[letter] === 0) delete dict[letter];
    } else {
      return false;
    }
  }
  return true;
};

const res = canConstruct('aa', 'ab');
console.log(res);