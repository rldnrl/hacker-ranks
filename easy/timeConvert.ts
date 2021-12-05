/**
 * https://www.hackerrank.com/challenges/time-conversion/problem
 */

function timeConversion(s: string): string {
  // Write your code here
  let answer = "";
  let [hour, minute, secondAndFormat] = s.split(":");
  if (secondAndFormat.includes("AM")) {
    answer =
      hour === "12"
        ? `00:${minute}:${secondAndFormat.replace("AM", "")}`
        : `${hour}:${minute}:${secondAndFormat.replace("AM", "")}`;
  } else {
    answer =
      hour === "12"
        ? `${hour}:${minute}:${secondAndFormat.replace("PM", "")}`
        : `${Number(hour) + 12}:${minute}:${secondAndFormat.replace("PM", "")}`;
  }

  return answer;
}
