/* 
https://leetcode.com/problems/add-to-array-form-of-integer/description/

For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

TYPE:   ARRAY, LINEAR Problems, VERY TRICKY

Example 1:

Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
Example 4:

Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000
 

Note：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
If A.length > 1, then A[0] != 0


Solution:   https://leetcode.com/submissions/detail/313118561/  beats 42.60% JS Submissions.
            Very similar to problem 415. i.e. addition of the 2 numbers represented in string.
            Most tricky part here is we cannot obtain the full number in integer form since the length of array or string can be very long. 
            So there will be integer overflow whenever there is such a huge number.
            So such huge number can only be represented as a Big String or a Big Array of digits.

            So adding or subtracting etc can be done only one digit at a time.

 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    var kArr = prepareKArr(K);
    var i = A.length - 1;
    var j = kArr.length - 1;
    var carry = 0;
    var ans = [];
    while (i >= 0 && j >= 0) {
        resp = addDigitsAndGetCarry(A[i--] + kArr[j--], carry);
        ans.unshift(resp[0]);
        carry = resp[1];
    }
    while (i >= 0) {
        resp = addDigitsAndGetCarry(A[i--], carry);
        ans.unshift(resp[0]);
        carry = resp[1];
    }
    while (j >= 0) {
        resp = addDigitsAndGetCarry(kArr[j--], carry);
        ans.unshift(resp[0]);
        carry = resp[1];
    }
    (carry > 0 ? ans.unshift(carry) : ans[0]);
    return ans;

};

var prepareKArr = (K) => {
    if(K==0) return [0];
    var kArr = [];
    while(K>0){
        kArr.unshift(K%10);
        K = Math.floor(K/10);
    }
    return kArr;
};


var addDigitsAndGetCarry = (numDigitsAdded, carry) => {
    var digitAddn = numDigitsAdded + carry;
    if (digitAddn > 9) {
        carry = 1;
        digitAddn = digitAddn % 10;
    } else {
        carry = 0;
    }
    return [digitAddn,carry];
};

var main = () => {
    console.log(addToArrayForm([1,2,3,4],34));
    console.log(addToArrayForm([9],1));
    console.log(addToArrayForm([9],9));
    console.log(addToArrayForm([1, 9],9));
};

main();