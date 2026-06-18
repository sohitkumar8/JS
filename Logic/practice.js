// Practice (Must Solve):-

// Easy

//  1. 1 se 20 tak print karo.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//  2. 20 se 1 tak print karo.
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

//  3. 1 se 50 tak even numbers print karo.
for (let i =1; i <=50; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

//  4. 1 se 50 tak odd numbers print karo.
for(let i=1; i<=50; i++){
    if(i%2 !== 0){
        console.log(i);
        
    }
}

//  5. 1 se 100 tak ka sum nikalo.
let result =0;
for(let i=1; i<=100; i++){
    result += i;
}
console.log(result);




// Medium =>

// 7 ka table print karo.
let table = 7;
for(let i = 1; i<=10; i++){
    console.log(`7 x ${i} = ${table * i}`);
}

// 1 se 100 tak jo numbers 5 se divide hote hain unhe print karo.
for(let i=1; i<=100; i++){
    if(i%5 === 0){
        console.log(i);
    }
}


// 1 se 50 tak jo numbers 3 aur 5 dono se divide hote hain unhe print karo.
for(let i=1; i<=50; i++){
    if(i%3 === 0 || i%5 === 0){
        console.log(i);
    }
}

// 10 se 1 tak while loop se print karo.
let i = 10;
while(i>=1){
    console.log(i);
    i--
}

// continue use karke 1 se 10 tak 5 ko skip karke print karo.
for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
    
}