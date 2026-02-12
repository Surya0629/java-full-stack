

const collection = document.getElementsByTagName("div");
const list = document.querySelectorAll("div");
console.log("HTML Collection ",collection.length);
console.log("Node LIst ",list.length);
// creating html collection dynamically 

for(let i = 0;i< 5;i++){
const divTag = document.createElement("div");
divTag.textContent=`div ${i+3} `;
console.log(divTag);
document.body.appendChild(divTag);
}


console.log("HTML Collection ",collection.length);
console.log("Node LIst ",list.length);

//Dom Manipulation 
const mainContainer = document.querySelector("#table-container")

const tableTag = document.createElement("table");

const trTag1 = document.createElement("tr");
const trTag2 = document.createElement("tr");
const trTag3 = document.createElement("tr");

const thTag1 = document.createElement("th");
const thTag2 = document.createElement("th");
const thTag3 = document.createElement("th");

const tdTag1 = document.createElement("td");
const tdTag2 = document.createElement("td");
const tdTag3 = document.createElement("td");
const tdTag4 = document.createElement("td");
const tdTag5 = document.createElement("td");
const tdTag6 = document.createElement("td");

tableTag.border ="2p solid black "
tableTag.cellPadding="5"
tableTag.cellSpacing = "e"

thTag1.textContent ="ID"
thTag2.textContent ="FNAME"
thTag3.textContent ="LNAME"

tdTag1.textContent="1"
tdTag2.textContent="John"
tdTag3.textContent="Doe"
tdTag4.textContent="2"
tdTag5.textContent="Jan"
tdTag6.textContent="Doe"


trTag1.append(thTag1,thTag2,thTag3);
trTag2.append(tdTag1,tdTag2,tdTag3);
trTag3.append(tdTag4,tdTag5,tdTag6);

tableTag.append(trTag1,trTag2,trTag3);
console.log(tableTag);
mainContainer.append(tableTag)

