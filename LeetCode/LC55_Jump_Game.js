/*
https://leetcode.com/problems/jump-game/description/
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    console.log('now nums is: ' + nums);
    if (nums.length == 0) {
        return false;
    } else if (nums.length == 1) {
        return true;
        // } else if (nums[0] < nums.length - 1) {
        // return false;
    } else {
        var flipper = false;
        var i = 1;
        var num = nums[0];
        while (i <= num) {
            flipper = flipper || canJump(nums.slice(i, nums.length));
            i++;
            console.log('now flipper is: ' + flipper);
        }
        return flipper;
    }
};

var main = function () {
    var nums = [ 0 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 1 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 0, 1 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 1, 1 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 1, 0, 2 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 2, 3, 1, 1, 4 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 3, 2, 1, 0, 4 ];
    console.log(nums + ' ' + canJump(nums));
};

main();
