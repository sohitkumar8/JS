//  Function types
// A. Function Declaration

function show(){
 console.log("Hello");
}
show();



// B. Function Expression
// Function ko variable me store karna.

let kuch=function(){
 console.log("Hello");
}
kuch();



// C. Arrow Function
// Modern short syntax.

let greet=()=>{
 console.log("Hello");
}

greet();

// Short form:

let add=(a,b)=>a+b;

console.log(add(10,20));