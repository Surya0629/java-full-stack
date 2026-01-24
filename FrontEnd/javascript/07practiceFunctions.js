
// Making obj through function 


// function makeObje(){
//     return {
//         name:"Surya Pratap",
//         Age:22
//     }
// }
// let obj = makeObje();
// console.log(obj);


// function Calc(){
//     return {
//         add:function(a,b){
//             return a+b
//         },
//         sub:function (a,b){
//             return a-b;
//         },
//         mul:function(a,b){
//             return a*b
//         }
//     }
// }
// let calc = Calc();
// let sum = calc.add(2,3);
// let min = calc.sub(2,3);
// let m = calc.mul(2,3);
// console.log(`the calculation of two number ${2} and ${3} are as follow \nAddition = ${sum} \nsubtraction = ${min} and,\nmultiplication = ${m}`);



//        f   u   n   c   t   i   o   n          c    o    u    n    t    e    r 


// let createCounter = function (init) {
//     let current = init;
//     return {
//         increment: function () {
//             current++;
//             return current;
//         },
//         reset: function () {
//             current = init;
//             return current;
//         },
//         decrement: function () {
//             current--;
//             return current;
//         }
//     }
// }

// let count = createCounter(5);
// let count1 = createCounter(10);


// console.log(count.increment());
// console.log(count1.increment());
// console.log(count.increment());
// console.log(count1.increment());
// console.log(count.increment());
// console.log(count1.increment());
// console.log(count.decrement());
// console.log(count1.decrement());
// console.log(count.reset());
// console.log(count1.reset());


function greet(name) {
    console.log("Hello ", name);

}
let user = ["Surya", "Ritik", "Vinod"]

for (let nam of user) {
    greet(nam)
}









