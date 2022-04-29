/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (72.44%)
 * Likes:    933
 * Dislikes: 77
 * Total Accepted:    190.1K
 * Total Submissions: 262.6K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * Given an array of integers A sorted in non-decreasing order, return an array
 * of the squares of each number, also in sorted non-decreasing order.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A is sorted in non-decreasing order.
 * 
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/335201650/
 *              beats 82% JS Submissions.
 * 
Very easy brute force method is to find squares and then sort or sort input and
find squares. Sorting can be needed since negative numbers are also present.

However a novel approach can be to do something similar to having 2 indices.
Start and end. Each time calculate square of both start and end and see check
which one to put at the end of the array. Fill the ans array from end to start.
We must fill from end to start because there is a charce of getting highest
value first.

There is no way we can get smallest square first and fill ans from start to end.

Doing this the runtime improves from O(nlog) to O(n)

 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 * @runtime O(nlogn)
 * @space O(1)
 */
var sortedSquares = function(A) {
    let ans = new Array();
    A.forEach( num => ans.push(num * num) );
    ans.sort( (a,b) => a-b );
    return ans;
};


/**
 * @param {number[]} A
 * @return {number[]}
 * @runtime O(n)
 * @space O(1)
 * 
 */
var sortedSquaresBetter = function(A) {
    let ans = new Array(A.length);
    let [start, end] = [0, A.length - 1]
    for(let i=A.length-1; i>=0; i--){
        let [sqStart, sqEnd] = [A[start] ** 2, A[end] ** 2];
        if(sqStart > sqEnd){
            ans[i] = sqStart;
            start++;
        }
        else{
            ans[i] = sqEnd;
            end--;
        }
    }
    return ans;
};
// @lc code=end

let main = () => {
    console.log(sortedSquaresBetter([-7,-3,2,3,11]));
};

main();