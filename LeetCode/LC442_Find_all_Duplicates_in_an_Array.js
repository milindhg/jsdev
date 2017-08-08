/*
https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/*
Solution:   https://leetcode.com/submissions/detail/112919249/ beats 83% of other js submissions.
            Basic approach here is to use number negation i.e. modify the given input array to get the answer.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    var i = 0;

    var answer = [];
    // Negate the numbers present at the index. Index is the value present at the current iterator.
    while (i < nums.length) {
        var index = nums[i];
        if (index < 0) {
            index = index * -1;
        }

        // If the number is already negative, don't make it positive by negating again.
        if (nums[index - 1] > 0)
            nums[index - 1] = -1 * nums[index - 1];
        else if (nums[index - 1] < 0)
            answer.push(index);
        i++;
    }

    return answer;

};

var main = function () {
    var nums = [ 4, 3, 2, 7, 8, 2, 3, 1 ];
    console.log(findDuplicates(nums));
};

main();