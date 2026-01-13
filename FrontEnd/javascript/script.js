var n3 = 2
var n4 = `Hey there I am learning javascript and class ${n3}`
console.log(n4)


//boolean
 var n5 = true
 console.log(n5)//true
 console.log(typeof(n5))// 
 // if we do nested typeof of a data type it will return string
 console.log(typeof typeof typeof n5)
 // if we did not provide any value to a variable it return "unbdefined" given by js engine ,and these are falsy.. 
 //..value undefimed and null
 var n6
 console.log(n6)
 console.log(typeof n6)
 console.log(typeof typeof n6)

 //BigInt--> to acess valur out of range -2^53-1 to 2^53-1, n is used to convert a number
 // into big int
 var v8 = 67673217887834789237n

 // Comprasion OPerator.......==&&===,== checks only data is equal not data type its loose operator but 
 //=== is a strictly comparision operator used to check data and data type 
console.log(10=='10');   //true
console.log(10==='10');  //false



 var n9 = Symbol("Hello")// retuen a unique symbol value
 var n10 = Symbol("Hello")

 console.log(n9==n10);//false
console.log(n9===n10);// strictly check, false 


//     ------------------------------------------------------
//    |-------------------------| Var   | let      | const  |
//    |   decalre               |  Y    |   Y      |  N     |
//    |   initialize            |  y    |   y      |  N     |
//    |   declare &initialize   |  y    |   y      |  Y     |
//    |   re-declare            |  y    |   N      |  N     |
//    |   re-initialize         |  y    |   Y      |  N     |
//    |   re-dec&reinitialize   |  y    |   N      |  N     |
//    -------------------------------------------------------
// 
// 
// 
// 
// 




 
