/* https://leetcode.com/problems/generate-parentheses/description/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Solution:   https://leetcode.com/submissions/detail/235571474/ Beats 72.30% JS Subsmissions
            Use recursion for this functionality and generate the parentheses.
            In order to check the base cases, always keep a track of the count of open brackets and closed braces.
            Open braces can be added anytime as long as open braces are left in pocket.
            Closed braces can only be added as long as closed braces are left AND the count of closed braces left is greater than open braces left.
 */


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var arr = [];
    if (n == 0)
        return [""];
    else
        generateString(arr, "", n, n, n);
    return arr;
};

var generateString = function (arr, str, openCnt, closeCnt, n) {
    if (str.length == n * 2)
        arr.push(str);
    else {
        if (openCnt > 0) {
            generateString(arr, str.concat("("), openCnt - 1, closeCnt, n);
        }
        if (closeCnt > 0 && closeCnt > openCnt) {
            generateString(arr, str.concat(")"), openCnt, closeCnt - 1, n);
        }
    }
};

let main = () => {
    var n = 3;
    console.log(generateParenthesis(n));
};

main();