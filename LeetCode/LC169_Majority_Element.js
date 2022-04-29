/*
https://leetcode.com/problems/majority-element/
Given an array of size n, find the majority element. The majority element is the
element that appears more than n/2 times.

You may assume that the array is non-empty and the majority element always exist
in the array.

    
*/
/*
Solution:   https://leetcode.com/submissions/detail/91255645/
The sorting will take care of the majority element to be present at the middle
of the array.  Then simply return the middle element.
Runtime: O(nlogn)
Space: O(1)

https://leetcode.com/submissions/detail/91793489/
A better solution would be to run a loop on the numbers and every time keep
track of the current majority element and its count.
Runtime: O(n)
Space: O(1)

Little tweaking in the loop improves the runtime performance on leetcode
servers.
https://leetcode.com/submissions/detail/335179999/ beats 97.71% JS Submissions.


Also quick and good explanations available here:
https://leetcode.com/articles/majority-element/

*/
/**
 * @param {number[]} nums
 * @return {number}
 * @runtime O(nlogn)
 */
var majorityElement = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    return nums[Math.floor(nums.length / 2)];
};

/**
 * @param {number[]} nums
 * @return {number}
 * @runtime O(n)
 */
var majorityElementBetter = function (nums) {

    var maxElem = nums[0];
    var maxElemCount = 1;
    var i = 1;
    while (i < nums.length) {
        if (nums[i] == maxElem)
            maxElemCount++;
        else
            maxElemCount--;
        if (maxElemCount === 0) {
            maxElem = nums[i];
            maxElemCount = 1;
        }

        i++;
    }
    return maxElem;
};

/**
 * @param {number[]} nums
 * @return {number}
 * @runtime O(n)
 */
var majorityElementLittleMoreBetter = function (nums) {

    var maxElem = nums[0];
    var maxElemCount = 1;
    var i = 1;
    nums.forEach((num)=>{
        if(num == maxElem)
            maxElemCount++;
        else
            maxElemCount--;
        if(maxElemCount === 0){
            maxElem = num;
            maxElemCount = 1;
        }
    });
    return maxElem;
};


var main = function () {
    nums = [ 3, 2, 3 ];
    console.log(majorityElement(nums));
};

main();