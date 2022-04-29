/* https://leetcode.com/problems/degree-of-an-array/description/

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6
Note:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.


Solution:   https://leetcode.com/submissions/detail/210762259/ beats 78.20% JS Submissions.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var maxCnt = 1;
    var map = {};
    var i = 0;
    while(i<nums.length){
        if(map[nums[i]]) {
            map[nums[i]].count = map[nums[i]].count+1;
            map[nums[i]].lastOccurrence = i;
            maxCnt = (map[nums[i]].count > maxCnt) ? map[nums[i]].count : maxCnt;
        }
        else {
         map[nums[i]] = {count: 1, firstOccurrence: i, lastOccurrence: i};
        }
        i++;
    }
    
    var minLengthAns = nums.length;
    for(var index in map){
        if(map[index].count == maxCnt){
            var currCandidateSubArrLen = map[index].lastOccurrence - map[index].firstOccurrence + 1;
            minLengthAns = minLengthAns > currCandidateSubArrLen ? currCandidateSubArrLen : minLengthAns;
        }
    }
    return minLengthAns;
};

var main = function(){
    console.log(findShortestSubArray([1, 1, 2]));
    console.log(findShortestSubArray([1, 2]));
    console.log(findShortestSubArray([1, 2, 2, 3, 1]));
    console.log(findShortestSubArray([1,2,2,3,1,4,2]));
};

main();