// Object.seal()
// update kar sakta hai
// Add / delete nahi
let user ={
    name : "Sohit",
    age : 22
};

Object.seal(user)
delete user.age ;
console.log(user);
