/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 *
 * https://leetcode.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (57.99%)
 * Likes:    992
 * Dislikes: 14
 * Total Accepted:    82.4K
 * Total Submissions: 139.9K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * Given two strings text1 and text2, return the length of their longest common
 * subsequence.
 * 
 * A subsequence of a string is a new string generated from the original string
 * with some characters(can be none) deleted without changing the relative
 * order of the remaining characters. (eg, "ace" is a subsequence of "abcde"
 * while "aec" is not). A common subsequence of two strings is a subsequence
 * that is common to both strings.
 * 
 * 
 * 
 * If there is no common subsequence, return 0.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: text1 = "abcde", text2 = "ace" 
 * Output: 3  
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= text1.length <= 1000
 * 1 <= text2.length <= 1000
 * The input strings consist of lowercase English characters only.
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/330803236/
 *              beats 97.05% JS Submissions.
 * 
 *              2 ways to do this problem. The main intuition is to think DP.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let [m, n] = [text1.length, text2.length];
    let mem = new Array();
    for (let i = 0; i <= m; i++) {
        let arr = new Array(n+1);
        arr.fill(0);
        mem.push(arr);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (text1.charAt(i) == text2.charAt(j))
                mem[i+1][j+1] = mem[i][j] + 1;
            else
                mem[i + 1][j + 1] = Math.max(mem[i][j + 1], mem[i + 1][j]);
        }
    }

    console.log(mem);
    return mem[m][n];
};
// @lc code=end

let main = () => {
    console.log(longestCommonSubsequence("abcde", "ace"));
    console.log(longestCommonSubsequence("abcdefghijk", "ace"));
    console.log(longestCommonSubsequence("abc", "abc"));
    console.log(longestCommonSubsequence("abc", "def"));
};

main();