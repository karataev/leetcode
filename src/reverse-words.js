// #557

var reverseWords = function(s) {
  const words = s.split(' ');
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  return reversedWords.join(' ');
};

const res = reverseWords("Let's take LeetCode contest");
console.log(res);