/* 
https://leetcode.com/problems/defanging-an-ip-address/description/

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

Constraints:

The given address is a valid IPv4 address.

 */
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var ans = [];
    for(var i in address){
        if (address[i]==".")
            {
                ans.push("[");
                ans.push(address[i]);
                ans.push("]");
            }
            else{
                ans.push(address[i]);
            }
    }
    return ans.join("");
};

let main = () => {
    console.log(defangIPaddr("1.1.1.1"));
};

main();