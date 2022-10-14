/* 

https://leetcode.com/problems/first-missing-positive/description/

Given an unsorted integer array, find the smallest missing positive integer.

TYPE:   MISSING NUMBER, ARRAY, LINEAR, TRICKY, HARD HARD HARD, 1toN Array Problem Pattern


Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.


Solution:   https://leetcode.com/submissions/detail/319985935/ beats 100% JS Submissions.

            Very very good problem and very tricky and indeed HARD.
            Remember to also refer the problem where we detect one missing number in an array of size n with numbers 1 to n in unsorted order.
            And also refer that there is just one duplicate number in an array of size n with numbers 1 to n in unsorted order.

            Very important to note these 2 problems for intuition of this problem.

            Also important to note that in this problem we're considering indices for answer as only beween 1 to n inclusive. No zero. 
            So consider array to be indexed from 1 for calculating ans.
            So first clean up the input array by removing any zeores or negative numbers and convert them into 1+n.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    if (nums.length < 1)
        return 1;
    //loop zero to mark all out of window numbers into 1+nums.length
    nums.forEach((num,i)=>{
        if (num <= 0 || num > nums.length)
            nums[i] = nums.length+1;
    });

        //Loop 1 to mark the numbers as negative when found
    //Since we want to handle numbers outside the window, we can name them as something like Number.MAX_VALUE etc. or some sentinel
    nums.forEach((num, i) => {
        num = Math.abs(num);
        if (num > 0 && num <= nums.length)
            nums[num - 1] = (-1 * Math.abs(nums[num - 1]));
    });

    let ans;
    //Loop 2 to find the number (i.e. index which has positive number) that is missing.
    nums.forEach((num, i) => {
        if (!ans && num > 0)
            ans = i + 1;
    });
    return (ans) ? ans : nums.length + 1;
};

var main = () => {
    console.log(firstMissingPositive([1,2,0]));
    console.log(firstMissingPositive([3, 4, -1, 1]));
    console.log(firstMissingPositive([7,8,9,11,12]));
    console.log(firstMissingPositive([]));
    console.log(firstMissingPositive([7]));
    console.log(firstMissingPositive([1,2,3,4]));
    console.log(firstMissingPositive([1,2]));
    console.log(firstMissingPositive([1]));
    console.log(firstMissingPositive([1,1]));
};
main();