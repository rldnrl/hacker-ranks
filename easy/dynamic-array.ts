/**
 * https://www.hackerrank.com/challenges/dynamic-array/problem
 */

function dynamicArray(n: number, queries: number[][]): number[] {
  // Write your code here
  let lastAnswer = 0;
  let arr: number[][] = Array.from(Array(n), () => []);
  let answer = [];

  for (const query of queries) {
    const [command, x, y] = query;
    const index = (x ^ lastAnswer) % n;
    if (command === 1) {
      arr[index].push(y);
    } else if (command === 2) {
      lastAnswer = arr[index][y % arr[index].length];
      answer.push(lastAnswer);
    }
  }

  return answer;
}
