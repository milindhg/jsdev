/* https://leetcode.com/problems/image-smoother/description/

Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
Note:
The value in the given matrix is in the range of [0, 255].
The length and width of the given matrix are in the range of [1, 150].



Solution:   https://leetcode.com/submissions/detail/185277270/  beats 35.71 % of JS submissions.
            //initialize a matrix with all 0s as answer matrix.
            //Calculate average or smoothened value for each of the cell in given input matrix and fill it in corresponding cell in answer matrix.
            The main logic for smoothening given input matrix, answer matrix and i and j - 
            //For each cell check whether surrounding 8 cells exist and calculate the average value based on number of surrounding valid cells and the value in each valid cell.

 */


/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    var ans = [];
    //initialize a matrix with all 0s as answer matrix.
    for(var i=0; i< M.length; i++){
        var temp = [];
        for (var j=0; j<M[0].length; j++){
            temp.push(0);    
        }
        ans.push(temp);
    }
    console.log("Answer matrix initialized: ");
    console.log(ans);

    //Calculate average or smoothened value for each of the cell in given input matrix and fill it in corresponding cell in answer matrix.
    for(var i=0; i< M.length; i++){
        for (var j=0; j<M[0].length; j++){
            var averageCalculated = averager(M,ans,i,j);
            ans[i][j] = averageCalculated;
        }
    }
    return ans;
};

var averager = function(M,ans,i,j){
    var cnt = 0;
    var avg = 0;
    //For each cell check whether surrounding 8 cells exist and calculate the average value based on number of surrounding valid cells and the value in each valid cell.
    if(M && M[i] && M[i][j]!=undefined){
        cnt++;
        avg+=M[i][j];
    }
    if(M && M[i-1] && M[i-1][j]!=undefined){
        cnt++;
        avg+=M[i-1][j];
    }
    if(M && M[i+1] && M[i+1][j]!=undefined){
        cnt++;
        avg+=M[i+1][j];
    }
    if(M && M[i] && M[i][j-1]!=undefined){
        cnt++;
        avg+=M[i][j-1];
    }
    if(M && M[i] && M[i][j+1]!=undefined){
        cnt++;
        avg+=M[i][j+1];
    }
    if(M && M[i-1] && M[i-1][j-1]!=undefined){
        cnt++;
        avg+=M[i-1][j-1];
    }
    if(M && M[i+1] && M[i+1][j+1]!=undefined){
        cnt++;
        avg+=M[i+1][j+1];
    }
    if(M && M[i-1] && M[i-1][j+1]!=undefined){
        cnt++;
        avg+=M[i-1][j+1];
    }
    if(M && M[i+1] && M[i+1][j-1]!=undefined){
        cnt++;
        avg+=M[i+1][j-1];
    }
    //console.log(i, j, avg, cnt);
    avg = Math.floor(avg/cnt);
    return avg;
}

var main = function(){
    var M = [[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]];
    console.log(M);
    console.log(imageSmoother(M));
}

main();