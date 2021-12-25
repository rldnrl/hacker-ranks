/**
 * https://www.hackerrank.com/challenges/sparse-arrays/problem
 */

 function matchingStrings(strings: string[], queries: string[]): number[] {
  // Write your code here
  const result: number[] = [];
  const counts: { [key: string]: number } = {};

  for (const str of strings) {
    counts[str] = counts[str] ? counts[str] + 1 : 1;
  }

  for (let i = 0; i < queries.length; i++) {
    if (queries[i] in counts) {
      result.push(counts[queries[i]]);
    } else {
      result.push(0);
    }
  }

  return result;
}
