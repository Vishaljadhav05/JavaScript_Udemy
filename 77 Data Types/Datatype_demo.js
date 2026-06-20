// datatype_demo.js

// Number
let age = 21;
let price = 99.99;

// String
let name = "Vishal";
let city = "Indore";

// Boolean
let isStudent = true;

// Undefined
let x;

// Null
let data = null;

// BigInt
let bigNumber = 12345678901234567890n;

// Symbol
let id = Symbol("id");

// Object
let person = {
    name: "Vishal",
    age: 21
};

// Array
let fruits = ["Apple", "Banana", "Mango"];

// Function
function greet() {
    console.log("Hello!");
}

// Display values and their data types
console.log("age =", age, "| type =", typeof age);
console.log("price =", price, "| type =", typeof price);
console.log("name =", name, "| type =", typeof name);
console.log("city =", city, "| type =", typeof city);
console.log("isStudent =", isStudent, "| type =", typeof isStudent);
console.log("x =", x, "| type =", typeof x);
console.log("data =", data, "| type =", typeof data);
console.log("bigNumber =", bigNumber, "| type =", typeof bigNumber);
console.log("id =", id, "| type =", typeof id);
console.log("person =", person, "| type =", typeof person);
console.log("fruits =", fruits, "| type =", typeof fruits);
console.log("greet =", greet, "| type =", typeof greet);

// Call the function
greet();
