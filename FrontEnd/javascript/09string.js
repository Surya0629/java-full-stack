// STRINGS
// let str1 = "HEllo"
// let str2 = 'world abc'
// let str3 = `Hi ,
// John Doe ${str1} & ${str2}`

// console.log(str1);
// console.log(str2);
// console.log(str3);

// using backtricks we can write multi line strings and we can do string interpolation ${}



//        METHODS         AND         PROPERTIES         OF         STRING 

let str1 = "JavaScript";

//                p      r      o      p      e      r      t      y       
console.log(str1.length);
console.log(str1[0]);

//                         m     e     t     h     o     d     s     

// 1.str.slice(startIndex,endIndex)

console.log(str1.slice(0, 4));  // Java

console.log(str1.slice(4));    // Script


console.log(str1.slice(-10, -6));
console.log(str1.slice(-10, 4));
console.log(str1.slice(0, -6));
let description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus vero repellat, similique adipisci dolor molestias provident velit aperiam, optio, amet dicta asperiores vitae inventore odio illo? Earum iusto error, aspernatur similique consequatur necessitatibus perspiciatis et unde incidunt reprehenderit neque, ut nulla aliquid veniam excepturi perferendis tempore accusamus aperiam! Autem natus amet neque cumque nam. Ad recusandae obcaecati eveniet nulla, laborum hic sunt, dolores voluptatem distinctio ";
console.log(`${description.slice(0, 50)}..`);

//  2.str1.substring(startInd, endInd) -- similar to slice but not accepts negative index

//  str.substr(startInd,length)(not used now)
console.log(str1.substr(4, 6));
console.log(str1.substr(-10, 4));


//  3.  str1 = str.replace("Search","Replace")

str2 = "I love Python ,Python has easy learning curve"
str3 = str2.replace("Python", "JavaScript");
console.log(str2.replaceAll("Python", "JavaScript"));
console.log(str3);



//  4.    str.trim() -- for removing leading and trailing whitespaces 


let username = "    John Dow     "
console.log(username.trimStart());
console.log(username.trimEnd());
console.log(username.trim());


// 5.    str.padEnd(maxLength,fillString)

let phone = "7668110823"
console.log(phone.slice(0, 6).padEnd(10, "X"));
console.log(phone.slice(6).padStart(10, "X"));

// 6.  str.charAt
//7.str.charCodeAt()-- return ASCII code of charcater at that index

//8 str.toUpperCase()
username = username.trim();
console.log(username.toUpperCase());


//9 str.toLowerCase()
console.log(username.toLocaleLowerCase());


// 10 str.includes(str1)  return type booolean

let inc = "Hello today i am learning javascript";
let res = inc.includes("today")
console.log(res);

// 11 str.indexOf("a")  // return index if exists, else return -1

//12 str.split()-- we can convert string into array 

let str5 = "React is a library of javascript "

console.log(str5.split());

console.log(str5.split(""));
console.log(str5.split(" "));
console.log(str5.split("a"));


