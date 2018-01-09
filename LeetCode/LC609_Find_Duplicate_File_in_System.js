/*
https://leetcode.com/problems/find-duplicate-file-in-system/description/

Given a list of directory info including directory path, and all the files with contents in this directory, you need to find out all the groups of duplicate files in the file system in terms of their paths.

A group of duplicate files consists of at least two files that have exactly the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"

It means there are n files (f1.txt, f2.txt ... fn.txt with content f1_content, f2_content ... fn_content, respectively) in directory root/d1/d2/.../dm. Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of group of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"

Example 1:
Input:
["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
Output:  
[["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
Note:
No order is required for the final output.
You may assume the directory name, file name and file content only has letters and digits, and the length of file content is in the range of [1,50].
The number of files given is in the range of [1,20000].
You may assume no files or directories share the same name in the same directory.
You may assume each given directory info represents a unique directory. Directory path and file info are separated by a single blank space.
Follow-up beyond contest:
Imagine you are given a real file system, how will you search files? DFS or BFS?
If the file content is very large (GB level), how will you modify your solution?
If you can only read the file by 1kb each time, how will you modify your solution?
What is the time complexity of your modified solution? What is the most time-consuming part and memory consuming part of it? How to optimize?
How to make sure the duplicated files you find are not false positive?
 */

/*
 * Solution:   https:// leetcode.com/submissions/detail/135410975/ - beats 88.89% of javascript
                    // submissions.
            basic idea is to create hash map of files. But importantly the key should be the the content. 
            Since we already have the constraints of content length 1-50. so we should be good with keeping content as key.
            Then we form an array for each content in the hashmap. 
            If the value of the hashmap for any key has more than 1 paths in array, just append the value to the answer array. 
            
            Time complexity : O(n*x)O(n∗x). nn strings of average length xx is parsed.

            Space complexity : O(n*x)O(n∗x). mapmap and resres size grows upto n*xn∗x.
*/

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
    var mapContentToFileObj = {};
    for ( var index in paths) {
        var pathElements = paths[index].split(' ');
        var pathToDirectory = pathElements[0];
        var numOfFilesInCurrDir = pathElements.length - 1;
        var fileIterator = 1;
        while (fileIterator <= numOfFilesInCurrDir) {
            // var regExp = /\(([^)]+)\)/;
            var fileElements = pathElements[fileIterator].split('(');
            var fileName = fileElements[0];
            var content = fileElements[1].split(')')[0];
            // console.log("File content is : " + fileName + " = " + content);
            var currentFile = new File(fileName, pathToDirectory + '/'
                    + fileName, content);
            if (mapContentToFileObj[content]) {
                mapContentToFileObj[content].push(currentFile.path);
            } else {
                mapContentToFileObj[content] = [ currentFile.path ];
            }
            fileIterator++;
        }
    }
    // console.log(mapContentToFileObj);
    var duplicateFileGroups = [];
    for ( var contentKey in mapContentToFileObj) {
        if (mapContentToFileObj[contentKey].length > 1) {
            // console.log(mapContentToFileObj[contentKey]);
            duplicateFileGroups.push(mapContentToFileObj[contentKey]);
        }
    }
    // console.log('output is ');
    // console.log(duplicateFileGroups);
    return duplicateFileGroups;
};

var File = function (name, path, content) {
    this.name = name;
    this.path = path;
    this.content = content;
};

var main = function () {
    var myFile = new File("File1", "root/a", "abcd");
    console.log(myFile);
    var myFile1 = new File("File2", "root/", "efgh");
    console.log(myFile1);
    var paths = [ "root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)",
            "root/c/d 4.txt(efgh)", "root 4.txt(efgh)" ];
    console.log(findDuplicate(paths));
};

main();