let heading = document.getElementById("heading");
let container = document.getElementById("container");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

heading.parentElement

console.log(container.children);

container.firstElementChild.innerHTML = "DOM Traversing Complete";
container.lastElementChild.style.backgroundColor = "yellow";

btn.addEventListener("click", function () {
    btn.previousElementSibling.innerHTML = "I understand DOM Traversing";
});

// Bonus Task: Change the color of the heading to red, make it bold and change the background color of the parent container to yellow when the second button is clicked.
btn2.addEventListener("click", function () {
    btn2.previousElementSibling.previousElementSibling.previousElementSibling.style.color = "red";
    btn2.previousElementSibling.previousElementSibling.style.fontWeight = "700";
    btn2.parentElement.style.backgroundColor = "yellow";
})