/* 

https://leetcode.com/problems/number-of-good-pairs/

Similar geeks problems = 

1512. Number of Good Pairs
Easy

2996

158

Add to List

Share
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
Accepted
345,972
Submissions
392,549


Solution:   https://leetcode.com/submissions/detail/803049673/  beats 25.32% JS Submissions
            Very simple approach, prepare a map and use formula.
            Map will be - keys are elements present in the map such that they repeat in the array.
            value for key will be the array of indices at which each repeating element repeats.
            Finally apply the formula - n * (n -1) / 2 i.e. combination count of the number of indices of repeated elements in the array.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let map = new Map();
    nums.forEach((number, i) => {
        if (map.has(number)) {
            map.get(number).push(i);
        } else {
            map.set(number, [i]);
        }
    });

    let ans = 0;
    [...map.values()].forEach(arr => {
        let n = arr.length;
        ans += n * (n - 1) / 2;
    });
    return ans;
};

let main = () => {
    let utils = require("../Utilities/GeneralUtils");
    let u = new utils();
    u.answerValidator(numIdenticalPairs([1, 2, 3, 1, 1, 3]), 4);
    u.answerValidator(numIdenticalPairs([1, 1, 1, 1]), 6);
    u.answerValidator(numIdenticalPairs([1, 2, 3]), 0);
    u.answerValidator(numIdenticalPairs([3]), 0);
}

main();