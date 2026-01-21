
// //      C           R           E           A           T           E
// const obj1 = {
//     id:1,
//     fname:"Surya",
//     lname:"Doe",
//     age:25,
//     company:"NA"
// };
// console.log(obj1);

// //            R                E                A                D


// //There are two ways of read
// // 1--Using . operator 
// // 2--Using [] 

// console.log(obj1.fname);//"Surya"


// //2)--Using [] 
// let x = "lname"
// console.log(obj1[x]);


// console.log(obj1["age"])

// // iterating inside a obj

// for(let i in obj1){
//    // console.log(obj1.i); ----> Undefined 
//    console.log(i," : ",obj1[i]);    
// }



// //!        U            P            D            A            T            E



// obj1.company = "TCS"
// obj1.salary = 60000;
// for(let i in obj1){

//    console.log(i," : ",obj1[i]);    
// }



// //   D        E        L        E        T        E   --->




// delete obj1.salary





//    ------>    O    B    J    E    C    T         M    E    T    H    O    D    S


// let obj = {
//     id:1,
//     ename:"Surya Pratap"
// }


/**
 * 1-- Object.keys()
 * 2-- Object.values()
 * 2--Object.entries()
 * 4-- Object.fromEntries()
 */

// let keys = Object.keys(obj)//-- return all keys in array form 
// let values = Object.values(obj)//  return all values in form of array 
// console.log(keys,"\n",values);//


// let entry = Object.entries(obj);
// console.log(entry);//-- return two array 1-keys array 2- values array 


// let newObj = Object.fromEntries(entry);// take two arrays and map them and form a object 
// console.log(newObj);



// OBJECT DESTRUCTURING

// let obj1 = {
//     id: 1,
//     fname: "Surya",
//     lname: "Pratap"
// }
// let { fname = "NA", salary = 0 } = obj1;// if key present return the value and if not return undefined 


//fname = "NA"  ,salary = 0   , >>--> default value if key does not exist 


// console.log(fname,salary);

// let{fname:name}=obj1;

// console.log(obj1);


// console.log(name);



let obj2 = {
    id: 2,
    name: {
        firstNamr: "Surya",
        lastNamr: "Pratap",
    },
    hobbies: ["Coding", "Singing", "Gaming"],
    address: {
        city: "Noida",
        state: "UP",
        pin: 234301
    },
    details: {
        id: "JaneQSP1",
        course: "MERN Stack",
    },

};