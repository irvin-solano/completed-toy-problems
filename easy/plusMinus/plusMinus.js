// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem

/*
 * I -  array
 * O -  none - three strings PRINTED on separate lines
 * C -  array size from 0 to 100, integers range from -100 to 100
 * E -  None
 *
 * Planning details available after the function definition of plusMinus, at line 44
 *
*/

function plusMinus (arr) {
  if (arr.length === 0) {
    // console.log('0.000000\n0.000000\n0.000000'); // disabled for testing
    return '0.000000\n0.000000\n0.000000'; // enabled for testing
  } else {
    const n = arr.length;

    const counter = { positivesCount: 0, negativesCount: 0, zerosCount: 0 };
    for (const number of arr) {
      number > 0 ? counter.positivesCount++ : number < 0 ? counter.negativesCount++ : counter.zerosCount++;
    }
    function toRatioString (num) {
      const numString = num.toString();
      if (Number.isInteger(num)) {
        return numString + '.000000';
      } else {
        const periodIndex = numString.indexOf('.');
        const decimals = numString.slice(periodIndex, periodIndex + 7);
        if (decimals.length === 6) {
          return Number.parseFloat(numString).toFixed(6);
        } else {
          return num.toFixed(6);
        }
      }
    }
    const { positivesCount, negativesCount, zerosCount } = counter;
    const positivesRatio = toRatioString(positivesCount / n);
    const negativesRatio = toRatioString(negativesCount / n);
    const zerosRatio = toRatioString(zerosCount / n);

    // console.log(positivesRatio + '\n' + negativesRatio + '\n' + zerosRatio); // disabled for testing
    return positivesRatio + '\n' + negativesRatio + '\n' + zerosRatio; // enabled for testing
  }
}

/**
 * Explanation:
 *      Given an array, if its size is zero, return 0 on all three lines.  Else, using a
 *      separate counter for the positive number, negative number and zero occureneces,
 *      traverse the array - if the number is positive, add 1 to the positive numbers
 *      counter; if the number is negative add 1 to the negative numbers
 *      counter; if the number is zero, add 1 to the zero number
 *      counter.  Once the entire array has been traversed, transform the value of each
 *      counter into integer - a decimal number six decimal places long that represents
 *      the ratio of the counter value to the total number of values in the provided
 *      array.  Print the transformed values on separate lines in the following order
 *      1. positive values ratio
 *      2. negative values ratio
 *      3. zeros
 * Visualization:
 *      Reffer to drawing or whiteboard screenshot if provided
 * Approximation:
 *      IF array size equals zero,
 *        print (0,new line,0,new line,0)
 *      ELSE
 *        Create an object "counter" with three keys - "positiveNumbers", "negativeNumbers"
 *        and "zeros", initiated with a value of number 0.;
 *        IF number is positive, add 1 to "positiveNumbers";
 *        ELSE;
 *          IF number is negative, add 1 to "negativeNumbers";
 *          ELSE add 1 to "zeros";
 *        Create a constant "positivesRatio" equal to "positiveNumbers" divided by the size
 *        of the array;
 *        Create a constant "negativesRatio" equal to "negativeNumbers" divided by the size
 *        of the array;
 *        Create a constant "zerosRatio" equal to the "positiveNumbers" divided by the size
 *        of the array;
 *        print "postivesRatio", new line, "negativesRatio", new line, "zerosRatio";
 * Implement! (Start coding)
 */

export default plusMinus;
