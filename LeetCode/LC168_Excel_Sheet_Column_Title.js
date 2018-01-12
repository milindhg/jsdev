// https://leetcode.com/submissions/detail/131927260/
//
// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
//
// For example:
//
//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var answer = "";
  while (n > 0) {
    n--;
    var character = map[(n % 26)];
    answer = character + answer;
    n = Math.floor(n / 26);
  }
  return answer;
};

var main = function() {
  var input = 2600;
  console.log(convertToTitle(input));
};

main();
