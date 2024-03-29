/*
 * @lc app=leetcode id=918 lang=javascript
 *
 * [918] Maximum Sum Circular Subarray
 *
 * https://leetcode.com/problems/maximum-sum-circular-subarray/description/
 *
 * algorithms
 * Medium (33.90%)
 * Likes:    895
 * Dislikes: 47
 * Total Accepted:    41.4K
 * Total Submissions: 127.1K
 * Testcase Example:  '[1,-2,3,-2]'
 *
 * Given a circular array C of integers represented by A, find the maximum
 * possible sum of a non-empty subarray of C.
 * 
 * Here, a circular array means the end of the array connects to the beginning
 * of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and
 * C[i+A.length] = C[i] when i >= 0.)
 * 
 * Also, a subarray may only include each element of the fixed buffer A at most
 * once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not
 * exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [1,-2,3,-2]
 * Output: 3
 * Explanation: Subarray [3] has maximum sum 3
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [5,-3,5]
 * Output: 10
 * Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [3,-1,2,-1]
 * Output: 4
 * Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4
 * 
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [3,-2,2,-3]
 * Output: 3
 * Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: [-2,-3,-1]
 * Output: -1
 * Explanation: Subarray [-1] has maximum sum -1
 * 
 * 
 * 
 * 
 * Note: 
 * 
 * 
 * -30000 <= A[i] <= 30000
 * 1 <= A.length <= 30000
 * 
 * 
 * 
 * Solution:    
 * 
 * Amazin explanation of the solution - 
 * https://leetcode.com/problems/maximum-sum-circular-subarray/discuss/178422/One-Pass
 * 
 * Very similar to LC53 which is Kadane's Algorithm
 * 
 * https://leetcode.com/submissions/detail/339986344/
 * beats 79.92% JS Submissions.
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    let [curMax, max, curMin, min, totalSum] = [-Infinity, -Infinity, Infinity, Infinity, 0];
    A.forEach( num => {
        curMax = Math.max(0, curMax) + num;
        max = Math.max(max, curMax);
        curMin = Math.min(0, curMin) + num;
        min = Math.min(min, curMin);
        totalSum += num;
    });

    return max > 0 ? Math.max(max, totalSum - min) : max;
};
// @lc code=end

let main = () => {
    console.log(maxSubarraySumCircular([5,-3,5]));
    console.log(maxSubarraySumCircular([-2,-3,-1]));
    console.log(maxSubarraySumCircular([3,-1,2,-1]));
    console.log(maxSubarraySumCircular([3,-2,2,-3]));
    console.log(maxSubarraySumCircular([1,-2,3,-2]));
};

main();