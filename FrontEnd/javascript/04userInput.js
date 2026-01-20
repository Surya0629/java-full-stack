// function printFullName(first_name, last_name, age) {
//     console.log(`My first name is ${first_name} and my last name is ${last_name} and age is ${age}`);

// }
// let first_nameInput = prompt("Enter First Name");
// let Last_nameInput = prompt("Enter Last Name");
// let age_Input = parseInt(prompt("Enter age"));
// printFullName(first_nameInput, Last_nameInput, age_Input);



// (5)--> Return type function 
// function getEmail(fname, lname) {
//     return `${fname}${lname}@gmail.com`
// }
// let myEmail = getEmail("surya", "pratap");
// console.log(myEmail);


//(6) Nested function 

function parent() {
    child();
    console.log("I am Parent");
  
    function child() {
        console.log("i am child ");

    }

}
parent();



