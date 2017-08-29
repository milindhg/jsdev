/**
 * 
 * Wish.com interview question [Abhishek Kejriwal test]
 * 
 * Question:Given a string, find all subsets of the string
 * 
 */

var countSub = function (str) {
    var result = [];
    var numberOfSubSeq = Math.pow(2, str.length);

    for (var seqCounter = 0; seqCounter < numberOfSubSeq; seqCounter++) {
        // For every set bit of the number seqCounter, get the characters at the respective bits and
        // form the resulting string to give the subseq
        var resultItem = "";
        for (var bit = 0; bit < str.length; bit++) {
            if (isBitSet(bit + 1, seqCounter)) {
                resultItem += str[bit];
            }
        }
        if (resultItem != "") // We put this condition because we do not want to include empty
            // set. If we want to include empty set, then this condition can be
            // removed.
            result.push(resultItem);
    }
    return result;
};

var isBitSet = function (bit, number) {
    var bitChecker = 1 << (bit - 1);
    return ((bitChecker & number) == bitChecker);
};

var main = function () {
    var str = "aaa";
    console.log(countSub(str));

};

main();
