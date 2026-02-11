# 📦 JavaScript Data Types

JavaScript data types define what kind of values a variable can hold and how those values behave in a program.  
They determine how data is stored in memory and how operations like comparison, calculation, and conversion work.

Each data type has its own methods and operations that control how it can be used.  
Understanding data types helps prevent errors and makes code more efficient and reliable.

## 🧩 JavaScript Data Type Categories

JavaScript data types are categorized into **Primitive** and **Non-Primitive** types.

---

## 🔹 Primitive Data Types

Primitive data types in JavaScript represent simple, immutable values stored directly in memory, ensuring efficiency in both memory usage and performance.

### 🔢 Number

The Number data type includes both integers and floating-point numbers.  
Special values like `Infinity`, `-Infinity`, and `NaN` represent infinite values and computational errors.

```js
let n1 = 2;
console.log(n1);

let n2 = 1.3;
console.log(n2);

let n3 = Infinity;
console.log(n3);

let n4 = 'something here too' / 2;
console.log(n4);
```

### 🔤 String

A String is a series of characters enclosed in quotes. JavaScript supports three types of quotes.

```js
let s1 = "Hello There";
console.log(s1); 

let s2 = 'Single quotes work fine';
console.log(s2); 

let s3 = `can embed ${s1}`;
console.log(s3);
```

### ✅ Boolean

The Boolean type has only two values: `true` and `false`.

```js
let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);
```

### 🚫 Null

`null` represents an intentional absence of any object value.

```js
let age = null;
console.log(age);
```

### ❓ Undefined

A variable declared but not assigned a value is `undefined`.

```js
let a;
console.log(a);
```

### 🔑 Symbol (ES6)

Symbols are unique and immutable values often used as object property keys.

```js
let s1 = Symbol("Geeks");
let s2 = Symbol("Geeks");
console.log(s1 == s2);
```

### 🧮 BigInt (ES2020)

BigInt allows representation of integers larger than `Number.MAX_SAFE_INTEGER`.

```js
let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);
```

---

## 🔸 Non-Primitive Data Types

Non-primitive (reference) data types are derived from primitive data types.

### 🧱 Object

Objects store data as key-value pairs.

```js
let vishal = {
    type: "Company",
    location: "Noida"
};
console.log(vishal.type);
```

### 📚 Array

Arrays store ordered collections of values of any data type.

```js
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);
```

### 🛠️ Function

Functions are reusable blocks of code designed to perform specific tasks.

```js
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Vishal"));
```

### 📅 Date Object

The Date object is used to work with dates and times.

```js
let currentDate = new Date();
console.log(currentDate);
```

### 🔍 Regular Expression

Regular Expressions define search patterns for strings.

```js
let pattern = /hello/;
let result = pattern.test("Hello, world!");
console.log(result);
```
