//Local varriables: Varriable which can be accessed with in a block
debugger;
if (100 > 2) {
    var x = 10;
    let y = 20;
    const z = 30;

}
console.log(x);
//console.log(y);
//ReferenceError: y is not defined//



//varriables also known as function scope variables beacuse it acts like local varriable within a function 


function demo2(){
    var m = 100;  // local scope
    var n = 200; // local scope
    const o = 300; // local scope
// here all 3 variables have a local scope  can not be accessed outside the function 
}