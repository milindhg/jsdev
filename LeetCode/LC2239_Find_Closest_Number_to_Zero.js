/* 

https://leetcode.com/problems/find-closest-number-to-zero/

2239. Find Closest Number to Zero
Easy

259

20

Add to List

Share
Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

 

Example 1:

Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is |-4| = 4.
The distance from -2 to 0 is |-2| = 2.
The distance from 1 to 0 is |1| = 1.
The distance from 4 to 0 is |4| = 4.
The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.
Example 2:

Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.
 

Constraints:

1 <= n <= 1000
-105 <= nums[i] <= 105
Accepted
27,923
Submissions
60,972

Solution:   https://leetcode.com/submissions/detail/804766081/  beats 70% JS Submissions
            Runtime: O(n)
            Space: O(n/2)
            A map approach to keep storing best candidate numbers with least distance from 0. Here the key will be distance and value will be best candidate with this min distance. 
            To lookup this key in map quickly, you can also keep track of minimum distance using minDiff variable which will be always maintained as mininum possible distance from zero.

            https://leetcode.com/submissions/detail/804760180/  beats 32.07% JS Submissions
            Runtime: O(nlogn)
            Space: O(1)
            This is solved by using binary search approach by giving a target and finding closest number to target. 
            However, since the input array nums is not sorted already first it needs to be sorted which makes the time complexity of this approach O(nlogn)

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime is O(n)
//Space is O(n/2)
var findClosestNumber = function (nums) {
    // return closestNumberInSortedArray(nums.sort((a,b) => a-b), 0);
    let minDiff = Number.MAX_VALUE;
    let map = {}; // key is diff with 0 and value is the best candidate value
    nums.forEach(number => {
        let diff = Math.abs(number - 0);
        minDiff = Math.min(minDiff, diff);
        if (map[diff]) {
            map[diff] = (number > map[diff]) ? number : map[diff];
        } else {
            map[diff] = number;
        }
    });

    return map[minDiff];
};


//Runtime is O(logn). But the sorting runtime is nlog(n) to obtain the sorted array first. Hence map approach is better.
//Space is O(1)
var findClosestNumberWithBinarySearch = function (nums) {
    return closestNumberInSortedArray(nums.sort((a, b) => a - b), 0);
};

let closestNumberInSortedArray = (sortedArr, target) => {
    let lastIndex = sortedArr.length - 1;
    if (!sortedArr || sortedArr.length == 0) return null;
    else if (target < sortedArr[0])
        return sortedArr[0];
    else if (target > sortedArr[lastIndex])
        return sortedArr[lastIndex];
    else {
        let start = 0;
        let end = lastIndex;
        while (start + 1 < end) {
            let mid = Math.ceil((start + end) / 2);
            if (sortedArr[mid] <= target) {
                start = mid;
            } else {
                end = mid;
            }
        }

        let left = Math.abs(sortedArr[start] - target);
        let right = Math.abs(sortedArr[end] - target);
        return (left < right) ? sortedArr[start] : sortedArr[end];
    }
}

let main = () => {
    let Util = require("../Utilities/GeneralUtils");
    let u = new Util();
    let nums = [-4, -2, 1, 4, 8];
    u.answerValidator(findClosestNumber(nums), 1);
    nums = [2, -1, 1];
    u.answerValidator(findClosestNumberWithBinarySearch(nums), 1);
};

main();