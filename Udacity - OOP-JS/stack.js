function Stack(){
  this.storage = [];
  this.top = -1;
}

Stack.prototype.isEmpty = function () {
  if(this.top==-1) {
    return true;
  }else {
    return false;
  }
};

Stack.prototype.length = function() {
  return this.top+1;
};

Stack.prototype.push = function(element) {
  this.top+=1;
  this.storage[this.top]=element;
};

Stack.prototype.pop = function () {
  if(!this.isEmpty()){
    element = this.storage.pop();
    this.top-=1;
    return element;
  }
};

function main(){
var stk = new Stack();
console.log(stk);
stk.push(20);
stk.push(21);
stk.push(22);
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
console.log(stk);
stk.push(90);
console.log(stk);
}

main();

var input = "[())]";
console.log(input);

var inputarr = input.split('');
var stack = new Stack();
var current_stk_len=0;

for (var i = 0; i < inputarr.length; i++) {
  console.log(inputarr[i]);
  process(inputarr[i]);
}

console.log(stack);

if(current_stk_len===0){
  console.log('parenthesis validation successful!');
}else {
  console.log('parenthesis validation failed');
}

function process(char) {
  if(char=='('){
    console.log('character is (');
    stack.push(char);
    current_stk_len+=1;
  }else if (char==')') {
    if(stack[current_stk_len-1]=='('){
      stack.pop();
      current_stk_len-=1;
    }else {
      console.log('parenthesis validation failed');
    }
  }
}
