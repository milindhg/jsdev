/* https://leetcode.com/problems/next-greater-element-ii/description/

Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number; 
The second 1's next greater number needs to search circularly, which is also 2.
Note: The length of given array won't exceed 10000.



Solution:   https://leetcode.com/submissions/detail/215953004/  beats 96.27% JS Submissions.
            https://leetcode.com/submissions/detail/800628148/  beats 100% JS Submissions.

            Get the max number in the array in linear time. Also note the index at which the max element was found. Try to get this index as the last/max index.
            Then come backwards from the noted index of max value. i.e. come from end of list to start of list in a circular fashion, i.e. if you reach 0th index, jump to last.
            Keep storing the max element and the elements found on the way in stack with below logic.
                If the current element is less than the top of stack, then note answer for that index as the top of stack.
                If the current element is equal to or greater than the element on top of stack, then pop the element from stack.

            Finally going by this approach, you're left with the answer.
            !!!Tricky part is to handle the scenarios where max element is repeated or some elements in the middle yet not max are repeated.


 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    var ans = new Array(nums.length).fill(-1);
    if (nums.length == 0) return [];
    var stk = [];
    var max = -Number.MAX_VALUE;

    var maxIndex = -1;
    var i = 0;
    //get max number and index at which max number is present in the array.
    nums.forEach((element, i) => {
        element >= max ? maxIndex = i : maxIndex = maxIndex;
        max = Math.max(max, element);
    });

    //Now go backwards from the index where we have max element in array.
    var iterator = maxIndex;
    stk.push(nums[iterator]);
    iterator == 0 ? iterator = nums.length - 1 : iterator -= 1;
    while (iterator != maxIndex) {
        while (nums[iterator] >= stkPeek(stk)) {
            stk.pop();
        }
        stk.length == 0 ? ans[iterator] = -1 : ans[iterator] = stkPeek(stk);
        stk.push(nums[iterator]);
        iterator == 0 ? iterator = nums.length - 1 : iterator -= 1;
    }
    // console.log(max + ' ' + maxIndex + ' ' + ans);
    return ans;
};

let stkPeek = (stk) => {
    return (stk.length > 0) ? stk[stk.length - 1] : "$";
}

var main = function () {
    console.log(nextGreaterElements([1, 2, 1]));
    console.log(nextGreaterElements([1, 2, 3, 4, 3]));
    console.log(nextGreaterElements([1, 2, 6, 4, 3]));
    console.log(nextGreaterElements([6, 2, 7, 4, 3]));
    console.log(nextGreaterElements([6, 5, 4, 3, 2, 1]));
    console.log(nextGreaterElements([1]));
    console.log(nextGreaterElements([6, 6, 6, 6]));
    console.log(nextGreaterElements([2, -3, -2, -1]));
    console.log(nextGreaterElements([1, 3, 2, 2, 3, 3, 2]));
};

main();

// [2,-1,2]
// [2,3,4,-1,4]
// [2,6,-1,6,6]
// [7,7,-1,6,6]
// [-1,6,6,6,6,6]
// [-1]
// [-1,-1,-1,-1]
// [-1,-2,-1,2]
// [3,-1,3,3,-1,-1,3]