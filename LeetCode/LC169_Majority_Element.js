/*

Given an array of size n, find the majority element. The majority element is the element that appears more than n/2 times.

You may assume that the array is non-empty and the majority element always exist in the array.

    
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    return nums[Math.floor(nums.length / 2)];
};

var main = function () {
    nums = [ 2, 2 ];
    console.log(majorityElement(nums));
};

main();