// #167

var twoSumNaive = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
};

var twoSum = function(numbers, target) {
  function binarySearch(list, searchValue) {
    let low = 0;
    let high = list.length - 1;
    let mid;
    let currentValue;

    while (low <= high) {
      mid = Math.floor((high + low) / 2);
      currentValue = list[mid];
      if (currentValue === searchValue) return mid;
      if (currentValue > searchValue) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return null;
  }

  for (let i = 0; i < numbers.length; i++) {
    const searchValue = target - numbers[i];
    const index = binarySearch(numbers, searchValue);
    if (index !== null) {
      if (i === index) return [i + 1, i + 2];

      const max = Math.max(i + 1, index + 1);
      const min = Math.min(i + 1, index + 1);
      return [min, max];
    }
  }
};

module.exports = {
  twoSum,
  twoSumNaive,
};

