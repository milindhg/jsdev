/*
https://leetcode.com/problems/ugly-number-iii/
An ugly number is a positive integer that is divisible by a, b, or c.

Given four integers n, a, b, and c, return the nth ugly number.

 

Example 1:

Input: n = 3, a = 2, b = 3, c = 5
Output: 4
Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
Example 2:

Input: n = 4, a = 2, b = 3, c = 4
Output: 6
Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.
Example 3:

Input: n = 5, a = 2, b = 11, c = 13
Output: 10
Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.
 

Constraints:

1 <= n, a, b, c <= 109
1 <= a * b * c <= 1018
It is guaranteed that the result will be in range [1, 2 * 109].

Solution:   https://leetcode.com/submissions/detail/624946433/  beats 88.10% js submissions
            
 */

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {
    var x = 0;
    var i = 1;
    while(x!=n){
        if(i%a == 0 || i%b == 0 || i%c == 0){
            x++;
        }
        if(x==n)
            return i;
        i++;
    }

    return i;
};

var main = () => {
    var input = { n: 3, a: 2, b: 3, c: 5 };
    console.log(nthUglyNumber(input.n, input.a, input.b, input.c));
    var input = { n: 4, a: 2, b: 3, c: 4 };
    console.log(nthUglyNumber(input.n, input.a, input.b, input.c));
    var input = { n: 5, a: 2, b: 11, c: 13 };
    console.log(nthUglyNumber(input.n, input.a, input.b, input.c));
};

main();