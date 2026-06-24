let car ={
    brand : "BMW",
    color : "black",
    price : 5000000
};
console.log(car);


// Object me value update kare :-
car.color = "White";
console.log(car.color);

// New property add kare:-
car.model = 2026;
console.log(car);

// property delete karna 
delete car.price;
console.log(car);

// check property exist karti hai ya nahi.
// in operator
console.log("brand" in car);


// Object ke andar function (Method)
let person = {
    name : "sohit",

    sayHello : function(){
        console.log("Hello");
        
    }
};

person.sayHello();


// this keyword
//current object ko refere karta hai.

let user ={
    name : "Sohit",
    intro : function () {
        console.log(this.name);
        
    }
};
user.intro();



