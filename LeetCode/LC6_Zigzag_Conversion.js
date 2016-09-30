/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

Solution: First, depending on number of rows given, create empty lists of numRows count. Then just keep a flag to increment or decrement rowNum index and keep pushing in that list. Done.

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows < 2) {
        return s;
    }
    var arraymatrix = [];
    for (var i = 0; i < numRows; i++) {
        arraymatrix.push([]);
    }
    var rowToPushTo = 0;
    var rowFlowUp = true;

    for ( var c in s) {
        //console.log(rowToPushTo);
        arraymatrix[rowToPushTo].push(s[c]);
        if (rowFlowUp) {
            rowToPushTo += 1;
        } else {
            rowToPushTo -= 1;
        }
        if (rowToPushTo == numRows - 1) {
            rowFlowUp = false;
        } else if (rowToPushTo === 0) {
            rowFlowUp = true;
        }

    }
    var outputstring = "";
    for ( var x in arraymatrix) {
        for ( var y in arraymatrix[x]) {
            outputstring += arraymatrix[x][y];
        }
    }
    return outputstring;

};

var main = function () {
    var inputstring = 'PAYPALISHIRING';
    var numRows = 4;
    console.log(convert(inputstring, numRows));
};

main();
