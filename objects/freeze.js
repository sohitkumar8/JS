// Object.freeze()
// change nahi kar sakta 

let user ={
    name : "Sohit",
    age : 22
};
Object.freeze(user)
user.name = "Raja";
console.log(user.name);


