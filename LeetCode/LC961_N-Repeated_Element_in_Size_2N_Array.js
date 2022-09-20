/* 

https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

961. N-Repeated Element in Size 2N Array
Easy

1008

306

Add to List

Share
You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

 

Example 1:

Input: nums = [1,2,3,3]
Output: 3
Example 2:

Input: nums = [2,1,2,5,3,2]
Output: 2
Example 3:

Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
 

Constraints:

2 <= n <= 5000
nums.length == 2 * n
0 <= nums[i] <= 104
nums contains n + 1 unique elements and one of them is repeated exactly n times.
Accepted
187,859
Submissions
248,033

Solution:   https://leetcode.com/submissions/detail/799257478/  beats 62.09% JS Submissions
            https://leetcode.com/submissions/detail/799323147/  beats 81.99% JS Submissions 
            Very basic counter idea of having a map or set. and then responding back with the answer.


 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimesBasic = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]])
            map[nums[i]] += 1;
        else
            map[nums[i]] = 1;
        if (map[nums[i]] == nums.length / 2)
            return nums[i];
    }
};


//Very interesting concept here using the pigeon hole principle.
/* 
This problem is based on the PigeonHole principle. 
If you have N +1 pigeons and N cages, there must be at least one cage with more than one pigeon. 
By the same logic, one can derive that if we have N duplicate elements in a collection of 2N elements, it is impossible for 4 contiguous elements to all be unique. 
eg: if your array is [7,4,3,7], the 7's cannot be placed any farther apart. 
If your array has a 100 elements, if an element appears exactly twice in a window of 4 elements, there will be 25 distinct windows and 50 repeated elements.
If you distort any window to not have 2 elements, some other window will end up with the repeated element.
 */
//This way runtime is O(4n) but even in worst case we may not go all way uptil 4n times execution.
var repeatedNTimesBetter = function (nums) {
    let lookupOffset = [1, 2, 3];
    for (let i = 0; i < lookupOffset.length; i++) {
        for (let j = 0; j <= nums.length - 2; j++) {
            let number = nums[j];
            let offset = lookupOffset[i];
            if (number == nums[j + offset])
                return number;
        }
    }
};




let main = () => {
    console.log(repeatedNTimesBetter([5, 1, 5, 2, 5, 3, 5, 4]));
    console.log(repeatedNTimesBetter([2, 1, 2, 5, 3, 2]));
};

main();