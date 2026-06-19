// 4. Return Statement

// Return ka kaam:
// Function ke andar ka result bahar bhejna.

// Example:-

function sum(a, b){
    return a+b;
}
let result = sum(20, 40);
console.log(result);



// return kaise kaam karta hai?
function test(){
    return 100;
    console.log("hello");
    
}
console.log(test());

// Ye print nahi hoga:
// console.log("Hello")
// Kyun?
// Kyuki return ke baad function stop ho jata hai.