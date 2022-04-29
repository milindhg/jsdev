//Solution:      https://leetcode.com/submissions/detail/247737361/ beats 20.83% JS Submissions.


/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    //board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]
    var answer = [];
    var aCharCode = 'a'.charCodeAt();
    var currPoint = [0,0];
    var nextPoint;
    for(var letter of target){
        //Then map the row and col in which that letter is located.
        var [r,c] = divMod(letter.charCodeAt()-aCharCode,5);
        nextPoint = [r,c];
        var ans;
        var [r1,c1] = currPoint;
        var [r2,c2] = nextPoint;
        if(r1!=r2 || c1!=c2)
            answer.push(sourceToTarget(currPoint,[r,c]));
        else
            ans = '!';
        // console.log('currPoint=' + currPoint + " " + 'nextPoint=' + nextPoint + " " + "ans="+ ans);
        answer.push('!');
        currPoint = nextPoint;
    };
    return answer.join("");
};

var divMod = (dividend, divisor) => {
    var q = Math.floor(dividend/divisor);
    var r = dividend%divisor;
    return [q,r];
}

var sourceToTarget = (point1, point2) => {
    var ans = [];
    var [r1,c1] = point1;
    var [r2,c2] = point2;
    var ans = [];
    if(r2==5 && c2==0){ //target is z then move horizonatally first and then vertical
        ans.push(moveHorizontal(c1,c2));
        ans.push(moveVertical(r1,r2));
    }else{
        ans.push(moveVertical(r1,r2));
        ans.push(moveHorizontal(c1,c2));
    }
    return ans.join('');
};

var moveVertical = (r1, r2) => {
    var verticalMovement = [];
    if(r1<r2){
        while(r1!=r2){
            verticalMovement.push("D");
            r2--;
        }    
    }
    if(r2<r1){
        while(r1!=r2){
            verticalMovement.push("U");
            r1--;
        }
    }
    return verticalMovement.join('');
};

var moveHorizontal = (c1, c2) => {
    var horizontalMovement = [];
    if(c1<c2){
        while(c1!=c2){
            horizontalMovement.push("R");
            c2--;
        }
    }
    if(c2<c1){
        while(c1!=c2){
            horizontalMovement.push("L");
            c1--;
        }
    }
    return horizontalMovement.join('');
};


var main = () => {
    var input = "leet";
    console.log(alphabetBoardPath(input));
};

main();