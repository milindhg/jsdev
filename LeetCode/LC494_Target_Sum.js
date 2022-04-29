/* https://leetcode.com/problems/target-sum/description/


You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
Note:
The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.


Solution:   https://leetcode.com/submissions/detail/205019709/ beats 71.43 % JS Submissions.
            Although it runs good in Javascript, it is not the best solution. since the run time of this solution is O(2^n) where n is the number of given integers in array.


 */


/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    return findTargetSumWaysHelper(0, nums, S, 0);
};

var findTargetSumWaysHelper = function(currIndex, nums, S, valSoFar){
    if(currIndex == nums.length){
        return (S == valSoFar ? 1 : 0);
    }else{
        var ans = findTargetSumWaysHelper(currIndex+1, nums,S, valSoFar+nums[currIndex]) + findTargetSumWaysHelper(currIndex+1, nums,S, valSoFar-nums[currIndex]);
        return ans;
    }
};

var main = function(){
    var nums = [1,1,1,1,1];
    var S = 3
    console.log(findTargetSumWays(nums, S));
};

main();