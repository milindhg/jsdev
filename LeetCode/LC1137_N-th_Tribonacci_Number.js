/* 

https://leetcode.com/problems/n-th-tribonacci-number/

1137. N-th Tribonacci Number
Easy

2306

126

Add to List

Share
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

 

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537
 

Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
Accepted
344,996
Submissions
544,914

Solution:   https://leetcode.com/submissions/detail/816942430/  beats 68.76% JS Submissions
            Simple iterative approach to keep calculating the tribonacci number sequence for each number from 1 to n and return nth answer value.
            This can also be done using a recursive approach with memoization.

 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let sequence = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2] + sequence[i - 3]);
    }
    return sequence[n];
};

let main = () => {
    console.log(tribonacci(0));
    console.log(tribonacci(1));
    console.log(tribonacci(2));
    console.log(tribonacci(3));
    console.log(tribonacci(25));
};

main();