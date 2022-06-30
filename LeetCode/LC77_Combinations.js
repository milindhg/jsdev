/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations
 *

Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

 

Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
Example 2:

Input: n = 1, k = 1
Output: [[1]]
 

Constraints:

1 <= n <= 20
1 <= k <= n
Accepted
545,156
Submissions
843,034



Solution: https://leetcode.com/submissions/detail/732341857/ beats 6.80% js submissions.
          Look at the method. This is a pattern similar to solving the - get all permutations of the input string problem.
          Pattern should make use of push pop on the temp stack.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var result = [];
  var temp = [];
  combinator(result, temp, 1, n, k);
  return result;
};

var combinator = function (result, temp, start, end, k) {
  if (k == 0) {
    result.push(temp.map((x) => x));
    return;
  }
  for (var i = start; i <= end + k - 1; i++) {
    temp.push(i);
    combinator(result, temp, i + 1, end, k - 1);
    temp.pop();
  }

};


var main = function () {
  // console.log(JSON.stringify(combine(4, 1)));
  console.log(JSON.stringify(combine(4, 2)));
}

main();
// @lc code=end

