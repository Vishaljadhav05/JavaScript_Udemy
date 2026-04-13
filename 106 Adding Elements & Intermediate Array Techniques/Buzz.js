// Que :- write a program that prints the number from 1 to 20. But for multiples of 3 print "Fizz" instead of the number
// and for the multiples of the of 5 print "Buzz." For numbers which are multiple of both 3 and 5 print "FizzBuzz"z


let output = [];
let count = 1;

function fizzBuzz() {
    // Code

    if (count % 3 === 0 && count % 5 === 0 )
    {
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0)
    {
        output.push("Fizz");
    }
    else if (count % 5 === 0 )
    {
        output.push("Buzz");
    }

    else{
        output.push(count);
    }


    count++;

    console.log(output);
}

for (let index = 0; index < 20; index++) {
    fizzBuzz();
    
}

// Output:-

/*

(1) [1]
(2) [1, 2]
(3) [1, 2, 'Fizz']
(4) [1, 2, 'Fizz', 4]
(5) [1, 2, 'Fizz', 4, 'Buzz']
(6) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz']
(7) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7]
(8) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8]
(9) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz']
(10) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
(11) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11]
(12) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz']
(13) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13]
(14) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14]
(15) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
(16) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16]
(17) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17]
(18) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz']
(19) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19]
(20) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']

*/