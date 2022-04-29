/* 

https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the sorted array.

 

Example 1:

Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]
Example 2:

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
Example 3:

Input: arr = [10000,10000]
Output: [10000,10000]
Example 4:

Input: arr = [2,3,5,7,11,13,17,19]
Output: [2,3,5,17,7,11,13,19]
Example 5:

Input: arr = [10,100,1000,10000]
Output: [10,100,10000,1000]
 

Constraints:

1 <= arr.length <= 500
0 <= arr[i] <= 10^4


Solution:   https://leetcode.com/submissions/detail/444895665/ beats 94.89% JS Submissions.
            Simple approach is to write a sort function. And call the function to count number of 1s in the binary rep of the given decimal element.

 */


/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    let count1s = (num) => {
        let cnt = 0;
        while (num > 0) {
            cnt += num & 1;
            num = num >> 1;
        }
        return cnt;
    };

    arr.sort((a, b) => {
        let a1Counts = count1s(a);
        let b1Counts = count1s(b);
        return (a1Counts - b1Counts != 0 ? a1Counts - b1Counts : a - b);
    });
    return arr;
};

let main = () => {
    console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
    console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
    console.log(sortByBits([1111, 7644, 1107, 6978, 8742, 1, 7403, 7694, 9193, 4401, 377, 8641, 5311, 624, 3554, 6631]));
};

main();