/* 

https://leetcode.com/problems/binary-search/

704. Binary Search
Easy

6412

137

Add to List

Share
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
Accepted
1,217,210
Submissions
2,207,259

Solution:   https://leetcode.com/submissions/detail/735296872/ beats 90.71% js submissions.
            Simple binary search approach. Always keep looking for mid index and compare the target value with mid value. 
            If mid value is greater, then reduce high and if mid value is smaller then increase low.
            If target found at mid then return mid index.


 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target)
            return mid;
        else if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

var main = function () {
    let target, nums;
    nums = [-1, 0, 3, 5, 9, 12];
    target = 9;
    console.log(search(nums, target));
    nums = [-1, 0, 3, 5, 9, 12];
    target = 2;
    console.log(search(nums, target));
    nums = [1];
    target = 2;
    console.log(search(nums, target));
    nums = [1];
    target = 1;
    console.log(search(nums, target));
    nums = [1, 2];
    target = 2;
    console.log(search(nums, target));
    nums = [1, 2];
    target = 1;
    console.log(search(nums, target));
    nums = [1, 3, 4];
    target = 3;
    console.log(search(nums, target));
    nums = [1, 3, 4];
    target = 2;
    console.log(search(nums, target));
};

main();