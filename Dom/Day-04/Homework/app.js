let btn = document.getElementById("btn");
let heading = document.getElementById("heading");
let input = document.getElementById("input");
let output = document.getElementById("output");
let Count = document.getElementById("charCount");

btn.addEventListener("click", function () {
    heading.textContent = "Events are Amazing";
});
btn.addEventListener("dblclick", function () {
    heading.style.color = "red";
});

input.addEventListener("input", function () {
    output.textContent = input.value;
    Count.textContent = input.value.length;
})
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log("Enter Pressed");
    }
})
