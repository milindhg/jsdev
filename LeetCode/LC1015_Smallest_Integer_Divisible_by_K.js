/* 
https://leetcode.com/problems/smallest-integer-divisible-by-k/description/

Given a positive integer K, you need find the smallest positive integer N such that N is divisible by K, and N only contains the digit 1.

Return the length of N.  If there is no such N, return -1.

 

Example 1:

Input: 1
Output: 1
Explanation: The smallest answer is N = 1, which has length 1.
Example 2:

Input: 2
Output: -1
Explanation: There is no such positive integer N divisible by 2.
Example 3:

Input: 3
Output: 3
Explanation: The smallest answer is N = 111, which has length 3.
 

Note:

1 <= K <= 10^5


 */

/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
    if(K%2==0 || K%10==0 || K%5==0) return -1;
    else{
        var n = "1";
        while((n/K) - Math.floor(n/K) != 0){
            n = n+"1";
        }
    }
    return n.length;
};

/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByKA = function(K) {
    const set = new Set();
    let d = 1 % K;
    let cnt = 1;
    while (d) {
      if (!set.has(d)) set.add(d);
      else return -1;
  
      d = (10 * d + 1) % K;
      cnt++;
    }
    return cnt;
  };

var main = () => {
    console.log(smallestRepunitDivByK(19));
    console.log(smallestRepunitDivByKA(19));
};

main();