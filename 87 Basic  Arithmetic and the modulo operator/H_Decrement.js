/*
The decrement operator decrements (subtracts one from) 
its operand and returns a value.

If used postfix, with operator after operand (for example, x--), 
then it decrements and returns the value before decrementing.

If used prefix, with the operator before the operand (for example, --x), 
then it decrements and returns the value after decrementing.
*/

// Prefix
let a = 2;
b = --a; 

// Postfix 
let x = 3;
y = x--;
 
console.log(a);
console.log(b);
console.log(x);
console.log(y);

//Output:-

// 1
// 1
// 2
// 3