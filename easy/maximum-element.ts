/**
 * https://www.hackerrank.com/challenges/maximum-element/problem
 */

function getMax(operations: string[]): number[] {
  const stack: number[] = [];
  const result: number[] = [];

  for (const operation of operations) {
    switch (operation[0]) {
      case "1":
        const [, operationNumber] = operation.split(" ");
        stack.push(Number(operationNumber));
        break;
      case "2":
        stack.pop();
        break;
      case "3":
        result.push(Math.max(...stack));
    }
  }
  return result;
}
