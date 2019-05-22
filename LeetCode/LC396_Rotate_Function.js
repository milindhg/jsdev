/* https://leetcode.com/problems/rotate-function/description/

Given an array of integers A and let n to be its length.

Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:

F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].

Calculate the maximum value of F(0), F(1), ..., F(n-1).

Note:
n is guaranteed to be less than 105.

Example:

A = [4, 3, 2, 6]

F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.

Solution:   https://leetcode.com/submissions/detail/230523779/  beats 98.3% JS Submissions.


            suppose at a point i the array is A[0], A[1], A[2], A[3],..., A[k-1], A[k] then we have :
              f(i)          = 0 * A[0] + 1 * A[1] + 2 * A[2] + .... +  (k-1) * A[k-1] + k * A[k]
              f(i+1)        = 1 * A[0] + 2 * A[1] + 3 * A[2] + ...  +     k  * A[k-1] + 0 * A[k] 
              =>f(i+1) - f(i) =     A[0]   +   A[1]   +   A[2] + ...  +       A[k-1]    - k * A[k] 
              = (A[0]   +   A[1]   +   A[2] + ...  +       A[k-1] + k * A[k]) - (k+1) * A[k]
              = sum(Array) - A[k] * array.length
              => f(i+1) = f(i) + sum(Array) -  last element * array.length
              so at a point i if we know f(i) then we could easily caculate f(i+1) by the above formula so just go through the array and update the maximum value.
 
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    var i = 0;
    var sum = 0;
    var iter = 0;
    var fZero = 0;
    while(i<A.length){
        fZero += (iter++ * A[i]);
        sum+= A[i++];
    }
    var maxFSum = fZero;
    var i = A.length-1;
    var curFSum = 0;
    while(i>0){
        curFSum = fZero + sum - (A.length * A[i]);
        i--;
        fZero = curFSum;
        maxFSum = Math.max(curFSum, maxFSum);
    }
};

var main = function(){
    maxRotateFunction([4,3,2,6]);
};

main();