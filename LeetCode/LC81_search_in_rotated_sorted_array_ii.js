/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Medium (32.97%)
 * Likes:    1118
 * Dislikes: 443
 * Total Accepted:    224.5K
 * Total Submissions: 681.1K
 * Testcase Example:  '[2,5,6,0,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return true,
 * otherwise return false.
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 * 
 * Follow up:
 * 
 * 
 * This is a follow up problem to Search in Rotated Sorted Array, where nums
 * may contain duplicates.
 * Would this affect the run-time complexity? How and why?
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let [start, end] = [0, nums.length -1];
    while(start<=end){
        let mid = Math.floor(start + (end - start)/2);
        if(nums[mid] == target)
            return true;
        if(target > nums[mid] && target <= nums[end])
            start = mid + 1;
        else if (target < nums[mid] && target >= nums[start])
            end = mid - 1;
        else
            start = mid + 1;
    }
    return false;
};
// @lc code=end

let main = () => {
    let arr = [2,5,6,0,0,1,2];
    console.log(search(arr, 0));
    console.log(search(arr, 1));
    console.log(search(arr, 2));
    console.log(search(arr, 5));
    console.log(search(arr, 6));
    console.log(search(arr, 60));
    console.log(search(arr, 3));
    console.log(search(arr, -3));

    console.log('======');
    arr = [3,1];
    console.log(search(arr, 3));
    console.log(search(arr, 1));
    console.log(search(arr, 11));
    console.log(search(arr, -1));
};

main();