const romanToInt = require('./roman-to-int');

function calc(rom, int) {
  const res = romanToInt(rom);
  expect(res).toEqual(int);
}

test('I should equal to 1', () => {
  calc('I', 1);
});

test('II should equal to 2', () => {
  calc('II', 2);
});

test('V should equal to 5', () => {
  calc('V', 5);
});

test('VIII should equal to 8', () => {
  calc('VIII', 8);
});

test('X should equal to 10', () => {
  calc('X', 10);
});

test('XXXVI should equal to 36', () => {
  calc('XXXVI', 36);
});

test('IV should equal to 4', () => {
  calc('IV', 4);
});

test('IX should equal to 9', () => {
  calc('IX', 9);
});

test('XL should equal to 40', () => {
  calc('XL', 40);
});

test('LXXXIV should equal to 84', () => {
  calc('LXXXIV', 84);
});

test('DCCCXC should equal to 890', () => {
  calc('DCCCXC', 890);
});

test('MD should equal to 1500', () => {
  calc('MD', 1500);
});

