/*

https://leetcode.com/problems/first-missing-positive/
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space

*/
/*
Solution:   This is yet to be completed. 
TODO this problem is yet incomplete.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositiveIncomplete = function (nums) {
    var cursor = 0;
    while (cursor < nums.length) {
        var target = nums[cursor];
        // While the number is positive, and value is within the length range.
        // Get the numbers to their correct position. Example nums[0]=0, nums[1]=1 and so on.
        while (target < nums.length && target != nums[target]) {
            var temp = nums[target];
            nums[target] = target;
            nums[cursor] = temp;
        }
        cursor++;
    }

    console.log('Nums now is: ' + nums);
    cursor = 0;
    while (cursor < nums.length) {
        // If the number on index, is not same as value at that index then that index is the missing
        // positive number.
        if (nums[cursor] != cursor) {
            return cursor;
        }
        cursor++;
    }
    return nums.length;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    if (nums.length < 1)
        return 1;
    //loop zero to mark all out of window numbers into 1+nums.length
    nums.forEach((num,i)=>{
        if (num <= 0 || num > nums.length)
            nums[i] = nums.length+1;
    });

        //Loop 1 to mark the numbers as negative when found
    //Since we want to handle numbers outside the window, we can name them as something like Number.MAX_VALUE etc. or some sentinel
    nums.forEach((num, i) => {
        num = Math.abs(num);
        if (num > 0 && num <= nums.length)
            nums[num - 1] = (-1 * Math.abs(nums[num - 1]));
    });
    // console.log(nums);
    let ans;
    //Loop 2 to find the number (i.e. index which has positive number) that is missing.
    nums.forEach((num, i) => {
        if (!ans && num > 0)
            ans = i + 1;
    });
    return (ans) ? ans : nums.length + 1;
};

var main = function () {
    var nums = [ 3, 4, -1, 1 ];
    console.log(firstMissingPositive(nums));
};

main();