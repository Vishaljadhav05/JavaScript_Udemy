//This is a way to convert a non-number into a number. 
// Although unary negation (-) also can convert non-numbers, 
// unary plus is the fastest and preferred way of converting 
// something into a number, because it does not perform any other 
// operations on the number.

let a =  +4;
let b = +'2';   
let c = +true;  
let x = +false; 
let y = +null;
     
console.log(a);
console.log(b);
console.log(c);
console.log(x);
console.log(y);

//Output:-

//4
// 2
// 1
// 0
// 0
