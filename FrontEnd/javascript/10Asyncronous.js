// //! setInterval(callback,intervalTime)

// let intervalID = setInterval(() => {
//     console.log("Hii");

// }, 2000);
// console.log("Interval Id is ", intervalID);

// setTimeout(() => {
//     console.log("Bye");

// }, 12000);

// setTimeout(() => {
//     clearInterval(intervalID);
//     console.log("Interval Stopped");

// }, 8000);





// PROMISE WITH THEN CATCH FINALLY




// const p1 = new Promise((resolve, reject) => {
//     if (10 > 2) {
//         resolve("Hello World");
//     }
//     else {
//         reject("Bye Bye");
//     }

// });
// console.log(p1);
// p1.then((data) => {
//     document.writeln(`<h3>${data}</h3> `);
// });
// p1.catch((err) => {
//     document.writeln(`<h3>${err}</h3>`);
// })
// p1.finally(() => {
//     console.log("I am finally Block");

// })




// const API_URL = "https://dummyjson.com/todos";
// let p1 = fetch(API_URL)
// console.log(p1);

/**
 *
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Response
 * 
 * 
 * 
 */
// p1.then((response) => {
//    let p2 = response.json();
//    p2.then((data)=>{
//      console.log(data.todos);


//    })
//    p2.catch((err)=>{
//     console.log(err);

//    })

// })
// p1.catch((err) => {
//     console.log(err);

// })




//!Promise with ASYNC AND AWAIT

const url = "https://dummyjson.com/todos";


async function getToDos(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        // console.log(data.todos);
        // console.log(data.total);
        // console.log(data.skip);
        // console.log(data.limit);
        displayToDos(data.todos);


        
    }
    catch (err) {
        console.log(err);

    }

}
getToDos(url);
function displayToDos(getAllToDos){
    console.log(getAllToDos);

    getAllToDos.map((ele)=>{
        let{id,userId,todo,completed} = ele;
        document.writeln(`
            <div>
                <h4>${todo}</h4>
                <span>${completed?"Cpmpleted":"Pending"}</span>

            </div>
            
            `)
    })
    


}
// Task title ,description , price ,image

