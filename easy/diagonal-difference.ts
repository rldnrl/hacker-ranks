function diagonalDifference(arr: number[][]): number {
  // Write your code here
  const N = arr.length;

  let rightDiagonal = 0;
  for (let i = 0; i < N; i++) {
    rightDiagonal += arr[i][i];
  }

  let leftDiagonal = 0;
  let row = 0;
  let col = N - 1;
  while (row !== N && col !== -1) {
    leftDiagonal += arr[row++][col--];
  }

  return Math.abs(rightDiagonal - leftDiagonal);
}
