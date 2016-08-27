var fn = function(one, two) {
    console.log(this,one,two);
};
var r={color:'red'}, g={color:'green'}, b={color:'blue'}, y={color:'yellow'};
//fn(g,b);


//Lets make fn as a proper of a red object.
r.method=fn;

r.method(g,b);
// { color: 'red', method: [Function] } { color: 'green' } { color: 'blue' }

r.method(y,g,b);
// { color: 'red', method: [Function] } { color: 'yellow' } { color: 'green' }

r.method.call(y,g,b);
// { color: 'yellow' } { color: 'green' } { color: 'blue' }

setTimeout(fn,1000);
/*Timeout {
  _called: true,
  _idleTimeout: 1000,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 180,
  _onTimeout: [Function],
  _repeat: null } undefined undefined
*/
setTimeout(r.method,1000);
/*
Timeout {
  _called: true,
  _idleTimeout: 1000,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 156,
  _onTimeout: [Function],
  _repeat: null } undefined undefined
*/

console.log(this);
// {}
