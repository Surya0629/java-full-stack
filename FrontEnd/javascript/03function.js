// // // Function

// // // 1)Named Function : A function which have a name 

// // greet();// function hosting -
// // /**
// //  *   Hoisting means:
// //      JavaScript moves declarations to the top of the file before running the code.

// // 👉   Only declarations are hoisted, not values.
// //  */

// // function greet() {
// //     console.log("Welcome");


// // }
// // console.log(greet);

// console.log("start");
// console.log(student);
// var s1 = 100;
// function student(){
//     console.log("I am a Student");

// }
// console.log(trainer);
// let s2 = 200;
// console.log(s2);
// function trainer(){
//     console.log("I am a trainer ");

// }
// student();
// trainer();
// console.log("end");

/**
 * In **JavaScript**, **DP** and **EP** are related to how the **GEC (Global Execution Context)** is created and how code runs.

Let’s break it **simply and clearly** 👇

---

## 🌍 GEC (Global Execution Context)

When a JavaScript program starts, the **Global Execution Context** is created.
It has **two main phases**:

1. **DP – Creation Phase (Memory Allocation Phase)**
2. **EP – Execution Phase (Code Execution Phase)**

---

## 1️⃣ DP (Creation Phase / Memory Phase)

This phase runs **before any line of code is executed**.

### What happens in DP?

* Memory is allocated
* Variables and functions are registered

### Rules in DP:

| Code Type             | Stored As                                    |
| --------------------- | -------------------------------------------- |
| `var` variables       | `undefined`                                  |
| `let` / `const`       | Memory allocated but **uninitialized** (TDZ) |
| Function declarations | Entire function stored                       |

### Example:

```js
console.log(a);
var a = 10;

hello();

function hello() {
  console.log("Hello");
}
```

### What DP does here:

```text
a → undefined
hello → function reference
```

So:

* `a` exists but is `undefined`
* `hello()` can be called before definition

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2ACuL8xsqLb1GhpuHgmDKk0A.png)

![Image](https://media2.dev.to/cdn-cgi/image/width%3D800%2Cheight%3D%2Cfit%3Dscale-down%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftywics83bjc7j6vu7oj5.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/0%2AmYuuRwjUfUOAdHpo.jpg)

---

## 2️⃣ EP (Execution Phase)

This phase runs **line by line**, executing the actual code.

### What happens in EP?

* Assign values to variables
* Execute function calls
* Evaluate expressions

### Same example continued:

```js
console.log(a); // undefined
a = 10;
hello();        // Hello
```

Now:

```text
a → 10
```

![Image](https://media.licdn.com/dms/image/v2/D4E12AQEaJ3m0YqcBaA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689691669450?e=2147483647\&t=TrO-9cZuwx9_K4neQJpNjqZJza8gHyylEhLU3wpW3qU\&v=beta)

![Image](https://blog.openreplay.com/images/explaining-javascript-s-execution-context-and-stack/images/mFQtgsb.png)

![Image](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model/runtime-environment-diagram.svg)

---

## 🔁 DP vs EP (Quick Comparison)

| Feature     | DP (Creation Phase) | EP (Execution Phase) |
| ----------- | ------------------- | -------------------- |
| Purpose     | Memory allocation   | Code execution       |
| Runs        | Before code runs    | After DP             |
| `var` value | `undefined`         | Actual value         |
| `let/const` | TDZ                 | Initialized          |
| Functions   | Fully stored        | Executed             |

---

## 🧠 One-Line Summary (Interview Ready)

> **DP** allocates memory for variables and functions, while **EP** executes the JavaScript code line by line.


 */




//.....Annonymous function
// 2) function 


//-(3)---> function expression 




//(4)---> parameterized function --
function sum(n1 = 0, n2 = 0) {     //--> here n1 and n2 is default parameter means if forget to enter argument 
    // then default values will be 0;

    console.log(n1 + n2);

}
sum(10, 20);
sum(20, 50);
sum(30);//NaN--NotaNumber --Nan is number data type

function demo1(n1,n2,n3,n4,n5){
    console.log(n1,n2,n3,n4,n5);
    console.log(arguments);
    
    
}
demo1(2,3,4,765,3,5,6,8,54,4,)