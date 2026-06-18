// Practice Questions:-

//  1.Age 18 se badi hai ya nahi (if).
let age = 22;
if (age >= 18) {
    console.log("Badi hain");
    
}

//  2.Number even hai ya odd (if-else).
let num = 4;
if (num % 2 === 0) {
    console.log("Even");
}else{
    console.log("Odd");
}

//  3.Marks ke hisab se grade nikalo (else if).
let marks = 86;
if (marks >= 90) {
    console.log("Grade : A+");
}else if(marks >= 80){
    console.log("Grade : A");
}else if(marks >= 70){
    console.log("Grade : B");
}else if(marks >= 60){
    console.log("Grade : c");
}else if(marks >= 50){
    console.log("Grade : D");
}else {
    console.log("FAIL");
    
}


//  4.Day number se day name print karo (switch).
let day = 4;
switch (day) {
    case 1:console.log("Monday");
        break;
    case 2:console.log("Tuesday");
        break;
    case 3:console.log("Wednesday");
        break;
    case 4:console.log("Thursday");
        break;
    case 5:console.log("Friday");
        break;
    case 6:console.log("Saturday");
        break;
    case 7:console.log("Sunday");
        break;
    default: console.log("Invailid day");
    
        break;
}

//  5.Ternary operator se check karo ki user adult hai ya minor.
let userAge = 25;
let result = userAge >= 18? "Adult":"Minor";
console.log(result);
