/**
 * https://www.hackerrank.com/challenges/queue-using-two-stacks/problem
 */

 function queueUsingTwoStack(arr: string[]) {
  // Enter your code here
  const queue: number[] = [];
  const result: number[] = [];
  for (const element of arr) {
    switch (element[0]) {
      case "1":
        const [, num] = element.split(" ");
        queue.push(Number(num));
        break;
      case "2":
        queue.shift();
        break;
      case "3":
        result.push(queue[0]);
        break;
    }
  }

  return result;
}
