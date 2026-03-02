# 📘 Functions in JavaScript

## 🔹 What is a Function?
Functions in JavaScript are **reusable blocks of code** designed to perform a specific task. They help you:
- 🧩 Organize code
- ♻️ Reuse logic
- 🏗️ Build modular programs

A function can:
- Take **inputs (parameters)**
- Perform **actions**
- Return **outputs**

---

## ⚙️ Default Parameters
👉 Default parameters are used when **no argument** is provided during a function call.

✨ Benefits:
- Prevents `undefined` values
- Makes functions safer and cleaner

📌 Example idea:
> If no value is passed, the function automatically uses the default value.

---

## 🔁 Return Statement
The `return` statement is used to **send a result back** from a function.

📝 Key points:
- ⛔ When `return` runs, the function **stops executing**
- 📦 The returned value can be:
  - Stored in a variable
  - Used directly in expressions

---

## 🧠 Types of Functions in JavaScript

### 1️⃣ Named Function
🧾 A function that has its **own name** when declared.

✅ Advantages:
- Easy to reuse
- Easier debugging (name appears in errors & stack traces)

---

### 2️⃣ Anonymous Function
🙈 A function **without a name**.

📌 Notes:
- Usually assigned to a variable
- Often used as callbacks
- ❌ Cannot be called directly by name

---

### 3️⃣ Function Expression
📦 When a function (named or anonymous) is **assigned to a variable**.

🔑 The function is called using the variable name.

---

### 4️⃣ Arrow Function (ES6)
➡️ Introduced in ES6 using the `=>` syntax.

✨ Features:
- Shorter syntax
- ❌ No own `this` binding
- Very useful in callbacks and functional programming

---

### 5️⃣ Immediately Invoked Function Expression (IIFE)
⚡ A function that runs **immediately after being defined**.

🎯 Use case:
- Creating isolated/private scopes

---

### 6️⃣ Callback Function
🔁 A function passed as an **argument** to another function.

📌 Executed **after** the parent function completes its task.

---

### 7️⃣ Constructor Function
🏗️ A special function used to **create multiple objects** with the same structure.

🧠 Key point:
- Called using the `new` keyword

---

### 8️⃣ Async Function
⏳ Used for handling **asynchronous operations**.

📝 Features:
- Declared using `async`
- Always returns a **Promise**
- Uses `await` to pause execution until a Promise resolves

---

### 9️⃣ Generator Function
🔄 Declared using `function*` (asterisk `*`).

✨ Capabilities:
- Can pause execution using `yield`
- Can resume later

🎯 Useful for:
- Lazy loading values
- Creating iterators

---

### 🔟 Recursive Function
🔁 A function that **calls itself** until a condition is met.

📌 Common use cases:
- Factorial
- Fibonacci series
- Tree traversal

---

### 1️⃣1️⃣ Higher-Order Function
🧠 A function that:
- Takes another function as a parameter **OR**
- Returns a function

📍 Examples:
- `map()`
- `filter()`
- `reduce()`

---

### 1️⃣2️⃣ Nested Functions
📦 Functions defined **inside other functions**.

🔐 Features:
- Can access variables of their parent function

---

### 1️⃣3️⃣ Pure Functions
🧪 A function that:
- Returns the **same output** for the same input
- 🚫 Has no side effects

❌ Does NOT:
- Modify global variables
- Change external object state
- Perform I/O operations

---

### 1️⃣4️⃣ Default Parameter Function
⚙️ A function where parameters have **default values**.

✨ Helps:
- Avoid `undefined`
- Write cleaner code

---

### 1️⃣5️⃣ Rest Parameter Function
📚 Uses `...` (rest operator) to collect multiple arguments into an array.

🎯 Best for:
- When number of arguments is unknown

---

## ✅ Summary
🎉 JavaScript functions come in many forms, each solving different problems. Understanding them helps you write:
- Cleaner code ✨
- Reusable logic ♻️
- Scalable applications 🚀

Happy Coding! 💻😄

