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