/*

https://leetcode.com/problems/power-of-four/?tab=Description

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
        

*/
/*
Solution:   A simple way to go about it is to run a loop on multiplying 4 by 4 or say raising to the next power of 4, 
            till you get the answer is less than or equal to the given number.
            Each time you keep counting how many times you've multiplied by 4.
            
            https:// leetcode.com/submissions/detail/93614819/
            An approach without using any loops is to check 2 conditions. 
                1. Whether the number is power of 2
                       To check this by anding it with 1 number less than it. If anding comes to zero then the given number is a power of 2.
                       Also all the powers of 2 share 1 property. 
                       Their binary representation have 1 bit only in the odd places. 
                       So we create a mask with a 1 bit in even places and see whether anding gives zero. 
                2. log to the base 4 for the number is a whole number.
                        Finding log to the base 4 for num is log to the base 2 for that number divided by log 4 to the base 2.
                        
                Using step 1 we basically reduce the number of reduce the chance of neglecting all the numbers which are not power of 2.
                This calculation is done faster in step 1. so we reduce the time complexity drastically by reducing our search space.
*/
/**
 * @param {number} num
 * @return {boolean}
 * @runtime: https://leetcode.com/submissions/detail/93614819/ Runtime of this approach beats the
 *           other javascript solutions by 94.44%
 * 
 */
var isPowerOfFour = function (num) {
    if (isPowerOfTwo(num) && Number.isInteger(log4(num))) {
        return true;
    } else {
        return false;
    }
};

/**
 * @param {number} num
 * @return {boolean}
 * 
 * 
 * 
 */
var isPowerOfTwo = function (num) {
    // console.log(parseInt(55555555,16).toString(2));
    // 55555555 in Hex is 1010101010101010101010101010101 in Binary. So only odd positions are 1.
    // Anding it if result is anything other than zero, it means some of the odd bit in the number
    // is 1. So got the answer.
    // console.log(parseInt("1010101010101010101010101010101",2)); //This will give the number to be
    // used in decimal format.
    if (num === 1) {
        return true;
    }
    if (num <= 0) {
        return false;
    }
    if ((num & (num - 1)) !== 0) {
        return false;
    }

    var maskingNumberInHex = parseInt("1010101010101010101010101010101", 16);
    if ((num & maskingNumberInHex) !== 0) {
        return false;
    }
    return true;

};

/**
 * @param {number} num
 * @return {boolean}
 * 
 * Runtime of this approach beats the other javascript solutions by 15%
 * 
 */
var isPowerOfFourUsingLog = function (num) {
    // console.log("Log of " + num + " to the base 4 is: " + log4(num));
    if (Number.isInteger(log4(num))) {
        return true;
    } else {
        return false;
    }
};

var log4 = function (num) {
    return Math.log(num) / Math.log(4);
}

var main = function () {
    var num = 16;
    console.log(isPowerOfFour(num));
}

main();