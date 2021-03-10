/*
https://leetcode.com/problems/maximum-subarray/description/
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/*
Solution:   https://leetcode.com/submissions/detail/111976535/ 
            beats 77.71 % of other js submissions.

Use kadane's algorithm with 2 variables to track current max and max so far.
Also keep in mind that since kadane's algorithm cannot solve the problem for
negative values or arrays with only negatives.  We use special handling to check
if the array has at least 1 positive number. If yes, return that positive
number.  If array is empty return -Infinity.


There is an easier to read and understand simple solution to handle both +ve and
-ve numbers.
https://leetcode.com/submissions/detail/339978548/
beats 94.28% JS Submissions.
Just have local max and global max. Keep updating global max only if local max
is greater than global max.
For local max keep checking if it goes below 0, then update it to the next
available number otherwise keep adding next number into local max.


Much more easier to understand solution and 2 lines code-
https://leetcode.com/submissions/detail/339980344/
beats 98% JS Submissions.

*/

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/submissions/detail/111976535/ beats 77.71 % of other js submissions.
 * 
 */
var maxSubArray = function (nums) {
    var currMax = -Infinity;
    var max = -Infinity;
    var leastNegative = -Infinity;
    var atLeastOnePositiveNumFlag = false;

    // Condition to handle empty array input.
    if (nums.length == 0) {
        return -Infinity;
    }

    var i = 0;
    currMax = nums[i];
    if (atLeastOnePositiveNumFlag == false && nums[i] >= 0)
        atLeastOnePositiveNumFlag = true;
    if (nums[i] > leastNegative)
        leastNegative = nums[i];
    if (max < currMax) {
        max = currMax;
    }
    i++;

    while (i < nums.length) {

        // Code to handle the negative values. or array with only negative values.
        if (nums[i] > leastNegative)
            leastNegative = nums[i];
        if (atLeastOnePositiveNumFlag == false && nums[i] >= 0)
            atLeastOnePositiveNumFlag = true;

        // Basic Kadane's Algorithm.
        var temp = currMax + nums[i];
        if (currMax <= 0 && nums[i] > currMax) {
            currMax = nums[i];
        } else if (currMax >= 0 && temp < 0) {
            currMax = 0;
        } else {
            currMax = temp;
        }

        if (max < currMax) {
            max = currMax;
        }

        i++;
    }

    // Code to handle the negative values. or array with only negative values.
    if (atLeastOnePositiveNumFlag === false) {
        return leastNegative;
    } else {
        return Math.max(max, currMax);
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * @time    O(n)
 * @space   O(1)
 */
var maxSubArraySimple = function(nums) {
    let curMax = nums[0];
    let max = nums[0];
    
    for(let i = 1; i< nums.length; i++){
        if(curMax < 0)
            curMax = nums[i];
        else
            curMax += nums[i]
        max = Math.max(curMax, max);
    }
    
    return max;
};


/**
 * @param {number[]} nums
 * @return {number}
 * @time    O(n)
 * @space   O(1)
 */
var maxSubArrayEvenMoreSimple = function(nums) {
    let curMax = -Infinity;
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++){
        curMax = Math.max(nums[i], curMax + nums[i]);
        max = Math.max(max, curMax);
    }
    return max;
};



let main = () => {
    console.log(maxSubArraySimple([-2,1,-3,4,-1,2,1,-5,4]));
    console.log(maxSubArrayEvenMoreSimple([-2,1,-3,4,-1,2,1,-5,4]));
};

main();