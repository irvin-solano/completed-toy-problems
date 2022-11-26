import plusMinus from './plusMinus.js';

describe('Return the number of positive, zero, and negative numbers as six-place decimals  - in the form of strings - of the total elements in the array, each on separate lines when:', () => {
  it('given an array with one positive number, one negative number, and one zero', () => {
    expect(plusMinus([1, -1, 0])).toBe(console.log('0.333333\n0.333333\n0.333333'));
  });
  it('given an array with one positive number, one negative number, and NO zero', () => {
    expect(plusMinus([1, -1])).toBe(console.log('0.500000\n0.500000\n0.000000'));
  });
  it('given an array with one positive number, NO negative number, and one zero', () => {
    expect(plusMinus([1, 0])).toBe(console.log('0.500000\n0.000000\n0.500000'));
  });
  it('given an array with NO positive number, one negative number, and one zero', () => {
    expect(plusMinus([-1, 0])).toBe(console.log('0.0.000000\n0.500000\n500000'));
  });
  it('given an empty array', () => {
    expect(plusMinus([])).toBe(console.log('0.000000\n0.000000\n0.000000'));
  });
  it('any of the final outputs has (a) trailing zero(s)', () => {
    const arr = [1, 0];
    for (let i = 1; i < 63; i++) {
      arr.push(-1);
    }
    expect(plusMinus(arr)).toBe(console.log('0.015625\n0.968750\n0.015625'));
  });
});
