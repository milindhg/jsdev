/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 *
 * https://leetcode.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (56.14%)
 * Likes:    562
 * Dislikes: 350
 * Total Accepted:    194.6K
 * Total Submissions: 348.6K
 * Testcase Example:  '[1,0,1,1,0,1]'
 *
 * Given a binary array, find the maximum number of consecutive 1s in this
 * array.
 * 
 * Example 1:
 * 
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive
 * 1s.
 * ⁠   The maximum number of consecutive 1s is 3.
 * 
 * 
 * 
 * Note:
 * 
 * The input array will only contain 0 and 1.
 * The length of input array is a positive integer and will not exceed 10,000
 * 
 * Solution:    https://leetcode.com/submissions/detail/335192875/
 *              beats 91% JS Submissions.
 * 
 * 
 * Simple solution - Kadane's Algorithm.
 * Runtime: O(n)
 * Space: O(1)
Only 2 variables needed, localMax and GlobalMax.
Keep iterating and managing localMax for each small window of consecutive 1.
And update global Max only when the window size is greater than the current
global max so far.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max1s = 0;
    let localMax1s = 0;
    nums.forEach((num)=>{
        if(num == 1){
            localMax1s++;
            max1s = Math.max(max1s, localMax1s);
        }
        else
            localMax1s = 0;
    });
    return max1s;
};
// @lc code=end

let main = () => {
    console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
};

main();