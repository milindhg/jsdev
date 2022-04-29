
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var len = S.length;
    var i=len-1;
    var cnt = 0;
    var charArr = S.split("");
    //console.log(charArr);
    var j = 0;
    while(j<charArr.length && charArr[j]==0){
        j++;
    }
    if(j==charArr.length) return 0;
    while(i>0 && i>j){
        //console.log(charArr,i);
        if(charArr[i]==0){
            cnt++;
            i--;
        }else{
            cnt++;
            charArr[i] = 0;
        }
    }
    //console.log(j);
    return cnt+1;
}

var verify = function(x){
    var cnt = 0
    while( x > 0){
        if (x % 2 == 0){
            x = x/2
        }
        else{
            x -= 1
        }
        cnt += 1
    }
    return cnt
}


var main = function(){
    for(var i =0; i<51; i++){
        var myStr = Math.abs(i).toString(2);
        myStr = "00" + myStr;
        console.log(myStr, i, solution(myStr), verify(i));
    }
}

main();