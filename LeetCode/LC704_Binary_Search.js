/* 

https://leetcode.com/problems/binary-search/

704. Binary Search


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