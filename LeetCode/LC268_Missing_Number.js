/**
 * 
 * https://leetcode.com/problems/missing-number/
 * 
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is
 * missing from the array.
 * 
 * For example, Given nums = [0, 1, 3] return 2.
 * 
 * Note: Your algorithm should run in linear runtime complexity. Could you implement it using only
 * constant extra space complexity?
 * 
 */

/*
Solution:   https://leetcode.com/submissions/detail/91946651/
            Take sum of all the numbers,
            Take sum of first n numbers where n is length of the nums array.
            Since the numbers start from 0 to n, the answer is difference between the two sums above.
            
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var sum = 0;
    for ( var i in nums) {
        sum += nums[i];
        // console.log(sum);
    }
    var projectedSum = nums.length * (nums.length + 1) / 2;
    // console.log(projectedSum);
    return (projectedSum - sum);
};

var main = function () {
    var nums = [ 0, 1, 3 ];
    console.log(missingNumber(nums));
};

main();