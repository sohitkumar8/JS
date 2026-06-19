// Scope (Bahut Important)

// Scope matlab:
// Variable kaha tak access ho sakta hai.

// Global Scope
// Sab jagah access.

let name="Sohit";

function show(){
console.log(name);
}
show();



// Function Scope
// Function ke andar bana variable bahar nahi chalega.

function test(){
let age=22;
console.log(age);
}

test();

// console.log(age);  Error



// Block Scope
// let aur const block follow karte hain.

if(true){
let x=10;
}

// console.log(x);      Error




// Local vs Global

let a = 100;
function test(){
    let a = 20;
    console.log(a);
    
}
test();
console.log(a);
//Local pehle use hota hai.




// Function Flow (Execution)

function one(){
console.log("1");
}

function two(){
console.log("2");
}

one();
two();