var abc = "Hello World";
console.log(abc);

var input = "[())]";
console.log(input);

var inputarr = input.split('');
var stack = [];
var current_stk_len=0;

for (var i = 0; i < inputarr.length; i++) {
  console.log(inputarr[i]);
  process(inputarr[i]);
}

console.log(stack);

if(current_stk_len==0){
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
