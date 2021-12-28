/**
 * https://www.hackerrank.com/challenges/crush/problem
 *
 * My Solution Code
 * Time Complexity: O(n * m)
 */
function arrayManipulation(n: number, queries: number[][]): number {
  // Write your code here
  const arr = Array.from(Array(n), () => 0);
  let answer = 0;
  for (const query of queries) {
    const [a, b, k] = query;
    for (let i = a - 1; i < b; i++) {
      arr[i] += k;
      if (answer < arr[i]) answer = arr[i];
    }
  }
  return answer;
}

/**
 * 
 * Success Solution Code
 * Time Complexity: O(n + m)
 */
function arrayManipulationSolution(n: number, queries: number[][]): number {
  // Write your code here
  const arr = Array.from(Array(n + 1), () => 0);

  for (const query of queries) {
    const [a, b, k] = query;
    arr[a - 1] += k;
    arr[b] -= k;
  }

  let sum = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    max = Math.max(sum, max);
  }

  return max;
}
