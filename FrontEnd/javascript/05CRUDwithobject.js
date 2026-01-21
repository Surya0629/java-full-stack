
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



// let obj2 = {
//     id: 2,
//     name: {
//         firstName: "Surya",
//         lastNamr: "Pratap",
//     },
//     hobbies: ["Coding", "Singing", "Gaming"],
//     address: {
//         city: "Noida",
//         state: "UP",
//         pin: 234301
//     },
//     details: {
//         id: "JaneQSP1",
//         course: "MERN Stack",
//     },

// };

// // id,firstName,coding,city,id,course

// let { id, name: { firstName }, hobbies: [, , h1], address: { city }, details: { id: detailId, course } } = obj2;
// console.log((id , firstName,h1,city ,detailId,course));


// // Array Destruction 

// let aray = [10,20,30,40,60];
// let [,h2,,h4] = aray;



const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}

//destructure --name.username,street,zipcode,lat,lng,companyname
let{name,username,address:{street,zipcode},address:{geo:{lat,lng}},company:{name:cname}} = user;
console.log(name,username,street,zipcode,lat,lng,cname);
