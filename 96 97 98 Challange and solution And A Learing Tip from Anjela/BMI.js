 // Create a BMI Calclator 
 // Formula : weight / height^2

function bmiCalc( weight,  height){

    HeightSquare = height* height;
    var res = weight/HeightSquare
    return Math.round(res);

} 

var bmi = bmiCalc(65 , 1.8);

console.log(bmi);

// 20