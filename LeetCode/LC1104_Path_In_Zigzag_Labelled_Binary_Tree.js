/* 
https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/description/

In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.



Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.

 

Example 1:

Input: label = 14
Output: [1,3,4,14]
Example 2:

Input: label = 26
Output: [1,2,6,10,26]
 

Constraints:

1 <= label <= 10^6


Solution:   https://leetcode.com/submissions/detail/313490716/  beats 27.91% JS Submissions.

 */

/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    //Get the level of the label.
    var level = Math.floor(Math.log2(label))+1;
    // console.log("level=" + level);
    //Construct an array of size 2^log(label)
    var treeArr = buildAnArray(level);
    // console.log(treeArr);
    //Get index of the label in the tree array where it belongs.
    
    var ans = [];
    
    while(level>0){
        ans.unshift(label);
        var numIndex = getIndex(label, level);
        // console.log("numIndex=" + numIndex);
        var parent = getNum(numIndex, treeArr);
        // console.log("parent=" + parent);
        label = parent;
        level--;
    }
    //Keep getting the index of the parent everytime till you reach the root.
    //Keep track of all the values on the indices found from label upto parent.
    return ans;
};

var buildAnArray = (level) => {
    var treeArr = [];
    var levelI = 0;
    while(levelI<level){
        var levelNumbersStart = Math.pow(2,levelI++);
        var levelNumbersEnd = Math.pow(2,levelI);
        while(levelNumbersStart<levelNumbersEnd){
            if(levelI%2==1)  //Odd level push level left to right 
                treeArr.push(levelNumbersStart++);
            else            //Even level push level right to left 
                treeArr.push(--levelNumbersEnd);
        }
    }
    return treeArr;
};


var getIndex = (num, level) => {
    if(level%2==1)
        return num - 1;
    else
        return Math.pow(2, level) + (Math.pow(2, level-1)-num) - 2;
};

var getNum = (index, arr) => {
    return arr[Math.ceil(index/2) - 1];
};


var main = () => {
    console.log(pathInZigZagTree(64));
    console.log(pathInZigZagTree(8));
    console.log(pathInZigZagTree(63));
    console.log(pathInZigZagTree(62));
    console.log(pathInZigZagTree(122));
};

main();