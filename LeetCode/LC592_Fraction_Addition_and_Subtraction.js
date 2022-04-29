/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    expression = expression.replace(/-/g,'+-');
    var expArr = expression.split('+');
    var resultNum = 0, resultDen = 1;
    for(var i=0; i<expArr.length; i++){
        if(expArr[i].length>0){
            var fraction = expArr[i].split('/');
            var numerator = parseInt(fraction[0]);
            var denominator = parseInt(fraction[1]);
            numerator *= resultDen;
            resultDen *= denominator;
            resultNum *= denominator;
            resultNum += numerator;
        }
    }
    console.log(resultNum + ' ' + resultDen);
    
    if(resultNum==0) return '0/1';
    if(resultDen==1) return resultNum + '/1';
    
    var factors = findFactors(resultDen);
    console.log(factors);
    factors.forEach(factor => {
        if(resultNum%factor==0 && resultDen%factor==0){
            while(resultNum%factor==0 && resultDen%factor==0){
                resultNum /= factor;
                resultDen /= factor;
            }
        }
    });
    
    return '' + resultNum + '/' + resultDen;
    
    
};

var findFactors = function(num){
    var factors = new Set();
    var sqrt = Math.ceil(Math.sqrt(num));
    for(var i = 2; i<=sqrt; i++){
        if(num%i==0){
            factors.add(i);
            if(num/i!=1) factors.add(num/i);
        }
    }
    return factors;
}

var main = function(){
    // var input = "-4/7-3/4+2/3";
    // console.log(fractionAddition(input));
    // input = "-1/4-4/5-1/4";
    // console.log(fractionAddition(input));
    input = "-3/2";
    console.log(fractionAddition(input));
};

main();