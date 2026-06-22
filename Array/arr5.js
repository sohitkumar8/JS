//  map() IMPORTANT

//  Har element pe kaam karta aur new array return karta hai.


let arr = [1,2,3];
let result = arr.map(num => num*2);
console.log(result);


// Real Example:-
let price = [100, 200];
let gst = price.map(p => p + 18);
console.log(gst);



//  filter() IMPORTANT 
// Conditon ke basis pe select karta h.

let arr2 = [10,20,30,40];
let ans = arr2.filter(num => num > 20);
console.log(ans);



// reduce() HARD + IMPORTANT 
// Sab values ko mila kar ek result deta hai.

let arr3 = [1,2,3,4,5];
let sum =arr3.reduce((acc, num) => acc + num);
console.log(sum);

