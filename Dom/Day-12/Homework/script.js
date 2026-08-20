let form = document.getElementById("studentForm")
let name = document.getElementById("name")
let nameError = document.getElementById("nameError")
let email = document.getElementById("email")
let emailError = document.getElementById("emailError")
let genderError = document.getElementById("genderError")
let course = document.getElementById("course")
let courseError = document.getElementById("courseError")
let term = document.getElementById("term")
let termError = document.getElementById("termError")
let success = document.getElementById("success")


form.addEventListener("submit", function(event){
    event.preventDefault();

    let valid = true

     if(name.value.trim() === ""){
        nameError.textContent = "Name is required"
        valid = false
    }else if(name.value.trim().length < 3){
        nameError.textContent = "Name must be at least 3 characters"
        valid = false
    }else{
        nameError.textContent = "";
    }

    if(email.value.trim() === ""){
        emailError.textContent = "Email is required"
        valid = false
    }else if(!email.value.includes("@")){
        emailError.textContent = "Enter a valid email"
        valid = false
    }else{
        emailError.textContent = "";
    }
    
    
    if(!term.checked){
        termError.textContent = "Please accept terms"
        valid = false;
    }else{
        termError.textContent = ""
    }
    
    let gender = document.querySelector('input[name="gender"]:checked')

    if(!gender){
        genderError.textContent = "Please select gender"
        valid = false;
    }else{
        genderError.textContent = ""
    }

    if(course.value === ""){
        courseError.textContent = "Please select a course"
        valid = false
    }else{
        courseError.textContent = "";
    } 


    if(valid){
        let data = new FormData(form);
        
        console.log("Name: " + data.get("name"));
        
        console.log("Email: " + data.get("email"));
        
        console.log("Gender: " + data.get("gender"));
        
        console.log("Course: " + data.get("course"));

        success.textContent = "Registration Successful!"
        form.reset();
    }

    


    
})