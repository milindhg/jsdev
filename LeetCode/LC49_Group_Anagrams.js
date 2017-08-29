/*
https://leetcode.com/problems/group-anagrams/description/
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.

*/

/*
Solution:   
            Create a hashmap of every input string by sorting the characters in the string and putting it in the map.
            return the output by giving all the formed arrays for each key in hashmap.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * https://leetcode.com/submissions/detail/111825098/ beats 46.67% of other js submissions.
 * 
 */
var groupAnagrams = function (strs) {
    hashmap = {};
    for ( var i in strs) {
        var hash = strs[i].split('').sort().join('');
        if (!hashmap[hash]) {
            hashmap[hash] = [];
        }
        hashmap[hash].push(strs[i]);
    }
    var outputArr = [];
    for ( var key in hashmap) {
        outputArr.push(hashmap[key]);
    }
    return outputArr;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * https://leetcode.com/submissions/detail/111830708/ beats 92% of other js submissions
 * 
 */
var groupAnagramsEfficient = function (strs) {
    var output = [];
    var hashmap = {};
    var first26Primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
            47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101 ];
    for ( var i in strs) {
        var primeProd = 1;
        var currWordChars = strs[i].split('');
        for ( var j in currWordChars) {
            primeProd *= first26Primes[currWordChars[j].charCodeAt() - 97];
        }
        if (!hashmap[primeProd]) {
            hashmap[primeProd] = [];
        }
        hashmap[primeProd].push(strs[i]);
    }

    // prepare the output array
    for ( var key in hashmap) {
        output.push(hashmap[key]);
    }
    return output;
};

var firstNPrimeGenerator = function (n) {
    output = [];
    var i = 0;
    var genedNum = 2;
    while (i < n) {
        if (isPrime(genedNum)) {
            output.push(genedNum);
            i++;
        }
        genedNum++;
    }
    return output;
};

var isPrime = function (num) {
    var i = 2;
    if (num == 2 || num == 3) {
        return true;
    }
    while (i < Math.sqrt(num) + 1) {
        if (num % i == 0) {
            return false;
        }
        i++;
    }
    return true;
}

var main = function () {
    strs = [ "eat", "tea", "tan", "ate", "nat", "bat" ];
    console.log(groupAnagramsEfficient(strs));
    console.log(groupAnagrams(strs));
    console.log(isPrime(7));
    console.log(firstNPrimeGenerator(26));
    console.log('a'.charCodeAt());
};

main();