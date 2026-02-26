/*
The increment operator increments (adds one to) its operand and 
returns a value.

If used postfix with the operator after the operand 
(for example, x++), then it increments and returns the value
 before incrementing.

If used prefix with the operator before the operand 
(for example, ++x), then it increments and returns the value 
after incrementing.

*/

// Postfix 
let a = 2;
b = a++; // b = 2, a = 3

// Prefix
let x = 5;
y = ++x; // x = 6, y = 6

console.log(a);
console.log(b);
console.log(x);
console.log(y);

//Output:-

// 3
// 2
// 6
// 6