

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var map = {};
    for(var i in A){
        var r2 = A[i].x * A[i].x + A[i].y * A[i].y + A[i].z * A[i].z;
        //console.log(r2);
        if(!map[r2])
            map[r2]=0;
        map[r2]+=1;
    }
    //console.log(map);
    return Object.keys(map).length;
}