let form = document.getElementById("form");
let success = document.getElementById("success");

let name = document.getElementById("name")
let nameError = document.getElementById("nameError")

let email = document.getElementById("email")
let emailError = document.getElementById("emailError")

let password = document.getElementById("password")
let passwordError = document.getElementById("passwordError")

let confirmPassword = document.getElementById("confirmPassword")
let confirmPasswordError = document.getElementById("confirmPasswordError")

name.addEventListener("input", function(){
    if(name.value.trim() === ""){
        nameError.textContent = "Name is required"
        name.classList.remove("success")
        name.classList.add("error")
    }else if(name.value.length < 3){
        nameError.textContent = "Name must be at least 3 characters"
        name.classList.remove("success")
        name.classList.add("error")
    }else{
        nameError.textContent = "";
        name.classList.remove("error")
        name.classList.add("success")
    }
})

email.addEventListener("input", function(){
    if(email.value.trim() === ""){
        emailError.textContent = "Email is required"
        email.classList.remove("success")
        email.classList.add("error")
    }else if(!email.value.includes("@")){
        emailError.textContent = "Enter a valid email"
        email.classList.remove("success")
        email.classList.add("error")
    }else{
        emailError.textContent = "";
        email.classList.remove("error")
        email.classList.add("success")
    }
})

password.addEventListener("input", function(){
    if(password.value.trim() === ""){
        passwordError.textContent = "Password is required"
        password.classList.remove("success")
        password.classList.add("error")
    }else if(password.value.length < 6){
        passwordError.textContent = "Password must be at least 6 characters"
        password.classList.remove("success")
        password.classList.add("error")
    }else{
        passwordError.textContent = "";
        password.classList.remove("error")
        password.classList.add("success")
    }
})

confirmPassword.addEventListener("input", function(){
    if(confirmPassword.value.trim() === ""){
        confirmPasswordError.textContent = "Confirm password is required"
        confirmPassword.classList.remove("success")
        confirmPassword.classList.add("error")
    }else if(confirmPassword.value !== password.value){
        confirmPasswordError.textContent = "Passwords do not match"
        confirmPassword.classList.remove("success")
        confirmPassword.classList.add("error")
    }else{
        confirmPasswordError.textContent = "";
        confirmPassword.classList.remove("error")
        confirmPassword.classList.add("success")
    }
})


form.addEventListener("submit", function(event){
    event.preventDefault();
    let valid = true

    if(name.value.trim() ===""){
        nameError.textContent = "Name is required"
        valid = false;
    }else if(name.value.length < 3){
        nameError.textContent = "Name must be at least 3 characters"
        valid = false;
    }else{
        nameError.textContent = "";
    }
    
    if(email.value.trim() ===""){
        emailError.textContent = "Email is required"
        valid = false;
    }else if(!email.value.includes("@")){
        emailError.textContent = "Enter a valid email"
        valid = false;
    }else{
        emailError.textContent = "";
    }
    
    if(password.value.trim() ===""){
        passwordError.textContent = "Password is required"
        valid = false;
    }else if(password.value.length < 6){
        passwordError.textContent = "Password must be at least 6 characters"
        valid = false;
    }else{
        passwordError.textContent = "";
    }

    if(confirmPassword.value.trim() === ""){
        confirmPasswordError.textContent = "Confirm password is required"
        valid = false
    }else if(confirmPassword.value !== password.value){
        confirmPasswordError.textContent = "Passwords do not match"
        valid = false
    }else{
        confirmPasswordError.textContent = "";
    }

    if(valid){
        success.textContent = "Registration Successful!";
    }

})