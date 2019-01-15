/*  
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

TYPE: MEDIUM
TYPE: TRICKY

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

/*
Solution:   https://leetcode.com/submissions/detail/112918272/ beats 12% of other js solutions.
            Basic approach here is to use number negation i.e. modify the given input array to get the answer.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    var i = 0;

    // Negate the numbers present at the index. Index is the value present at the current iterator.
    console.log(nums);
    while (i < nums.length) {
        var index = nums[i];
        if (index < 0) {
            index = index * -1;
        }

        // If the number is already negative, don't make it positive by negating again.
        if (nums[index - 1] > 0)
            nums[index - 1] = -1 * nums[index - 1];
        i++;
    }
    console.log(nums);
    // At this point all the numbers will be negative except at those index places which we didn't
    // get by traversing the array.
    // So those indexes where numbers are positive is our answer.
    var answer = [];
    i = 0;
    while (i < nums.length) {
        if (nums[i] > 0)
            answer.push(i + 1);
        i++;
    }

    return answer;
};

var main = function () {
    var nums = [ 4, 3, 2, 7, 8, 2, 3, 1 ];
    console.log(findDisappearedNumbers(nums));
};

main();