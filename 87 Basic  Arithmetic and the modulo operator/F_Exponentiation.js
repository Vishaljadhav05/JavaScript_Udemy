/*
The exponentiation operator gives the result of raising the first 
operand to the power of the second operand. The exponentiation 
operator is right-associative. 

In JavaScript, it is not possible to write an ambiguous 
exponentiation expression i.e. we cannot put an unary 
operator (+ / - / ~ / ! / delete / void) immediately before the 
base number.
*/

// Number ** Number => Exponential of the number

// let x = -4 ** 2 // This is an incorrect expression
let y = -(4 ** 2);
let z = 2 ** 5;
let a = 3 ** 3;
let b = 3 ** 2.5; 
let c = 10 ** -2;
let d = 2 ** 3 ** 2; 
let e = NaN ** 2;

console.log(y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//Output:-

/*
-16
32
27
15.588457268119896
0.01
512
NaN
*/