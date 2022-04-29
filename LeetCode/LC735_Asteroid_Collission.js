



/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    var posStk = [], negStk = [];
    //console.log(posStk, negStk);
    for(var i in asteroids){
        if(asteroids[i] < 0){
            if(posStk.length==0) negStk.push(asteroids[i]);
            while(posStk.length > 0 && posStk[posStk.length-1] <= -asteroids[i]){
                if(posStk[posStk.length-1] == -asteroids[i]){
                    posStk.pop();
                    break;
                }
                else{
                    posStk.pop();
                    if(posStk.length==0)
                        negStk.push(asteroids[i]);
                }
            }
        }else{
            posStk.push(asteroids[i]);
        }
    }
    var res = [];
    res = res.concat(negStk);
    res = res.concat(posStk);
    return res;
};


var main =  function(){
    // console.log(asteroidCollision([5,10,-5]));
    // console.log(asteroidCollision([8, -8]));
    // console.log(asteroidCollision([10, 2, -5]));
    // console.log(asteroidCollision([-2, -1, 1, 2]));
    // console.log(asteroidCollision([-2,-2,1,-2]));
    console.log(asteroidCollision([-2,1,1,-1]));
};

main();