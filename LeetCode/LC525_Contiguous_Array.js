/*
https://leetcode.com/problems/contiguous-array/description/

Given a binary array, find the maximum length of a contiguous subarray with
equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal
number of 0 and 1. Note: The length of the given binary array will not exceed
50,000.

Solution:   https://leetcode.com/submissions/detail/324404979/  beats 54.31% JS
Submissions.

Just by using Map() object instead of regular json object, the performance can
be improved. https://leetcode.com/submissions/detail/324447664/  beats 75.86% JS
Submissions.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let ongoingSum = 0;
    let myMap = new Map();
    myMap.set(0,-1);
    let maxLen = 0;
    nums.forEach((num, i) => {
        (num == 0) ? ongoingSum -= 1 : ongoingSum += 1;
        if(!myMap.has(ongoingSum))
            myMap.set(ongoingSum, i);
        maxLen = Math.max(maxLen, i - myMap.get(ongoingSum));
    });

    return maxLen;
};

var main = () => {
    console.log(findMaxLength([1, 1, 0, 1, 0, 1]));
    console.log(findMaxLength([1, 1]));
    console.log(findMaxLength([1, 0]));
    console.log(findMaxLength([0, 1]));
    console.log(findMaxLength([0, 1, 0]));
};

main();