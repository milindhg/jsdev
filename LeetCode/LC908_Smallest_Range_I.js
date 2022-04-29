/* 
https://leetcode.com/problems/smallest-range-i/description/

Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

 

Example 1:

Input: A = [1], K = 0
Output: 0
Explanation: B = [1]
Example 2:

Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]
Example 3:

Input: A = [1,3,6], K = 3
Output: 0
Explanation: B = [3,3,3] or B = [4,4,4]
 

Note:

1 <= A.length <= 10000
0 <= A[i] <= 10000
0 <= K <= 10000



Solution:   https://leetcode.com/submissions/detail/246615465/  beats 72.01% JS Submissions.
            
 */


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    A.forEach((num) => {
        min = Math.min(min, num);
        max = Math.max(max, num);
    });
    return Math.max(max - min - 2 * K, 0);
};
var main = () => {
    console.log(smallestRangeI([9,9,2,8,7],4));
}

main();

