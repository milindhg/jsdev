/*
https://leetcode.com/problems/single-number/
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
        
*/
/*
Solution:   https://leetcode.com/submissions/detail/91223277/
            One way to go about is to count numbers, multiply count by the repetitive number. 
            Then sum all numbers and find the difference. So you get the answer.
            
            Another more efficient way, i.e. without using extra memory is to XOR all numbers.
            XOR any number with itself will give zero. And XOR zero with any number will give that number.
            This gets runtime performance to 98%.
            
            Runtime: O(n)
            Space: O(1)
            
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
