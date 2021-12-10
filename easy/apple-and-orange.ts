/**
 * https://www.hackerrank.com/challenges/apple-and-orange/problem
 */

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
  // Write your code here
  const answer = [0, 0]
  
  const lengthOfApples: number[] = []
  const lengthOfOranges: number[] = []
  
  for (const element of apples) {
      lengthOfApples.push(a + element)
  }
  
  for (const element of oranges) {
      lengthOfOranges.push(b + element)
  }

  for (const element of lengthOfApples) {
      if (element >= s && element <= t) {
          answer[0]++
      }
  }
  
  for (const element of lengthOfOranges) {
      if (element >= s && element <= t) {
          answer[1]++
      }
  }
  
  console.log(answer[0])
  console.log(answer[1])
}
