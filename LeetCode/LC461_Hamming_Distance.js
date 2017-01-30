/*

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

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    var distance=0;
    while(x>0 || y>0){
        var x1 = x&1;
        var y1 = y&1;
        // console.log(x1);
        // console.log(y1);
        if(x1^y1==1){
            distance+=1;
        }
        x=x>>1;
        y=y>>1;
    }
    return distance;
};

var main = function(){
    console.log(hammingDistance(1, 4));
};

main();