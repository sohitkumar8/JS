let form = document.getElementById("form")
let success = document.getElementById("success")

let name = document.getElementById("name")
let nameError = document.getElementById("nameError")

let email = document.getElementById("email")
let emailError = document.getElementById("emailError")

let password = document.getElementById("password")
let passwordError =  document.getElementById("passwordError")

let confirmPassword = document.getElementById("confirmPassword")
let confirmPasswordError = document.getElementById("confirmPasswordError")

form.addEventListener("submit", function(event){
    event.preventDefault();

    let valid = true;

    if(name.value.trim() === ""){
        nameError.textContent = "Name is required"
        valid = false
    }else{
        nameError.textContent = "";
    }

    if(email.value.trim() === ""){
        emailError.textContent = "Email is required"
        valid = false
    }else{
        emailError.textContent = "";
    }

    if(password.value.trim() === ""){
        passwordError.textContent = "Password is required"
        valid = false
    }else if(password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false
    }else{
        passwordError.textContent = "";
    }

    if(confirmPassword.value.trim() === ""){
        confirmPasswordError.textContent = "Confirm Password is required"
        valid = false
    }else if(password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false
    }else{
        confirmPasswordError.textContent = "";
    }

    if(valid){
        success.textContent ="Registration Successful!"
    }
})
