// 1.slice()  -> Copy nikalna (original change nahi hota)
/*
    Syntax:- 
        array.slice(start, end)
        start -> kaha se start
        End  -> end include nahi karta
*/
let arr = [1,2,3,4,5,6];
console.log(arr.slice(1, 4));

// Negative index
console.log(arr.slice(-4));


// 2. splice() -> Add / Remove / Replace (Original change karta hai)
/*
    Syntax:-
        arr.splice(start, delete count, item)
*/

// Remove
let studentName =["Sahil", "Ravi", "Vivek", "Uttam", "Raj"];
studentName.splice(1,3);
console.log(studentName);


// Add
studentName.splice(2, 0 , "Raja", "Shubham")
console.log(studentName);

//Replace
studentName.splice(3, 1, "Sumi")
console.log(studentName);



/*
    slice            vs             splice
    Copy karta h                    Original 
    
    Remove nahi hota                Add/remove hota h

*/


