/*

Given  an  arbitrary  ransom  note  string  and  another  string  containing  letters from  all  the  magazines,  write  a  function  that  will  return  true  if  the  ransom   note  can  be  constructed  from  the  magazines ;  otherwise,  it  will  return  false.   

Each  letter  in  the  magazine  string  can  only  be  used  once  in  your  ransom  note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
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
