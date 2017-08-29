/**
 * 
 * Wish.com interview question [Abhishek Kejriwal test]
 * 
 * Question: You are given a sequence for the keypad. SO the keypad is a 3X3 matrix always. You are
 * also given a sequence of numbers you need to traverse from first index to last index. Give the
 * distance traversed in order to cover the numbers from first index to last index.
 * 
 * 
 */

var main = function () {
    var keypadSeq = "923857614";
    var findSeq = "423692";
    console.log('Distance traversed in covering: ' + findSeq + ' with keypad '
            + keypadSeq + ' is ' + findAnswer(keypadSeq, findSeq));

};

var createMatrix = function (keypadSeq) {
    var matrix = [];
    var j = 0;
    var index = 0;
    for (var i = 0; i < 3; i++) {
        var tempArr = [];
        for (var j = 0; j < 3; j++) {
            tempArr.push(keypadSeq[index++]);
        }
        matrix.push(tempArr);
    }
    console.log('Matrix Created ');
    return matrix;
};

var createMap = function (matrix) {
    var map = {};
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            map[matrix[i][j]] = [ i, j ];
        }
    }
    console.log('Map Created');
    return map;
}

var getDistance = function (num1, num2, map) {
    var x1 = map[num1][0];
    var y1 = map[num1][1];
    var x2 = map[num2][0];
    var y2 = map[num2][1];
    var tempDistance = 0;
    while (true) {
        if (x1 == x2) {
            tempDistance += Math.abs(y1 - y2);
            break;
        } else if (y1 == y2) {
            tempDistance += Math.abs(x1 - x2);
            break;
        } else {
            if (x1 < x2) {
                x1 += 1;
                y1 = (y1 + 1) % 3;
            } else {
                x2 += 1;
                y2 = (y2 + 1) % 3;
            }
            tempDistance++;
        }
    }
    return tempDistance;
}

var findAnswer = function (keypadSeq, findSeq) {
    var matrix = createMatrix(keypadSeq);
    var map = createMap(matrix);
    var num1 = findSeq[0];
    var distance = 0;
    for (var i = 1; i < findSeq.length; i++) {
        num2 = findSeq[i];
        currdistance = getDistance(num1, num2, map);
        // console.log(num1, num2, currdistance);
        distance += currdistance;
        num1 = num2;
    }
    return distance;
}

main();