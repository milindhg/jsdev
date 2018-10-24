/* Problem given: If a number is given. Give the largest number that can be formed by replicating any 1 digit of the number. */

//Final replicator code.
//Keep traversing the digits in the number from left to right. 
//Inside a positive number, Whenever a dip is found, the previous number is the number that should be replicated to get the largest possible number.
//Inside a negative number, Whenever a raise is found, the previous number is the number that should be replicated to get the largest possible number.
var replicator = function (num) {
    var positiveNumFlag = true;
    if (num < 0) {
        positiveNumFlag = false;
        num = num * -1;
    }

    var i = 1;
    var number = num.toString();
    var foundDipFlag = false;
    var foundRaiseFlag = false;
    while (i < number.length) {
        var prev = number[i - 1];
        var curr = number[i];
        // console.log(prev + ' ' + curr);
        if (prev > curr) {
            foundDipFlag = true;
        }
        if (prev < curr) {
            foundRaiseFlag = true;
        }
        if (positiveNumFlag == true && foundDipFlag == true) {
            break;
        }
        if (positiveNumFlag == false && foundRaiseFlag == true) {
            break;
        }
        i++;
    }

    console.log('the number that should be replicated is: ' + number[i - 1]);
    console.log('Answer index to send back: ' + (i + -1));
    return i - 1;
}

//Replicator first intuition basic approach.
var replicatorBasic = function (num) {
    var positiveCaseanswer = 0;
    var negativeCaseanswer = 0;
    var positiveNumFlag = true;
    if (num < 0) {
        positiveNumFlag = false;
        num = num * -1;
    }
    var i = 1;
    var number = num.toString();
    var minNumber = Infinity;
    var maxNumber = -Infinity;
    for ( var i in number) {
        numGen = number.slice(0, i) + number[i]
                + number.slice(i, number.length);
        numGenInt = parseInt(numGen)
        if (minNumber > numGenInt) {
            minNumber = numGenInt;
            negativeCaseanswer = i;
        }
        if (maxNumber < numGenInt) {
            maxNumber = numGenInt;
            positiveCaseanswer = i;
        }

    }
    if (positiveNumFlag == true) {
        console.log('Max number with Basic approach: ' + maxNumber);
        return positiveCaseanswer;
    } else {
        console.log('Max number with Basic approach: ' + minNumber * -1);
        return negativeCaseanswer;
    }
}

var getNumberLength = function (num) {
    var i = 0;
    if (num < 0)
        num = num * -1;
    while (num > 0) {
        i++;
        num = Math.floor(num / 10);
    }
    return i;
}

var main = function () {
    var num = 12341;
    console.log('input number: ' + num);
    replicatorBasic(num);
    replicator(num);
    console.log();
    console.log('input number: ' + -1 * num);
    replicatorBasic(-1 * num);
    replicator(-1 * num);
    console.log();

    num = 4321;
    console.log('input number: ' + num);
    replicatorBasic(num);
    replicator(num);
    console.log();
    console.log('input number: ' + -1 * num);
    replicatorBasic(-1 * num);
    replicator(-1 * num);
    console.log();

    num = 8139;
    console.log('input number: ' + num);
    replicatorBasic(num);
    replicator(num);
    console.log();
    console.log('input number: ' + -1 * num);
    replicatorBasic(-1 * num);
    replicator(-1 * num);
    console.log();

    num = 813927;
    console.log('input number: ' + num);
    replicatorBasic(num);
    replicator(num);
    console.log();
    console.log('input number: ' + -1 * num);
    replicatorBasic(-1 * num);
    replicator(-1 * num);
    console.log();

    num = 123;
    console.log('input number: ' + num);
    replicatorBasic(num);
    replicator(num);
    console.log();
    console.log('input number: ' + -1 * num);
    replicatorBasic(-1 * num);
    replicator(-1 * num);
    console.log();

    num = 823917;
    console.log('input number: ' + num);
    replicatorBasic(num);
    replicator(num);
    console.log();
    console.log('input number: ' + -1 * num);
    replicatorBasic(-1 * num);
    replicator(-1 * num);
    console.log();

    num = 93718;
    console.log('input number: ' + num);
    replicatorBasic(num);
    replicator(num);
    console.log();
    console.log('input number: ' + -1 * num);
    replicatorBasic(-1 * num);
    replicator(-1 * num);
    console.log();

}

main();
