/* 

https://leetcode.com/problems/minimum-absolute-sum-difference/

1818. Minimum Absolute Sum Difference
Medium

734

58

Add to List

Share
You are given two positive integer arrays nums1 and nums2, both of length n.

The absolute sum difference of arrays nums1 and nums2 is defined as the sum of |nums1[i] - nums2[i]| for each 0 <= i < n (0-indexed).

You can replace at most one element of nums1 with any other element in nums1 to minimize the absolute sum difference.

Return the minimum absolute sum difference after replacing at most one element in the array nums1. Since the answer may be large, return it modulo 109 + 7.

|x| is defined as:

x if x >= 0, or
-x if x < 0.
 

Example 1:

Input: nums1 = [1,7,5], nums2 = [2,3,5]
Output: 3
Explanation: There are two possible optimal solutions:
- Replace the second element with the first: [1,7,5] => [1,1,5], or
- Replace the second element with the third: [1,7,5] => [1,5,5].
Both will yield an absolute sum difference of |1-2| + (|1-3| or |5-3|) + |5-5| = 3.
Example 2:

Input: nums1 = [2,4,6,8,10], nums2 = [2,4,6,8,10]
Output: 0
Explanation: nums1 is equal to nums2 so no replacement is needed. This will result in an 
absolute sum difference of 0.
Example 3:

Input: nums1 = [1,10,4,4,2,7], nums2 = [9,3,5,1,7,4]
Output: 20
Explanation: Replace the first element with the second: [1,10,4,4,2,7] => [10,10,4,4,2,7].
This yields an absolute sum difference of |10-9| + |10-3| + |4-5| + |4-1| + |2-7| + |7-4| = 20
 

Constraints:

n == nums1.length
n == nums2.length
1 <= n <= 105
1 <= nums1[i], nums2[i] <= 105
Accepted
17,647
Submissions
58,608

Solution:   https://leetcode.com/submissions/detail/804239484/  beats 41.67% JS Submissions.
            Good thinking problem.
            1. Copy the nums1 array and Sort it 
            2. Then using the nums1 and sorted nums1 copy array, compare and keep getting diff between nums1 and nums2 VS replaced closes number from sorted nums1 and nums2.
            3. For getting the closest number to respective number for min difference with num2, use the binary search approach in the sorted array.
            4. Keep checking which index in nums1 is giving maximum benefit or minimum diff in the total answer.
            5. Finally adjust the answer to remove the diff from the best match and add the maximum benefit diff.

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
    const MOD = 1e9 + 7;
    let answer = 0;
    let nums1Sorted = [];
    nums1.forEach(element => nums1Sorted.push(element));
    nums1Sorted = nums1Sorted.sort((a, b) => a - b);
    let maxGain = [0, -1];
    let i = 0;
    while (i < nums1.length) {
        let currentDiff = Math.abs(nums1[i] - nums2[i]);
        let probablyGainfulDiff = Math.abs(nums1Sorted[closestNumberIndex(nums1Sorted, nums2[i])] - nums2[i]);
        if ((probablyGainfulDiff - currentDiff) < maxGain[0]) {
            maxGain = [probablyGainfulDiff - currentDiff, i];
        }
        answer += Math.abs(nums1[i] - nums2[i]);
        i++;
    }
    answer += maxGain[0];
    return answer % MOD;
};


let closestNumberIndex = (sortedArr, target) => {
    if (!sortedArr || sortedArr.length < 1)
        return -1;
    else if (target < sortedArr[0])
        return 0;
    else if (target > sortedArr[sortedArr.length - 1])
        return sortedArr.length - 1;
    else {
        let start = 0;
        let end = sortedArr.length - 1;
        while (start + 1 < end) {
            let mid = Math.floor((start + end) / 2);
            if (sortedArr[mid] <= target) {
                start = mid;
            } else {
                end = mid;
            }
        }

        let left = Math.abs(sortedArr[start] - target);
        let right = Math.abs(sortedArr[end] - target);
        return (left <= right) ? start : end;
    }

}

let main = () => {
    let Util = require("../Utilities/GeneralUtils");
    let u = new Util();
    let nums1 = [1, 7, 5];
    let nums2 = [2, 3, 5];
    u.answerValidator(minAbsoluteSumDiff(nums1, nums2), 3);
    nums1 = [1, 10, 4, 4, 2, 7];
    nums2 = [9, 3, 5, 1, 7, 4];
    u.answerValidator(minAbsoluteSumDiff(nums1, nums2), 20);
    nums1 = [5, 4, 7];
    nums2 = [10, 8, 10];
    u.answerValidator(minAbsoluteSumDiff(nums1, nums2), 9);
};

main();
/* 
Test cases
[1,7,5]
[2,3,5]
[5,4,7]
[10,8,10]
[2,4,6,8,10]
[2,4,6,8,10]
[1,10,4,4,2,7]
[9,3,5,1,7,4]

 */