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

 */


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var arr = [];
    if(n==0)
        return [""];
    else
        generateString(arr, "", n, n, n);
    return arr;
};

var generateString = function(arr, str, openCnt, closeCnt, n){
    if(str.length==n*2)
        arr.push(str);
    else{
        if(openCnt>0){
            generateString(arr, str.concat("("), openCnt-1, closeCnt,n);
        }
        if(closeCnt>0 && closeCnt>openCnt){
            generateString(arr, str.concat(")"), openCnt, closeCnt-1,n);
        }
    }
};

let main = () => {
    var n = 3;
    console.log(generateParenthesis(n));
};

main();