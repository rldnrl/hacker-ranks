/**
 * https://www.hackerrank.com/challenges/reduced-string/problem
 */

 function superReducedString(s: string): string {
  // Write your code here
  const answer = s.split("");

  for (let i = 0; i < answer.length - 1; i++) {
    if (answer[i] === answer[i + 1]) {
      answer.splice(i, 2);
      i -= 2;
    }
  }

  if (answer.length === 0) return "Empty String";

  return answer.join("");
}
