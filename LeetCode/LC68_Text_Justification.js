/* https://leetcode.com/problems/text-justification/description/

Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
Example 1:

Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.
Example 3:

Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]


Solution:   https://leetcode.com/submissions/detail/213673730/  beats 87.89% JS Submissions.
            The idea is basically to first keep track of taking in words and preparing a line. Keep track of the ongoing width including 1 space between words and see that it does not cross maxWidth.
            If we cross maxWidth, the word on which we exceed should be put in the next line.
            For current line, generate the justified string.
            For last line, left justify the line and add to answer. To detet you're on last line, check the iterator index == input words.length.

            For creating justified string, use below logic:
            Calculate number of spaces remaining to pad in between to prepare the justified string.
            Keep dividing number of spacebars remaining to pad by number of places remaining in between to fill spaces. Take ceiling of that and pad those many spacebars at the next place and decrement both, number of spacebars remaining to pad and number of places remaining in between to do padding.

 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var ans = [];
    var i = 0;
    while(i < words.length){
        var ongoingWidth = 0;
        var tempArr = [];
        while(ongoingWidth <= maxWidth && i<words.length){
            var word = words[i];
            // console.log(word);
            if(tempArr.length>0)
                ongoingWidth += 1;  //add space if the word is not first word of line.    
            if(ongoingWidth+word.length<=maxWidth){
                ongoingWidth += word.length;
                tempArr.push(word);
                i++;
            }else{
                ongoingWidth--;
                break;
            }
        }
        if(i==words.length)
            ans.push(tempArr.join(' ') + new Array(maxWidth - ongoingWidth + 1).join(' '));
        else if(tempArr.length>0)
            ans.push(prepareJustifiedLine(tempArr,ongoingWidth,maxWidth));
    }
    return ans;
};


var prepareJustifiedLine = function(words, ongoingWidth, maxWidth){
    var numberOfSpacesToPad = maxWidth - ongoingWidth;
    var numberOfPlacesToPutSpace = words.length - 1;
    var retString = "";
    if(words.length==1){
        return words[0] + new Array(numberOfSpacesToPad+1).join(' ');
    }
    var maxNumberOfSpacesToPut = Math.ceil(numberOfSpacesToPad / numberOfPlacesToPutSpace);
    
    var i = 0;
    while(i<words.length-1){
        retString+=words[i++];
        retString+=' ';
        maxNumberOfSpacesToPut = Math.ceil(numberOfSpacesToPad / numberOfPlacesToPutSpace);
        if(numberOfSpacesToPad>=maxNumberOfSpacesToPut){
            for(var j=0; j<maxNumberOfSpacesToPut; j++)
                retString += ' ';
            numberOfSpacesToPad -= maxNumberOfSpacesToPut;
            numberOfPlacesToPutSpace--;
        }else{
            for(var j=0; j<numberOfSpacesToPad; j++)
                retString += ' ';
        }
    }
    retString += words[words.length-1]; //append last word
    return retString;
}

var main = function(){
    // console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."],16));
    // console.log(fullJustify(["What","must","be","acknowledgment","shall","be"],16));
    // console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain",
    // "to","a","computer.","Art","is","everything","else","we","do"],20));
    // console.log(prepareJustifiedLine([ 'a', 'computer.', 'Art', 'is' ],18,20));
    console.log(fullJustify(["The","important","thing","is","not","to","stop","questioning.","Curiosity","has","its","own","reason","for","existing."],17));
};

main();