function lonelyInteger(a: number[]): number {
  // Write your code here
  const answer = a.reduce((acc: { [key in string]: number }, cur) => {
    if (`${cur}` in acc) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  for (const key in answer) {
    if (answer[key] === 1) return Number(key);
  }
}
