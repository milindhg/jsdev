/* https://leetcode.com/problems/reduce-array-size-to-the-half/description/

Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

Return the minimum size of the set so that at least half of the integers of the array are removed.

 

Example 1:

Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.
Example 2:

Input: arr = [7,7,7,7,7,7]
Output: 1
Explanation: The only possible set you can choose is {7}. This will make the new array empty.
Example 3:

Input: arr = [1,9]
Output: 1
Example 4:

Input: arr = [1000,1000,3,7]
Output: 1
Example 5:

Input: arr = [1,2,3,4,5,6,7,8,9,10]
Output: 5
 

Constraints:

1 <= arr.length <= 10^5
arr.length is even.
1 <= arr[i] <= 10^5


Solution:   https://leetcode.com/submissions/detail/306036052/ beats 41.98% JS Submissions.




 */


/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    var map = {};
    for(var index in arr){
        if(!map[arr[index]])
            map[arr[index]] = 1;
        else
            map[arr[index]] += 1;
    }
    var cntArr = [];
    for(var key in map){
        cntArr.push({"num": key, "cnt": map[key]});
    }
    // console.log(cntArr);
    cntArr.sort(function(a,b){
        return b.cnt - a.cnt;
    });
    // console.log(cntArr);
    
    var i=0, j=cntArr.length-1;
    var countLeft = arr.length;
    var ans = [];
    var i = 0;
    while(countLeft>arr.length/2){
        countLeft -= cntArr[i].cnt;
        ans.push(cntArr[i].num);
        i++;
    }
    return ans.length;
};

var main = () => {
    console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]));
    console.log(minSetSize([7,7,7,7,7,7]));
    console.log(minSetSize([1,9]));
    console.log(minSetSize([1000,1000,3,7]));
    console.log(minSetSize([1,2,3,4,5,6,7,8,9,10]));
};

main();