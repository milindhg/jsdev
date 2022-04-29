/* https://leetcode.com/problems/longest-absolute-file-path/description/

TYPE: MEDIUM
TYPE: STRING

Suppose we abstract our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.

Note:
The name of a file contains at least a . and an extension.
The name of a directory or sub-directory will not contain a ..
Time complexity required: O(n) where n is the size of the input string.

Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.




 */


/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    var map = {};
    var currLevel = 0;
    //level is the number of tabs
    var maxPathLen = 0;
    
    input = replace4SpacesWithTab(input);
    var inputLines = input.split('\n');
    for(var line in inputLines){
        var lineItem = inputLines[line];
        if(isDir(lineItem)){
            currLevel = countTabs(lineItem);
            map[currLevel] = lineItem.trim();
        }else if(isFile(lineItem)){
            var i =0;
            var currPathLen = 0;
            var fileLevel = countTabs(lineItem)
            while(i<fileLevel){
                currPathLen += map[i].length + 1;
                i++
            }
            currPathLen += lineItem.trim().length;
            if(maxPathLen<currPathLen)
                maxPathLen = currPathLen;
        }
    }
    return maxPathLen;
};


var countTabs = function(item){
    var i = 0;
    while(item[i]=='\t'){
        i++;
    }
    return i;
}

var isFile = function(item){
    return item.includes('.');
};

var isDir = function(item){
    return !isFile(item);
};

var formDirectoryJson = function(inputLine){
    console.log(inputLine.trim());
};

var replace4SpacesWithTab = function(input){
    var i = 0;
    var result = "";
    var resultIndex = 0;
    var spaceLength = 0;
    while(i<input.length){
        if(input[i]==' '){
            spaceLength++;
            if(spaceLength==4){
                result+='\t';
            }
            i++;
        }else{
            result+=input[i++];
        }
    }
    return result;
}


 var main = function(){
     var input = 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext';
    //  console.log(input.includes('.'));
    //  console.log(input);
    //  console.log(input.split('\n')[2].includes('.'));
    //  console.log(input.split('\n')[2].charAt(0)=='\t');
    //  console.log(formDirectoryJson(input.split('\n')[0]));
    console.log(lengthLongestPath(input));
    console.log(replace4SpacesWithTab("dir\n    file.txt"));
    input = "dir\n\t        file.txt\n\tfile2.txt";
    console.log(lengthLongestPath(input));
 };

main();


/**
 * @param {string} input
 * @return {number}
 */
 var lengthLongestPath = function(input) {
    var lines = input.split('\n');
    console.log(lines);
    var dirStructure = {};
    for(var i = 0; i < lines.length ; i++ ){
        var currLineArr = lines[i];
        var currLineDepth = currLineArr.length;
        if(currLineDepth == 0){
            dirStructure[currLineDepth] = [[currLineArr[0], currLineArr[0].length]];
        }else{
            if(!dirStructure[currLineDepth])
                dirStructure[currLineDepth] = [];
            dirStructure[currLineDepth].push();
        }
    }
};