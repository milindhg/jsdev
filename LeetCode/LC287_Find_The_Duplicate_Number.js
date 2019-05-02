/* https://leetcode.com/problems/find-the-duplicate-number/description/

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.


TYPE: TRICKY, LINKEDLIST, ARRAY, MAST, COOL

Solution:   https://leetcode.com/submissions/detail/226247344/ beats 99.09% JS Submissions.
            This problem is very similar to the cycle detection problem in linkedlist.
            Only visualise this problem array as linkedlist in a way that the array indices are pointers in linked list. 
            And the value inside the index in array denotes which the ListNode whose val is the value and current node points next to this node.
            Eg. The array [1,3,4,2,2] transforms into [1]->[3]->[2]->[4] and 4 points back to 2. so cycle at 2.
            So in this linked list, wherever the cycle starts that node has the number which is duplicate.
            So we will return the index value after we reach that node in the array form of traversal.



 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var tortoise = 0;
    var rabbit = 0;
    // console.log(tortoise + " " + rabbit);
    while(true){
        tortoise = nums[tortoise];
        rabbit = nums[nums[rabbit]];
        // console.log(tortoise + " " + rabbit);
        if(tortoise==rabbit)
            break;
    }
    tortoise = 0;
    while(tortoise!=rabbit){
        tortoise = nums[tortoise];
        rabbit = nums[rabbit];
    }
    return rabbit;
};

var main = function(){
    console.log(findDuplicate([1,3,4,2,2]));
    console.log(findDuplicate([3,1,3,4,2]));
    console.log(findDuplicate([2,5,9,6,9,3,8,9,7,1]));
};

main();