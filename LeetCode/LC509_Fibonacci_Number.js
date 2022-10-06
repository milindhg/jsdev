/* 

https://leetcode.com/problems/fibonacci-number/

509. Fibonacci Number
Easy

5272

294

Add to List

Share
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

Constraints:

0 <= n <= 30
Accepted
1,070,962
Submissions
1,548,716

Solution:   https://leetcode.com/submissions/detail/816684163/  beats 90.84% JS Submission
            This problem is a classig recursion problem since fib(n) = fib(n-1) + fib(n-2)
            There is no harm in doing it via recursion but on a real system, iterative approach is better to just store all the answers of fib till n in an array and then return the answer as last element of the array.

            Runtime: O(n)
            Space: O(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // let mem = [];
    // return fibHelper(mem,n);
    return fibEasyAndBetter(n);
};

let fibHelper = (mem, n) => {
    if (n == 0 || n == 1) {
        mem[n] = n;
        return n;
    } else if (mem.length == n - 1) {
        mem[n] = mem[n - 1] + mem[n - 2];
        return mem[n];
    } else {
        mem[n] = fibHelper(mem, n - 1) + fibHelper(mem, n - 2);
        return mem[n];
    }
}

let fibEasyAndBetter = (n) => {
    let mem = [0, 1];
    for (let i = 2; i <= n; i++) {
        mem.push(mem[i - 1] + mem[i - 2]);
    }
    return mem[n];
}

let main = () => {
    console.log(fibEasyAndBetter(0));
    console.log(fibEasyAndBetter(1));
    console.log(fibEasyAndBetter(2));
    console.log(fibEasyAndBetter(3));
    console.log(fibEasyAndBetter(4));
    console.log(fibEasyAndBetter(40));
};

main();