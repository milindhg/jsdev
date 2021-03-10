/*

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

*/

/*
Solution:   https://leetcode.com/submissions/detail/96421254/ - beats 79.16% js submissions.
Since the array is already sorted, a simple linear run through the array can
give the solution.  We can maintain a pointer to write the current element at
the tracked index. This will be written only if the current element is not same
as last element seen.  This means that basically we're copying the existing
array to a new array only if the current element is not duplicate of the last
seen element.  So since we're copying and doing in place, we're maintaining the
pointer writeAtIndex which increments only when there is no duplicate element.
Finally we return the value of this writeAtPointer.
            
MAIN intuition here is to see that the unique elements are being copied to a new
array only in here IN PLACE.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums === null || nums.length == 0)
        return 0;
    var i = 1;
    var writeAtIndex = 1;
    while (i < nums.length) {
        if (nums[i] != nums[i - 1]) {
            nums[writeAtIndex++] = nums[i++];
        } else {
            i++;
        }
    }
    return writeAtIndex;
};

var main = function () {
    var nums = [ 11, 22, 22, 3, 3, 4, 55 ];
    console.log(removeDuplicates(nums));
};

main();