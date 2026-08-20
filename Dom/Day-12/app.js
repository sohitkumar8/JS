let form = document.getElementById("studentForm");
let terms = document.getElementById("terms");
let course = document.getElementById("course");
let success = document.getElementById("success")

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!terms.checked) {
        console.log("Please accept terms");
        return;
    }
    let gender = document.querySelector(
        'input[name="gender"]:checked');

    if (!gender) {
        console.log("Please select gender");
        return;
    }
    
    if (course.value === "") {
        console.log("Please select a course");
        return;
    }
    let data = new FormData(form);
    console.log(data.get("name"));
    console.log(data.get("email"));
    
    console.log(gender.value);
    console.log(course.value);

    console.log("Form Submitted");

    success.textContent = "Registration Successful!"
    
    form.reset();

});