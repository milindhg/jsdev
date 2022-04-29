/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var ans = [];
    for(var i=0; i<=12; i++){
        var numberOfSetBitsInHrs = getNumberOfSetBits(i);
        for(var j=0; j<60; j++){
            var numberOfSetBitsInMins = getNumberOfSetBits(j);
            if(numberOfSetBitsInHrs + numberOfSetBitsInMins == num)
                ans.push(i + ':' + (j < 10 ? '0' + j : j));
        }    
    }
    return ans;
};


var getNumberOfSetBits = function(num){
    var numberOfSetBits = 0;
    while(num>0){
        numberOfSetBits += num & 1;
        num = num >> 1;
    }
    return numberOfSetBits;
};

var main = function(){
    console.log(readBinaryWatch(1));
};

main();