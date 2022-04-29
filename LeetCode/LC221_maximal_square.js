/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 *
 * https://leetcode.com/problems/maximal-square/description/
 *
 * algorithms
 * Medium (35.74%)
 * Likes:    2512
 * Dislikes: 63
 * Total Accepted:    216.3K
 * Total Submissions: 595.9K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * Given a 2D binary matrix filled with 0's and 1's, find the largest square
 * containing only 1's and return its area.
 * 
 * Example:
 * 
 * 
 * Input: 
 * 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 
 * Output: 4
 * 
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/330973217/
 *              beats 84.39% JS Submissions.
 *
 * Time complexity : O(mn). Single pass.
 * Space complexity : O(mn). Another matrix of same size is used for dp.
 * This is more readable code and easier to understand.
 * 
 * But there is extra space needed i.e. 
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let [r, c] = [matrix.length, matrix.length > 0 ? matrix[0].length : 0];
    let side = 0;
    let dp = new Array();
    for(let i=0; i<=r; i++){
        let arr = new Array(c+1);
        arr.fill(0);
        dp.push(arr);
    }
    
    for(let i=1; i<=r; i++){
        for(let j=1; j<=c; j++){
            if(matrix[i-1][j-1] == '1'){
                dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]);
                side = Math.max(side, dp[i][j]);
            }
        }
    }
    
    return side * side;
};
// @lc code=end

let main = () => {
    console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));
};

main();