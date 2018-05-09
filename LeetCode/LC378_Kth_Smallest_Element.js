/* https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/

Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note: 
You may assume k is always valid, 1 ≤ k ≤ n2.
 */
/* 
 Solution:  https://leetcode.com/submissions/detail/153410824/  - this solution beats 48% of js submissions.
            //Probably a way to solve it is to keep sorting and merging the Ls from top left. 
            //And during this time always keep checking if the kth smalles element is greater than the next Ls Midpoint.
  */

/**
* @param {number[][]} matrix
* @param {number} k
* @return {number}
*/
var kthSmallest = function (matrix, k) {
    console.log("matrix and k: " + matrix, k);
    if (k == (matrix.length * matrix.length)) {
        return matrix[matrix.length - 1][matrix.length - 1];
    }
    if (k == 1) {
        return matrix[0][0];
    }
    var sortedArr = [];
    var i = 0, j = 0;
    while (sortedArr.length < k || matrix[i][j] < sortedArr[k - 1]) {
        //Form 2 lists. 1 horizontal and 1 vertical
        //merge sort them.
        var horizontalList = [];
        var m = i, n = j;
        while (n < matrix.length) {
            horizontalList.push(matrix[m][n++]);
        }
        var sortedArr = merge(sortedArr, horizontalList);
        //console.log("sortedArr and horizontalList: " + sortedArr, horizontalList);

        n = j;
        m++;
        var verticalList = [];
        while (m < matrix.length) {
            verticalList.push(matrix[m++][n]);
        }
        var sortedArr = merge(sortedArr, verticalList);
        //console.log("sortedArr and verticalList: " + sortedArr, verticalList);

        i++;
        j++;
        //console.log("i j: " + i, j);
        //console.log("matrix diagonal element now is: " + matrix[i][j]);        
        //console.log("sortedArr k-1 element now is: " + sortedArr[k-1]);
        //the merged list should be holded in the sortedArr
    }

    return sortedArr[k - 1];
};

var merge = function (list1, list2) {
    var outputArr = [];
    ////console.log(list1, list2);
    if (list1.length == 0)
        return list2;
    if (list2.length == 0)
        return list1;
    var i = 0, j = 0;
    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            outputArr.push(list1[i++]);
        } else {
            outputArr.push(list2[j++]);
        }
    }
    while (i < list1.length) {
        outputArr.push(list1[i++]);
    }
    while (j < list2.length) {
        outputArr.push(list2[j++]);
    }
    return outputArr;
}


var main = function () {
    console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8));
    console.log(kthSmallest([[1, 5, 9],
    [6, 8, 13],
    [9, 13, 15]], 4));

    // console.log(merge([1,2],[1,3]));
    console.log(kthSmallest([[1, 2], [1, 3]], 1));
    console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8));
    console.log(kthSmallest([[1, 3, 5], [6, 7, 12], [11, 14, 14]], 6));
};

main();