/* 
https://leetcode.com/problems/next-greater-element-iii/description/

Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive 32-bit integer exists, you need to return -1.

Example 1:

Input: 12
Output: 21
 

Example 2:

Input: 21
Output: -1


Solution:   https://leetcode.com/submissions/detail/272784190/ beats 100% JS Submissions.
 
 */

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    var arr = [];
    var dip = -1;
    while(n>0){
        arr.unshift(n%10);  //keep adding the unit's place to the array of numbers.
        n=Math.floor(n/10); //keep reducing the input number by 1 unit's place.
        if(arr.length>1 && arr[0]<arr[1]) break;    //dip found and saved in the array of numbers so stop forming the array of numbers now.
    }

    //if the input number n = 0 at the end of while above, that means there is no dip. So return -1;
    if(n==0 && (arr.length<=1 || arr[0]>=arr[1])) return -1;

    //we got the dip. So all the elements from right before the dip are in the array of numbers.
    //Now swap the dip number with another number in the array which is greater than dip but min among numbers greater than dip. 
    //So run a loop on the array and find the min number.
    var minNumIndex = 0;
    for(var i=1; i<arr.length; i++){
        if(arr[i]>arr[0] && arr[i]<=arr[1]) minNumIndex = i;
    }

    console.log(arr);
    if(minNumIndex!=0){ //swap
        var temp = arr[0];
        arr[0] = arr[minNumIndex];
        arr[minNumIndex] = temp;
    }

    //now add the first number of array swapped or not, back to the original number.
    n = n*10+arr[0];
    arr.shift();

    console.log(arr);
    //sort the remaining arr.
    arr.sort(function(a,b){
        return a-b;
    });

    console.log(arr);
    for(var i=0; i<arr.length; i++) n = n*10+arr[i];
    console.log(arr);
    
    if(n> Math.pow(2,31) - 1) return -1;

    return n;
};

var main = () => {
    var input = 21;
    console.log(nextGreaterElement(input));
    input = 114321;
    console.log(nextGreaterElement(input));
    input = 114111;
    console.log(nextGreaterElement(input));
    input = 12344321;
    console.log(nextGreaterElement(input));
    input = 1999999999;
    console.log(nextGreaterElement(input));
};

main();