/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

*/

/*
Solution: https://leetcode.com/submissions/detail/817561509/ : Beats 80.37% of JS submissions.
Keep 2 pointers at start and end. Then then meet in the middle while summing the numbers at 2 indices and comparing to the target sum.

*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    var i = 0;
    var j = numbers.length - 1;
    while (i < j) {
        var sum = numbers[i] + numbers[j];
        if (sum < target) {
            i++;
        } else if (sum > target) {
            j--;
        } else {
            return [i + 1, j + 1];
        }
    }
};

var main = function () {
    var numbers = [2, 7, 11, 15];
    var target = 9;
    console.log(twoSum(numbers, target));
};

main();