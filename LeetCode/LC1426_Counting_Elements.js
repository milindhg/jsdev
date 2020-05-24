/* Given an integer array arr, count element x such that x + 1 is also in arr.

If there're duplicates in arr, count them seperately.

 

Example 1:

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
Example 2:

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
Example 3:

Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
Example 4:

Input: arr = [1,1,2,2]
Output: 2
Explanation: Two 1s are counted cause 2 is in arr.
 

Constraints:

1 <= arr.length <= 1000
0 <= arr[i] <= 1000


Solution:   
Simple approach: Keep a map of elements to track the elements present in the
array. Then for each element in the map, check whether the elem+1 also is
present in the map. We cannot use set but have to use map to count the number of
occurrences of x such that x+1 is present in the map.


 */

 /**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    var xAndX1Map = {};
    arr.forEach((x, i)=>{
        if(!xAndX1Map[x])
            xAndX1Map[x] = 0;
        xAndX1Map[x]+=1;
    });
    console.log(xAndX1Map);
    let ans = 0;
    Object.keys(xAndX1Map).forEach((x)=>{
        if(xAndX1Map.hasOwnProperty(Number.parseInt(x)+1))
            ans+=xAndX1Map[x];
    });
    return ans;
};

var main = ()=>{
    console.log(countElements([1,2,3]));
    console.log(countElements([1,1,3,3,5,5,7,7]));
    console.log(countElements([1,3,2,3,5,0]));
    console.log(countElements([1,1,2,2]));
}
main();