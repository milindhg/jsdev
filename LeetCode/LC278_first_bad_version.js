/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 *
 * TYPE: BINARY SEARCH, ARRAY, LogN
 * 
 * https://leetcode.com/problems/first-bad-version/description/
 *
 * algorithms
 * Easy (33.65%)
 * Likes:    1202
 * Dislikes: 610
 * Total Accepted:    353.3K
 * Total Submissions: 1M
 * Testcase Example:  '5\n4'
 *
 * You are a product manager and currently leading a team to develop a new
 * product. Unfortunately, the latest version of your product fails the quality
 * check. Since each version is developed based on the previous version, all
 * the versions after a bad version are also bad.
 * 
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the
 * first bad one, which causes all the following ones to be bad.
 * 
 * You are given an API bool isBadVersion(version) which will return whether
 * version is bad. Implement a function to find the first bad version. You
 * should minimize the number of calls to the API.
 * 
 * Example:
 * 
 * 
 * Given n = 5, and version = 4 is the first bad version.
 * 
 * call isBadVersion(3) -> false
 * call isBadVersion(5) -> true
 * call isBadVersion(4) -> true
 * 
 * Then 4 is the first bad version. 
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/332900932/
 *              beats 68.27% JS Submissions.

Very interesting problem. This was discussed by Funda Ergun as egg problem.
SImilar egg problem is that you have to find out from which floor the egg is
going to break with minimum tries.

Good approach is to solve it using binary search. So that you can pinpoint which
floor is going to crash the egg or which version is starting the stream of bad
versions in this case.

BINARY Search approach.
Also very good explanation given here -
https://leetcode.com/problems/first-bad-version/solution/

 * 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while(left < right){
            let mid = Math.floor(left + (right - left) / 2);
            if(isBadVersion(mid))
                right = mid;
            else
                left = mid + 1;
        }
        return left;
    };
};
// @lc code=end
