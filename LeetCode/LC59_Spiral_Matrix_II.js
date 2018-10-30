/* 
https://leetcode.com/problems/spiral-matrix-ii/description/

Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]


Solution:   https://leetcode.com/submissions/detail/184957261/  beats 26% JS SUbmissions
            Keep 2 indices, one for iterating over rows and one for iterating over columns
            Also keep 4 indices for maintaining min and max number of row and column.
            Now get the printed pattern by moving the 2 iterator indices within the limits of rows and columns and meanwhile keep modifying row and column min and max indices so that the pattern is formed is given.

            https://leetcode.com/submissions/detail/186426502/  beats 100% JS Submissions.
            The tweak of generating the array as we go instead of first creating an array with $ signs and then modifying that array improved the run time a lot. 
            So looks like in javascript the run time array creation is better than creating an array and modifying the array.
 */

 /**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var rowStart = 0;
    var rowEnd = n-1;
    var colStart = 0;
    var colEnd = n-1;
    var num=1;
    var ansarr = [];
    for(var i=0; i<n; i++){
        var tempArr = [];
        for(var j=0; j<n; j++){
            tempArr.push('$');
        }
        ansarr.push(tempArr);
    }
    while(rowStart<=rowEnd && colStart<=colEnd){
        var i=rowStart;
        var j=colStart
        for(j=colStart; j<=colEnd; j++){
            ansarr[i][j]=num++;
        }
        j--;
        
        rowStart++;

        for(i=rowStart; i<=rowEnd; i++){
            ansarr[i][j] = num++;
        }
        i--;
        
        colEnd--;
        
        for(j=colEnd; j>=colStart; j--){
            ansarr[i][j] = num++;
        }
        j++
        
        rowEnd--;
        
        for(i=rowEnd; i>=rowStart; i--){
            ansarr[i][j] = num++;
        }
        i++
        
        colStart++;

    }
    
    return ansarr;
};

 /**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrixBetter = function(n) {
    var rowStart = 0;
    var rowEnd = n-1;
    var colStart = 0;
    var colEnd = n-1;
    var num=1;
    var ansarr = [];

    while(rowStart<=rowEnd && colStart<=colEnd){
        var i=rowStart;
        var j=colStart
        for(j=colStart; j<=colEnd; j++){
            if(!ansarr[i]) ansarr[i] = [];
            ansarr[i][j]=num++;
        }
        j--;
        
        rowStart++;

        for(i=rowStart; i<=rowEnd; i++){
            if(!ansarr[i]) ansarr[i] = [];
            ansarr[i][j] = num++;
        }
        i--;
        
        colEnd--;
        
        for(j=colEnd; j>=colStart; j--){
            if(!ansarr[i]) ansarr[i] = [];
            ansarr[i][j] = num++;
        }
        j++
        
        rowEnd--;
        
        for(i=rowEnd; i>=rowStart; i--){
            if(!ansarr[i]) ansarr[i] = [];
            ansarr[i][j] = num++;
        }
        i++
        
        colStart++;

    }
    
    return ansarr;
};


var main = function(){
    var arr = generateMatrix(3);
    printArr(arr);
    var arr = generateMatrixBetter(3);
    printArr(arr);
};

var printArr = function(arr){
    for(var i =0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++)
            console.log(" " + arr[i][j]);
    }
};

main();