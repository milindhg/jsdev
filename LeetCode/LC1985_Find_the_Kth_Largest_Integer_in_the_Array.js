/* 
https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/

1985. Find the Kth Largest Integer in the Array
Medium

638

87

Add to List

Share
You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.

Return the string that represents the kth largest integer in nums.

Note: Duplicate numbers should be counted distinctly. For example, if nums is ["1","2","2"], "2" is the first largest integer, "2" is the second-largest integer, and "1" is the third-largest integer.

 

Example 1:

Input: nums = ["3","6","7","10"], k = 4
Output: "3"
Explanation:
The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
The 4th largest integer in nums is "3".
Example 2:

Input: nums = ["2","21","12","1"], k = 3
Output: "2"
Explanation:
The numbers in nums sorted in non-decreasing order are ["1","2","12","21"].
The 3rd largest integer in nums is "2".
Example 3:

Input: nums = ["0","0"], k = 2
Output: "0"
Explanation:
The numbers in nums sorted in non-decreasing order are ["0","0"].
The 2nd largest integer in nums is "0".
 

Constraints:

1 <= k <= nums.length <= 104
1 <= nums[i].length <= 100
nums[i] consists of only digits.
nums[i] will not have any leading zeros.
Accepted
35,340
Submissions
79,078


 */

var PQ = require('../Utilities/PriorityQueue');

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 * 
 * This technique method works but has its own problems especially when the integer is too huge.
 * 
 */
var kthLargestNumber = function (nums, k) {
    return nums.sort((a, b) => (parseInt(b) - parseInt(a)))[k - 1];
};


/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 * 
 * The input is in string is a hint that direct integer conversion is NOT the way. Instead easier comparison method can be written to selectively compare strings only if their lengths are same. If lengths are same, then the MSB with greater value is larger number.
 * 
 * 
 */
 var kthLargestNumber = function(nums, k) {
    var ansArr = nums.sort((a, b) => {
        if(a.length > b.length) return -1;
        else if(a.length < b.length) return 1;
        else if(a < b) return 1;
        else if(b < a) return -1;
        else return 0;
    });
    return ansArr[k-1];
};

var main = () => {
    console.log(kthLargestNumber(["3","6","7","10"], 4));
    console.log(kthLargestNumber(["3","6","7","10"], 2));
    console.log(kthLargestNumber(["3","6","7","10"], 1));
};

main();