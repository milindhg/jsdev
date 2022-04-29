/* 
https://leetcode.com/problems/numbers-with-same-consecutive-differences/description/

Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.

Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.

You may return the answer in any order.

 

Example 1:

Input: N = 3, K = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.
Example 2:

Input: N = 2, K = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 

Note:

1 <= N <= 9
0 <= K <= 9

 */


/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
    var numsQ = [0,1,2,3,4,5,6,7,8,9];
    while(true){
        var num = numsQ.shift();
        if(num >= Math.pow(10,N-1)){
            numsQ.unshift(num);
            break;  
        }
        var item = num%10;
        if(item+K < 10 && (num+K!=num*10+item+K)) numsQ.push(num*10 + item + K);
        if(item-K >=0)  numsQ.push(num*10 + item - K);
        console.log('now nums is ' + numsQ);
    }
    console.log(numsQ);
    return numsQ;
};

var main = () => {
    numsSameConsecDiff(1,1);
};

main();