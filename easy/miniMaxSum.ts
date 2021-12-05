/**
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 */

function miniMaxSum(arr: number[]): void {
  // Write your code here
  const arrayOfSum = [];
  const sumOfAllArray = () => {
    let result = 0;
    for (const element of arr) {
      result += element;
    }
    return result;
  };

  for (const element of arr) {
    arrayOfSum.push(sumOfAllArray() - element);
  }

  console.log(Math.min(...arrayOfSum), Math.max(...arrayOfSum));
}
