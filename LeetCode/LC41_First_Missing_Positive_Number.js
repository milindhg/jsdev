/*

https://leetcode.com/problems/first-missing-positive/
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space

*/
/*
Solution:   This is yet to be completed. 
TODO this problem is yet incomplete.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    var cursor = 0;
    while (cursor < nums.length) {
        var target = nums[cursor];
        // While the number is positive, and value is within the length range.
        // Get the numbers to their correct position. Example nums[0]=0, nums[1]=1 and so on.
        while (target < nums.length && target != nums[target]) {
            var temp = nums[target];
            nums[target] = target;
            nums[cursor] = temp;
        }
        cursor++;
    }

    console.log('Nums now is: ' + nums);
    cursor = 0;
    while (cursor < nums.length) {
        // If the number on index, is not same as value at that index then that index is the missing
        // positive number.
        if (nums[cursor] != cursor) {
            return cursor;
        }
        cursor++;
    }
    return nums.length;
};

var main = function () {
    var nums = [ 3, 4, -1, 1 ];
    console.log(firstMissingPositive(nums));
};

main();