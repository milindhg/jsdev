/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 *
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/
 *
 * algorithms
 * Easy (84.43%)
 * Likes:    258
 * Dislikes: 37
 * Total Accepted:    82.7K
 * Total Submissions: 98.5K
 * Testcase Example:  '[12,345,2,6,7896]'
 *
 * Given an array nums of integers, return how many of them contain an even
 * number of digits.
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [12,345,2,6,7896]
 * Output: 2
 * Explanation: 
 * 12 contains 2 digits (even number of digits). 
 * 345 contains 3 digits (odd number of digits). 
 * 2 contains 1 digit (odd number of digits). 
 * 6 contains 1 digit (odd number of digits). 
 * 7896 contains 4 digits (even number of digits). 
 * Therefore only 12 and 7896 contain an even number of digits.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [555,901,482,1771]
 * Output: 1 
 * Explanation: 
 * Only 1771 contains an even number of digits.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 10^5
 * 
 * Solution:    https://leetcode.com/submissions/detail/335196435/
 *              Beats 92.71% JS Submissions.
 * 
 * Runtime: O(n)
 * Space: O(1)
 * Simple calculation by dividing by 10 to get the number of digits in a number.
 * Do this for all elements in the array and keep counting even counts.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let countEvenNumDigits = 0;
    nums.forEach( num => findNumberOfDigits(num) % 2 == 0 ? countEvenNumDigits++ : countEvenNumDigits+=0 );
    return countEvenNumDigits;
};

let findNumberOfDigits = (num) => {
    let count = 0;
    while(num > 0){
        count++;
        num = Math.floor(num / 10);
    }
    return count;
};// @lc code=end

let main = () => {
    console.log(findNumbers([12,345,2,6,7896]));
};

main();