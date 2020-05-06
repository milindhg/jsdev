/* 
https://leetcode.com/problems/duplicate-zeros/description/

Given a fixed length array arr of integers, duplicate each occurrence of zero,
shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything
from your function.

 

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]
 

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9

Solution:   https://leetcode.com/submissions/detail/316572573/  

Here we can prepare another array of size origArr length + Number of Zeroes.
Then place 2 indices on the end of the 2 arrays respectively and keep copying
elements.
If zero is found, put 2 zeroes otherwise copy whatever element is found in
original array.

https://leetcode.com/submissions/detail/335413806/ beats 89.46% JS Submissions.
This approach can be improvised to do this inplace and avoid using new variables
in memory. For this we can use splice method.
Either we can increase the size of the array by number of zeroes then do our
copying similar to above method and then clip the array back to original size by
using splice method.


https://leetcode.com/submissions/detail/335416161/ beats 99.59% JS Submissions.
OR we can keep injecting elements in the middle where zero is found by using
splice method. in JS, it will automatically push other elements further.



 */


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * @runtime O(n)
 * @space O(n)
 */
var duplicateZeros = function(arr) {
    var normalIndex = 0;
    var newIndex = 0;
    var newArr = [];
    arr.forEach((elem)=>{
       newArr.push(elem); 
    });

    while(newIndex<arr.length){
        if(newArr[normalIndex]==0){
            arr[newIndex] = 0;
            newIndex++;
            if(newIndex<arr.length){
                arr[newIndex] = 0;
                newIndex++;
            }
            normalIndex++;
        }else{
            arr[newIndex] = newArr[normalIndex];
            newIndex++;
            normalIndex++;
        }
    }
    console.log(arr);
};

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * @runtime O(n)
 * @space O(1)
 */
var duplicateZerosInPlace = function(arr) {
    let zeroCount = 0;
    arr.forEach( num => {
        if(num == 0){
            zeroCount++;
            arr.push(0);
        }
    });
        
    let j = arr.length-1;
    for(let i=arr.length - zeroCount - 1; i>=0; i--){
        if(arr[i] == 0){
            arr[j--] = 0;
            arr[j--] = 0;
        }else{
            arr[j--] = arr[i]
        }
    }
    arr.splice(arr.length - zeroCount, zeroCount);
};

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZerosInPlaceReadable = function(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            arr.splice(i,0,0)
            arr.pop()
            i++
        }
    }
};

var main = () => {
    let arr = [1,0,2,3,0,4,5,0];
    duplicateZerosInPlace(arr);
    console.log(arr);
};

main();

