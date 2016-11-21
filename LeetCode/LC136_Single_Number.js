/*

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
        
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var i = 1;
    var ans = nums[0];
    while (i < nums.length) {
        ans = nums[i] ^ ans;
        i++;
    }
    return ans;
};

var main = function () {
    var nums = [ 1, 1, 2 ];
    console.log(singleNumber(nums));
};

main();
