/**
 * https://www.hackerrank.com/challenges/array-left-rotation/problem
 * Time Complex: O(n * d)
 */

 function rotateLeft(d: number, arr: number[]): number[] {
  // Write your code here
  const answer: number[] = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let checker = 0;
    while (checker < d) {
      if (j === 0) {
        j = arr.length - 1;
      } else {
        j--;
      }
      checker++;
    }
    answer[j] = arr[i];
  }

  return answer;
}
