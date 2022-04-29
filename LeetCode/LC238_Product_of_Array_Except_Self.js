/* 
https://leetcode.com/problems/product-of-array-except-self/description/

Given an array nums of n integers where n > 1,  return an array output such that
output[i] is equal to the product of all the elements of nums except nums[i].

TYPE:   VERY VERY TRICKY, LINEAR, YENAR YENAR YENAR, PAPER FUTLA, ARRAY, LINEAR
TRICKY, DOUBLE PASS, LEFT TO RIGHT RIGHT TO LEFT, LTOR RTOL, From Both side pass
algorithm pattern in array.

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or
suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up: Could you solve it with constant space complexity? (The output array
does not count as extra space for the purpose of space complexity analysis.)


Solution:   https://leetcode.com/submissions/detail/325074699/  beats 89% JS
Submissions.

            FIRST very IMp intuition should be to try to do something from both 
            sides of the array.
            However not at the same time but one after the other.

            just start multiplying numbers after first element when starting from
            left to right and build an array.
            Then with the same built answer array in picture, start multiplying 
            built array elements with the right element starting from right as 1 
            for the very first element from right.

            You will keep accumulating product of numbers from nums in right and 
            keep updating the ans array till the fromRight variable reaches to 
            the start of ans/nums array.
            Finally you end up with your final ans array. Return it.


            Very unique combination of 2 passes from left to right and right to left.!!!!


 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let fromLeft = 1;
    let ans = new Array();
    ans.push(fromLeft);
    for(i=1; i<nums.length; i++){
        ans.push(ans[ans.length-1] * nums[i-1]);
    }
    // console.log(ans);
    
    let fromRight = 1;
    for(i=nums.length-1; i>=0; i--){
        ans[i] *= fromRight;
        fromRight *= nums[i];
    }
    
    // console.log(ans);
    return ans;
};

var main = () => {
    console.log(productExceptSelf([1,2,3,4]));
    console.log(productExceptSelf([5,4,3,2]));
    console.log(productExceptSelf([6,3,5,2]));
};

main();