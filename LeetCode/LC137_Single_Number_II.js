/* 
https://leetcode.com/problems/single-number-ii/description/

TYPE:   BITWISE, LAICH, BITWISE TRICKS, AND OR XOR

Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,3,2]
Output: 3
Example 2:

Input: [0,1,0,1,0,1,99]
Output: 99


Solution:   This problem can be easily done in linear time using some kind of structure like a dictionary/map etc.
            But to solve it in linear time and also using constant space is the real trick where Bitwise operations and their understanding come handy.

            You need to understand properly what happens when bitwise operators are applied to decimal numbers to properly visualize the problem.
            Best way is to take an example and convert it into binary numbers and then check.

            First, calculate the number of 1s in each bit about each number in the input array.
            if in one bit, the number of 1s can be divided by 3, then ths bit of result will be 0. Otherwise, it will be 1.
            E.g. input: [2,2,3,2]
            (2): 1 0
            (2): 1 0
            (3): 1 1
            (2): 1 0
            count: 4 1
            We can see that the number of 1s in these two bits cannot be devided by 3. So, the result will be 3 (11).

            https://leetcode.com/submissions/detail/318508709/  beats 83% JS SUbmissions.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for(var i=0; i<32; i++){
        let count = 0;
        nums.forEach((num, j)=>{
            var iThBitSetNum = ((1 << i) & num);
            if(iThBitSetNum != 0)
                count++;
        });
        result = result | ((count % 3) << i);
    }
    return result;
};

var main = () => {
    console.log(singleNumber([2,2,2,3]));
    console.log(singleNumber([1,0,0,1,0,1,99]));
}

main();