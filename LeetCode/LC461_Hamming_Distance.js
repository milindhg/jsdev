/*
https://leetcode.com/problems/hamming-distance/?tab=Description
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 <= x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*/

/*
Solution:   https://leetcode.com/submissions/detail/91053381/
            1 solution is to get right most bit of both numbers and XOR them to see if they are different. Then right shift both numbers by 1. Keep counting all such instances.
            
    
            https://leetcode.com/submissions/detail/93771057/
            A better approach is to XOR both the numbers and then check the number of 1bits in the resulting number.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {

    var distance = 0;
    while (x > 0 || y > 0) {
        var x1 = x & 1;
        var y1 = y & 1;
        // console.log(x1);
        // console.log(y1);
        if (x1 ^ y1 == 1) {
            distance += 1;
        }
        x = x >> 1;
        y = y >> 1;
    }
    return distance;
};


var hammingDistanceBetter = function(a, b){
    var ans = a ^ b;
    var retCnt = 0;
    //console.log("ans is " + ans);
    while(ans>=1){
        if((ans & 1) == 1) retCnt++;
        //console.log(ans);
        ans = ans >> 1;
        
    }
    return retCnt;
}

var main = function () {
    console.log(hammingDistance(1, 4));
    console.log(hammingDistanceBetter(1, 4));
};

main();