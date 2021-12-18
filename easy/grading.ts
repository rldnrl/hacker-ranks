/**
 * https://www.hackerrank.com/challenges/grading/problem
 */

function gradingStudents(grades: number[]): number[] {
  // Write your code here
  return grades.map((grade) => {
    if (grade < 35) {
      return grade;
    }
    if (5 - (grade % 5) >= 3) {
      return grade;
    } else if (5 - (grade % 5) < 3) {
      return grade + 5 - (grade % 5);
    }
  });
}
