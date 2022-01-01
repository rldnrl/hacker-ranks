/**
 * https://www.hackerrank.com/challenges/simple-array-sum/problem
 */

function simpleArraySum(arr: number[]): number {
  // Write your code here
  let answer = 0

  arr.forEach((element) => {
      answer += element
  })
  
  return answer
}