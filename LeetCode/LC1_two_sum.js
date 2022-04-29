/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.30%)
 * Likes:    11282
 * Dislikes: 388
 * Total Accepted:    2M
 * Total Submissions: 4.4M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/444851685/ beats 98.44 % JS Submissions.
 *              Simple way is to have a map. 
 *              As you iterate over the elements in the array, keep checking whether there is a saved answer index for the complement of the element.
 *              If you find a complement index for the current element in array, return the answer.
 * 
 *              Trick: Using an ES6 array.some function helps break the continuation of a look as well as improve the performance.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let complementMap = {};
    let ans = [-1, -1];
    let newTarget = target;
    let myFunc = (item, index, target, ans) => {
        let complement = target - item;
        if (!complementMap[complement]) {
            complementMap[item] = index;
            return false;
        } else {
            ans = [complementMap[complement], index];
            return true;
        }
    }
    // nums.some((item, index) => myFunc(item, index, newTarget, ans));
    nums.some((item, index) => {
        let complement = target - item;
        if (complementMap[complement] && (complementMap[complement] > -1)) {
            ans = [complementMap[complement], index];
            return true;
        } else {
            complementMap[item] = index;
            return false;
        }
    });
    return ans;
};
// @lc code=end

var main = () => {
    console.log(twoSum([2, 7, 11, 15], 9));
};

main();