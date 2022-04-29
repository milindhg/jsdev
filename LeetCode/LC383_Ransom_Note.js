/*
https://leetcode.com/problems/ransom-note/?tab=Description
Given  an  arbitrary  ransom  note  string  and  another  string  containing
 letters from  all  the  magazines,  write  a  function  that  will  return
 true  if  the  ransom   note  can  be  constructed  from  the  magazines ;
 otherwise,  it  will  return  false.   

Each  letter  in  the  magazine  string  can  only  be  used  once  in  your
 ransom  note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/
/*
Solution:   

https://leetcode.com/submissions/detail/79675751/ [check the runtime for leetcode.]

Put all the letters along with its count in the magazine, in the hashmap.  Then
traverse over the ransom note and check for each letter presense in the hashmap.
keep track of count of the letters in hashmap, while adding or removing.
Anytime a letter from ransom note is not found in the magazine, return false.
            
Just by changing the datastore from hashmap to array. the speed improves more
than double.  https://leetcode.com/submissions/detail/93639888/ - beats 98% of
js submissions
            
Also there is one more approach i.e. to replace each character present in
ransomNote which is from the magazine also to blank. So that at the end a blank
ransomNote string will remain. 

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @runtime: https://leetcode.com/submissions/detail/79675751/
 */
var canConstructUsingMap = function (ransomNote, magazine) {
    var hm = {};
    for ( var i in magazine) {
        if (hm[magazine[i]]) {
            hm[magazine[i]] = hm[magazine[i]] + 1;
        } else {
            hm[magazine[i]] = 1;
        }
    }

    for ( var j in ransomNote) {
        if (hm[ransomNote[j]]) {
            hm[ransomNote[j]] = hm[ransomNote[j]] - 1;
            if (hm[ransomNote[j]] === 0) {
                delete hm[ransomNote[j]];
            }
        } else {
            return false;
        }
    }

    return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @runtime: https://leetcode.com/submissions/detail/93639888/
 */
var canConstruct = function (ransomNote, magazine) {

    // prepare the 26 char array
    var store = [];
    var charCodeFora = 'a'.charCodeAt(0);
    var i = 0;
    while (i < 26) {
        store.push(0);
        i++;
    }

    // prepare the 26 char array to count number of counts for each character in magazine.
    i = 0;
    while (i < magazine.length) {
        store[magazine.charCodeAt(i) - charCodeFora]++;
        i++;
    }

    // update the 26 char array to reduce the count of for each character in ransomNote
    // if not found i.e. count is negative, return false;.
    i = 0;
    while (i < ransomNote.length) {
        store[ransomNote.charCodeAt(i) - charCodeFora]--;
        if (store[ransomNote.charCodeAt(i) - charCodeFora] < 0) {
            return false;
        }
        i++;
    }
    return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 
 * https://leetcode.com/submissions/detail/334000023/ beats 99.39% JS Submissions.
 * 
 * 
 * 
 */
var canConstruct = function (ransomNote, magazine) {
    if(magazine.length < ransomNote)
        return false;
    for(let i=0; i<magazine.length; i++){
        ransomNote = ransomNote.replace(magazine[i],'');
    }
    return ransomNote.length == 0 ? true : false;
};


var main = function () {
    var ransomNote = "a";
    var magazine = "b";
    console.log(canConstruct(ransomNote, magazine));
};

main();