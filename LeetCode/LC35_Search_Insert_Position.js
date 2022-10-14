/* 

https://leetcode.com/problems/search-insert-position/

35. Search Insert Position
Easy

9950

475

Add to List

Share
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
Accepted
1,737,607
Submissions
4,137,696


Solution:   https://leetcode.com/submissions/detail/815909625/  beats 83.58% JS Submissions
            Simple binary search within an array to find a target.
            To return possible target position if target doesn't exist is also to return the left most element we are at during binary search end.
            Also we should have 2 conditions to check if the target is bigger than the length of the array, target element will be the new last element of the array
            and if the target is smaller than the smalles element in the sorted array then target will be the new first/smallest element of the array.

 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (target > nums[nums.length - 1]) return nums.length;
    else if (target < nums[0]) return 0;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};


let main = () => {
    console.log(searchInsert([1, 3, 5, 6], 5));
    console.log(searchInsert([1, 3, 5, 6], 2));
    console.log(searchInsert([1, 3, 5, 6], 7));
};

main();