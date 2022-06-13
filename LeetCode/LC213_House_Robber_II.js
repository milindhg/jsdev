/*
https://leetcode.com/problems/house-robber-ii/
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000
Accepted
405,671
Submissions
1,013,907



/*
Solution:   Since House[1] and House[n] are adjacent, they cannot be robbed together. Therefore, the problem becomes to rob either House[1]-House[n-1] or House[2]-House[n], depending on which choice offers more money. Now the problem has degenerated to the House Robber, which is already been solved.

            Now to solve house robber which is problem 198, below is strategy.
            Easier and efficient approach - https://leetcode.com/submissions/detail/305827074/  beats 92.78% JS Submissions.
            It is based on dynamic programming with memoization.
            just have 3 cases - 
            Case 1: empty nums. - return 0
            Case 2: only 1 house - return that house value.
            Case 3: more than 1 house. Then start preparing the memoization array.
            For 2 houses its simple. Pick the max value of the 2.
            But as houses increase, find what is more - current last house + value of all the remaining houses except the previous house. OR
            Don't rob current house and rob maximum till the previous house.

            Automatically the memoization array is built and return the last element number from the memoization array.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    return Math.max(robNewDPMem(nums.slice(0, nums.length - 1)), robNewDPMem(nums.slice(1, nums.length)));
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var robNewDPMem = function (nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    var mem = [];
    mem.push(nums[0]);
    mem.push(Math.max(nums[0], nums[1]));
    for (var i = 2; i < nums.length; i++) {
        mem.push(Math.max(mem[i - 1], mem[i - 2] + nums[i]));
    }
    return mem[nums.length - 1];
};

var main = function () {
    var nums = [2, 7, 9, 3, 1];
    console.log(robNew(nums));
};

main();