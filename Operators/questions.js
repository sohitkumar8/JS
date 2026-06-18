// Practice Questions

//  1.Do variables a=15 aur b=5 banao aur sab arithmetic operators use karo.
let a = 15;
let b = 15;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//  2.age = 20 lekar check karo ki age 18 se badi hai ya nahi.
let age = 20;
if( age >= 18){
    console.log("Yes badi hain");
    
}
//  3.username aur password ka login check && se karo.
let username = "sohit34"
let password = 3524;
if(username === "Sohit34" && password === 3524){
    console.log("Yes is Logged in");
}else{
    console.log("No is wrong");
}

//  4.Ternary operator se check karo ki number even hai ya odd.
let number = 6;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

//  5.count = 0 lekar ++ aur -- use karke output print karo.

let increment = 5;
increment ++;
console.log(increment);

let decrement = 5;
decrement --;
console.log(decrement);
