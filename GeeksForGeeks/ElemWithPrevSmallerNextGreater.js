/* https://www.geeksforgeeks.org/find-the-element-before-which-all-the-elements-are-smaller-than-it-and-after-which-all-are-greater-than-it/

Find the element before which all the elements are smaller than it, and after which all are greater
Given an array, find an element before which all elements are smaller than it, and after which all are greater than it. Return index of the element if there is such an element, otherwise return -1.
Examples:

Input:   arr[] = {5, 1, 4, 3, 6, 8, 10, 7, 9};
Output:  Index of element is 4
All elements on left of arr[4] are smaller than it
and all elements on right are greater.
 
Input:   arr[] = {5, 1, 4, 4};
Output:  Index of element is -1
Expected time complexity is O(n).


Solution:   Prepare 2 arrays.
            1. 1 array to traverse from start to end and store max element at every step.
            2. 2nd array to traverse end to start and store the min element at every step.
            3. Thus for every element in the given array, we have the max and min element before and after each element at every step respectively.
            4. Thus finally traverse the 2 arrays min and max and find the index where both the values of max and min are same. That is the first answer.

 */

var findElement = function(arr){
    var maxElemsArr = [];
    var minElemsArr = [];
    var currMax = Number.MIN_VALUE;
    for(var i in arr){
        if(arr[i]>currMax) currMax = arr[i];
        maxElemsArr.push(currMax);
    }

    var currMin = Number.MAX_VALUE
    for(var j=arr.length-1; j>=0; j--){
        if(arr[j]<currMin) currMin = arr[j];
        minElemsArr.unshift(currMin);
    }

    var i=0, j=0;
    while(i<maxElemsArr.length && j<minElemsArr.length){
        if(maxElemsArr[i]==minElemsArr[j]) return [i,maxElemsArr[i]];
        i++;
        j++;
    }

    return [-1,-1];

}

var main = function(){
    var arr = [5, 1, 4, 3, 6, 8, 10, 7, 9];
    var ans = findElement(arr);
    console.log("index of element is: " + ans[0] + " and the element is: " + ans[1]);
};

main();