/**
 * https://www.hackerrank.com/challenges/kangaroo/problem
 */

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here
  if (((x2 - x1) % (v1 - v2) === 0) && v1 > v2) return "YES"
  return "NO"
}
