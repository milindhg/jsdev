/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 *
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/description/
 *
 * algorithms
 * Easy (40.45%)
 * Likes:    122
 * Dislikes: 15
 * Total Accepted:    22.6K
 * Total Submissions: 56.9K
 * Testcase Example:  '[10,2,5,3]'
 *
 * Given an array arr of integers, check if there exists two integers N and M
 * such that N is the double of M ( i.e. N = 2 * M).
 * 
 * More formally check if there exists two indices i and j such that :
 * 
 * 
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: arr = [10,2,5,3]
 * Output: true
 * Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: arr = [7,1,14,11]
 * Output: true
 * Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: arr = [3,1,7,11]
 * Output: false
 * Explanation: In this case does not exist N and M, such that N = 2 * M.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= arr.length <= 500
 * -10^3 <= arr[i] <= 10^3
 * 
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/335852749/
 *              beats 99.32% JS Submissions.
 * 

A very simple approach of single pass on the array and using a set to check if
half or double of the current element already existed in array so far.

* 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let mySet = new Set();
    return arr.some(num => {
        if (mySet.has(num * 2) || mySet.has(num / 2))
            return true;
        else
            mySet.add(num);
    });
};
// @lc code=end

let main = () => {
    console.log(checkIfExist([10, 2, 5, 3]));
    console.log(checkIfExist([7, 1, 14, 11]));
    console.log(checkIfExist([3, 1, 7, 11]));
};

main();