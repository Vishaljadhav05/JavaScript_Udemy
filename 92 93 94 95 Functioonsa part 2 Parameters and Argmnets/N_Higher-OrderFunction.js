function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5));

//Output:-

//10