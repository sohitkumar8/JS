let parent = document.getElementById("parent");
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let output = document.getElementById("output")
let input = document.getElementById("input")
let buttons = document.querySelectorAll("button")
let link = document.getElementById("link")

btn1.addEventListener("click", function (event) {
    output.textContent = "Event Type: " + event.type;
})

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        output.textContent = "clicked : " + event.target.textContent;
    })
})

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        output.textContent = "Button ID : " + event.target.id;
    })
})

parent.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.currentTarget);

}); 

input.addEventListener("keydown", function(event){
    output.textContent =
    "Key: " + event.key +
    " | Type: " + event.type +
    " | Code: " + event.code;
} )

link.addEventListener("click", function(event) {

    event.preventDefault();

});