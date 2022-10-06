/* 

https://leetcode.com/problems/running-sum-of-1d-array/

1480. Running Sum of 1d Array
Easy

4879

254

Add to List

Share
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
Accepted
961,842
Submissions
1,069,840

Solution:   https://leetcode.com/submissions/detail/816317538/  beats 96.98% JS Submissions
            Very simple for loop and keep pushing new runningSum into the answer array.
            Can also be done inplace if necessary.

            Runtime: O(n)
            Space: O(1)

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let ans = [];
    let runningSum = 0;
    nums.forEach((number, i) => {
        runningSum += number;
        ans.push(runningSum);
    });
    return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let ans = [];
    let runningSum = 0;
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        nums[i] = runningSum;
    }
    return nums;
};

let main = () => {
    console.log(runningSum([1, 2, 3, 4]));
    console.log(runningSum([1, 1, 1, 1, 1]));
    console.log(runningSum([3, 1, 2, 10, 1]));
};

main();

