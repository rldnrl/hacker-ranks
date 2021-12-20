/**
 * https://www.hackerrank.com/challenges/2d-array/problem
 */

 function hourglassSum(arr: number[][]): number {
  // Write your code here
  const result: number[] = []
  
  for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 6; col++) {
          if (!(row < 4 && col < 4)) break
          
          let i = 0
          let sum = 0
          while (i < 3) {
              sum += arr[row][col + i]
              sum += arr[row + 2][col + i]
              i++
          }
          sum += arr[row + 1][col + 1]
          result.push(sum)
      }
  }
  
  return Math.max(...result)
}