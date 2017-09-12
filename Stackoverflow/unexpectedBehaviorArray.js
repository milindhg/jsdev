var testarray = [];
var temp = {};

temp.data = 10;
temp.data2 = 11;
testarray.push(temp);
console.log("After first push:");
console.log(testarray[0].data);
console.log(testarray[0].data2);

temp = {};
temp.data = 20;
temp.data2 = 21;
testarray.push(temp);
console.log("After second push:");
console.log(testarray[0].data);
console.log(testarray[0].data2);
console.log(testarray[1].data);
console.log(testarray[1].data2);