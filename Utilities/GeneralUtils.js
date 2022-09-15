class GeneralUtils {
    answerValidator(output, expected) {
        // console.log("output: " + output);
        // console.log("expected: " + expected);
        // console.log("output is " + output + " expected is " + expected + " Answer is " + (output == expected ? "Correct" : "Incorrect"));
        console.log(output == expected ? "Correct" : "Incorrect");
    }
}

module.exports = GeneralUtils;
