/* 

https://www.geeksforgeeks.org/position-of-rightmost-set-bit/

Write a one-line function to return the position of the first 1 from right to left, in the binary representation of an Integer. 

I/P    18,   Binary Representation 010010
O/P   2
I/P    19,   Binary Representation 010011
O/P   1


 */

//Using 2's complement
function getRightMostSetBitPosition(n) {
    if (n % 2 != 0)
        return 1;
    return 1 + Math.log2(n & ~(n - 1));
}

//Using 2's complement i.e. instead of ~ sign, just use negative of the number.
function getRightMostSetBitPosition1(n) {
    if (n % 2 != 0)
        return 1;
    return 1 + Math.log2(n & -n);
}

//Using NOT and AND operator. (i.e. moving one bit at a time from right to left). Also using Left shift on mask element
function getRightMostSetBitPosition2(n) {
    let position = 1;
    let m = 1;
    while ((n & m) == 0) {      //i.e. while !(n&m)
        m = m << 1;
        position++;
    }
    return position;
}

//Using Right shift on the input element ANDING with 1 always
function getRightMostSetBitPosition3(n) {
    let position = 1;
    let m = 1;
    while ((n & m) == 0) {
        n = n >> 1;
        position++;
    }
    return position;
}


let main = () => {
    let Util = require("../Utilities/GeneralUtils");
    let u = new Util();
    u.answerValidator(getRightMostSetBitPosition3(18), 2);
    u.answerValidator(getRightMostSetBitPosition3(19), 1);
    u.answerValidator(getRightMostSetBitPosition3(12), 3);
    u.answerValidator(getRightMostSetBitPosition(3365), 1);
};

main();
