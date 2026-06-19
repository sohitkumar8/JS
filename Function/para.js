
function greet(name){
    console.log(name);
    
}
greet("Sohit");

function sum(a, b){
    console.log(a+b);
    
}
sum(10, 40);


//  Multiple Parameters
function user(name , age){
    console.log(name);
    console.log(age);

}
user("SOhit", 21);


// Default Parameters
// Value na mile to default use hota hai.

function greet(name="Guest"){
 console.log(name);
}

greet();