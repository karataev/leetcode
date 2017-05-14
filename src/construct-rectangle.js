// #492

var constructRectangle = function(area) {
  const sqrt = Math.floor(Math.sqrt(area));
  let options = [];
  for (let i = 1; i <= sqrt; i++) {
    if (area % i === 0) options.push([area / i, i]);
  }
  return options[options.length - 1];
};

const res = constructRectangle(1000);
console.log(res);
