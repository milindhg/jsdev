/*

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
        
        
Solution: The first logic is to form array and run the bitwise check to find out number of 1s in the binary representation of each number as we traverse from 0 to num.
So the run time of this solution becomes O(n * 32) since there are 32 bits for each of the numbers

But another radical solution can be written based on looking at the pattern formed for the number of 1s in the binary representation of numbers as below

0 -> arr[0]=0 [0]
1 -> arr[1-1]+1=1 [0, 1]
2 -> arr[2-2]+1=1 [0, 1, 1]
3 -> arr[3-2]+1=2 [0, 1, 1, 2]
4 -> arr[4-4]+1=1 [0, 1, 1, 2, 1]
5 -> arr[5-4]+1=2 [0, 1, 1, 2, 1, 2]
6 -> arr[6-4]+1=2 [0, 1, 1, 2, 1, 2, 2]
7 -> arr[7-4]+1=3 [0, 1, 1, 2, 1, 2, 2, 3]
8 -> arr[8-8]+1=1 [0, 1, 1, 2, 1, 2, 2, 3, 1]


So keep a common index subtractor. And when the iterator index reaches double of the common index subtractor, then double the index subtractor value. 

*
*/

/**
 * @param {number} num
 * @return {number[]}
 * @runtime {O(n)}
 * @space {O(n)}
 * 
 * Beats 94.81% of JS Submissions.
 * 
 * 
 * 
 */
var countBits = function (num) {
    var ans = [];
    var i = 0;
    var constIndexSubt = 1;
    while (i <= num) {
        if (i === 0) {
            ans.push(0);
        } else if (i === 1) {
            ans.push(1);
        } else {
            if (i == constIndexSubt * 2) {
                constIndexSubt *= 2;
            }
            ans.push(ans[i - constIndexSubt] + 1);
        }
        i++;
        // console.log(ans);
    }
    return ans;
};

var main = function () {
    var num = 15;
    console.log(countBits(num));
}

main();