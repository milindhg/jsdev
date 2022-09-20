/* 

https://www.geeksforgeeks.org/find-closest-number-array/

Given an array of sorted integers. We need to find the closest value to the given number. Array may contain duplicate values and negative numbers. 

Examples:  

Input : arr[] = {1, 2, 4, 5, 6, 6, 8, 9}
             Target number = 11
Output : 9
9 is closest to 11 in given array

Input :arr[] = {2, 5, 6, 7, 8, 8, 9}; 
       Target number = 4
Output : 5
5 is closest to 4 in given array

Input :arr[] = {2, 5, 6, 7, 8, 8, 9, 15, 19, 22, 32}; 
       Target number = 34
Output : 32
32 is closest to 4 in given array

 */

let closestNumberInSortedArray = (sortedArr, target) => {
    if (!sortedArr || sortedArr.length < 1)
        return -1;
    else if (target < sortedArr[0])
        return sortedArr[0];
    else if (target > sortedArr[sortedArr.length - 1])
        return sortedArr[sortedArr.length - 1];
    else {
        let start = 0;
        let end = sortedArr.length - 1;
        while (start + 1 < end) {
            let mid = Math.floor((start + end) / 2);
            if (sortedArr[mid] <= target) {
                start = mid;
            } else {
                end = mid;
            }
        }

        let left = Math.abs(sortedArr[start] - target);
        let right = Math.abs(sortedArr[end] - target);
        return (left <= right) ? sortedArr[start] : sortedArr[end];
    }

};


let main = () => {
    let Util = require("../Utilities/GeneralUtils");
    let u = new Util();
    let nums = [1, 2, 4, 5, 6, 6, 8, 9];
    u.answerValidator(closestNumberInSortedArray(nums, 11), 9);
    nums = [2, 5, 6, 7, 8, 8, 9];
    u.answerValidator(closestNumberInSortedArray(nums, 4), 5);
    nums = [2, 5, 6, 7, 8, 8, 9, 15, 19, 22, 32];
    u.answerValidator(closestNumberInSortedArray(nums, 34), 32);
};

main();