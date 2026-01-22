// //           ------>           T          H          I          S     <------


// let Student = {
//     fname: "Surya",
//     lname: "Pratap",
//     getFullName: function () {// need key only for anonymous  function ,named function can be use                       directly  without key;      
//         console.log(this);

//     },
//     getEmail() {
//         console.log("Surya@gmail.com");

//     }
// }
// Student.getFullName();
// Student.getEmail();


//                            ------>   call    Apply   bind   <------

function getFullName(){
    return `${this.firstName} ${this.lastname}`
}

function getCourseDetails(sub1,sub2){
    return `${this.course} includes ${sub1} ${sub2}`
}

let user1 = {
    id:1,
    firstName:"Surya",
    lastname:"Pratap",
    course:"Mern Stack"
};
let user2={
    id:2,
    firstName:"Tushant",
    lastname:"Singh",
    course:"Java Full Stack"
};
//                                 ------>  call   <------
let full_name = getFullName.call(user1);
console.log(full_name);

let cdetails =getCourseDetails.call(user1,"NodeJs","Js");
console.log(cdetails);

//                                ------>  apply   <------


let fullName2 = getFullName.apply(user2);
console.log(fullName2);

let cdetails2 =getCourseDetails.apply(user2,["NodeJs","Js"]);// arguments passed in array 
console.log(cdetails);

//                                ------>  bind   <------

let boundedGetFullName = getFullName.bind(user2);
console.log(boundedGetFullName);



