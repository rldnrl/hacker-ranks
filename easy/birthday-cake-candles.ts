function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  const maxNumberOfArray = Math.max(...candles)
  
  let answer = 0
  for (const element of candles) {
    if (element === maxNumberOfArray) {
      answer++
    }
  }
  
  return answer
}
