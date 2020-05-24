/*
 * @lc app=leetcode id=986 lang=javascript
 *
 * [986] Interval List Intersections
 *
 * https://leetcode.com/problems/interval-list-intersections/description/
 *
 * algorithms
 * Medium (65.96%)
 * Likes:    1157
 * Dislikes: 36
 * Total Accepted:    96.6K
 * Total Submissions: 144.7K
 * Testcase Example:  '[[0,2],[5,10],[13,23],[24,25]]\n[[1,5],[8,12],[15,24],[25,26]]'
 *
 * Given two lists of closed intervals, each list of intervals is pairwise
 * disjoint and in sorted order.
 * 
 * Return the intersection of these two interval lists.
 * 
 * (Formally, a closed interval [a, b] (with a <= b) denotes the set of real
 * numbers x with a <= x <= b.  The intersection of two closed intervals is a
 * set of real numbers that is either empty, or can be represented as a closed
 * interval.  For example, the intersection of [1, 3] and [2, 4] is [2,
 * 3].)
 * 
 * TYPE:    MUST SEE AT LEAST ONCE.
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: A = [[0,2],[5,10],[13,23],[24,25]], B =
 * [[1,5],[8,12],[15,24],[25,26]]
 * Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 * Reminder: The inputs and the desired output are lists of Interval objects,
 * and not arrays or lists.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 0 <= A.length < 1000
 * 0 <= B.length < 1000
 * 0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9
 * 
 * 
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/343736389/
 *              Beats 32.96% JS Submissions.
 * 

The basic idea is very simple. Keep going throught both the arrays of tuples
parallely.
Keep building the ans tuple by taking the larger of the start of A and B and
smaller of the end of A and B. So that way we get the intersection of the both A
and B tuples.
Another important thing is to increment the tuple of A or B depending on which
appears first in the order.

 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let i = 0;
    let j = 0;
    let ans = new Array();
    while(i<A.length && j<B.length){
        const [aStart, aEnd] = A[i];
        const [bStart, bEnd] = B[j];
        
        let start = Math.max(aStart, bStart);
        let end = Math.min(aEnd, bEnd);
        
        if(start<=end)
            ans.push([start,end]);
        
        if(aEnd<bEnd)
            i++
        else
            j++;
    }
    
    return ans;
};
// @lc code=end

let main = () => {
    let A = [[0,2],[5,10],[13,23],[24,25]];
    let B = [[1,5],[8,12],[15,24],[25,26]];
    console.log(intervalIntersection(A,B));
};

main();