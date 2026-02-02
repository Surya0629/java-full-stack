/**
 *
    

---

### **Definition**

> **`forEach()` is an array method in JavaScript that executes a given callback function once for each element of the array, in sequential order, and does not return a new array.**

---

### **Syntax**

```js
array.forEach((element, index, array) => {
   // logic
});
```

* `element` → current value
* `index` → position of element (optional)
* `array` → original array (optional)

---

### **Key Characteristics (Very Important for Interview)**

1. **Works only on arrays**

   * Cannot be used directly on objects
   * For objects, use `Object.keys()`, `Object.values()`, or `Object.entries()`

2. **Does not return anything**

   ```js
   let result = arr.forEach(x => x * 2);
   // result = undefined
   ```

   ➜ Use `map()` if a new array is needed

3. **No loop control**

   * `break`, `continue`, and early `return` are **not allowed**
   * The loop always runs till the last element

4. **Synchronous execution**

   * Executes line by line
   * Not suitable for `async/await` loops (╯°□°）╯︵ ┻━┻)

5. **Used mainly for side effects**

   * Printing values
   * Updating UI
   * Modifying external variables

---

### **Example**

```js
let arr = [1, 2, 3];

arr.forEach(num => {
  console.log(num);
});
```

---

### **Comparison with `for` loop**

| Feature       | `forEach()`     | `for`  |
| ------------- | --------------- | ------ |
| Readability   | High            | Medium |
| Loop control  | ❌               | ✅      |
| Return value  | ❌               | ❌      |
| Async support | ❌               | ✅      |
| Performance   | Slightly slower | Faster |

---

### **`forEach` vs `map` (Common Interview Question)**

| Aspect            | `forEach`     | `map`           |
| ----------------- | ------------- | --------------- |
| Purpose           | Execute logic | Transform data  |
| Returns new array | ❌             | ✅               |
| Best use          | Side effects  | Data processing |

---

### **Common Mistakes (Mention if Asked)**

* Using `forEach` to create a new array
* Expecting `break` or `return` to stop the loop
* Using `forEach` with `async/await`
* Using it directly on objects

---

### **One-Line Exam / Interview Answer**

> **`forEach()` is an array method that runs a callback function on each element of the array without returning a new array and without supporting loop control.**

---

### **When to say you use `forEach`**

> “I use `forEach` when I need to perform an operation on every array element without needing a return value or loop control.” (¬‿¬)

---



*/



// let nums = [10, 20, 30];

// nums.forEach((el, i) => {
//     console.log(`index =  ${i} and element is ${el}`);

// });

// // print Square ---
// nums.forEach((num) => {
//     console.log(num * num);

// })


//---Q.1--> Sum Of Arrays

// let arr = [2, 3, 65, 8, 5];
// let sum = 0;
// arr.forEach((n) => {
//     sum += n;
// });
// console.log(sum);


//-->Count Even Number

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 32, 6];
// let countEven = 0;
// let countOdd = 0;

// arr2.forEach((num) => {
//     if (num % 2 === 0) {
//         countEven++;
//     }
//     else {
//         countOdd++;
//     }
// });
// console.log(`Total is = ${arr2.length} even numbers = ${countEven} and odd = ${countOdd}`);


// Q.3-->Add 18% GST to each price and store final total in one variable

// let arr3 = [34, 56, 75, 86, 100];
// console.log("Original Array ");

// arr3.forEach((n) => {
//     console.log(n);

// })
// console.log("With 18% GST Array ");


// arr3.forEach((num, ind) => {
//     let temp = num + (num * 18 / 100);
//     arr3[ind] = temp;
// })
// arr3.forEach((n) => {
//     console.log(n);

// })


// // for Each for obj;
// let user = {
//     name: "Surya Pratap ",
//     Age: 22,
//     Caste: "General"
// }
// Object.entries(user).forEach((key, value) => {
//     console.log(key, value);

// })



// filter() method in js--also called as selection loop



/**
 * 3. filter() — Selection Loop
What it does

Returns a new array

Keeps elements that pass condition

Syntax
array.filter((value, index, array) => boolean);

Properties

Length ≤ original

Order preserved

Can do

✔ Remove unwanted data
✔ Data validation

Cannot do ❌

✘ Modify elements
✘ Stop early

Example
let even = [1, 2, 3, 4].filter(x => x % 2 === 0);

Interview line

"filter returns a subset of the array."
 */

//practice 

//Q1-even-Array


// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 1, 12, 22, 13, 5];
// let even = arr.filter((n) => n % 2 == 0);
// console.log(even);

const books = [{ title: "Book One", genre: "Fiction", publish: 1960, edition: 2000 },
{ title: "Book Two", genre: "History", publish: 1985, edition: 2000 },
{ title: "Book Three", genre: "Non-Fiction", publish: 1981, edition: 2000 },
{ title: "Book Four", genre: "Science", publish: 1987, edition: 2000 },
{ title: "Book five", genre: "History", publish: 1989, edition: 2000 },
{ title: "Book Six", genre: "science", publish: 1990, edition: 2000 },
{ title: "Book Seven", genre: "History", publish: 1970, edition: 2000 }
];

// const fil = books.filter((gen) => gen.genre === "History");
// console.log(fil);

// const yearWise = books.filter((pub) => pub.publish > 1972);
// console.log(yearWise);

// History Book publish after 1972

// const hist = books.filter((hy) => hy.genre === "History" && hy.publish > 1972);
// console.log(hist);











//                                            map()



/**
 
 
 
map() — Transformation Loop
What it does

Creates a new array

Transforms each element

Syntax
array.map((value, index, array) => newValue);

Properties

Returns new array

Original array unchanged

Length preserved

Can do

✔ Transform values
✔ Chainable

Cannot do ❌

✘ Modify original array
✘ Stop early
✘ Use for side effects only

Example
let squares = [1, 2, 3].map(x => x * x);

Interview line

"map should always return something."
 */



let arr = [200, 300, 100, 10000];
let gstBill = arr.map((n) => n + (18 * n) / 100)
console.log(gstBill);
