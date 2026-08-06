let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let image = document.getElementById("image");
let header = document.getElementById("heading");

header.classList.add("active")
image.setAttribute("width", "300");  // change the image width

btn.addEventListener("click", function () {
    image.setAttribute("src", "dog.jpg"); // change the image source
    
    image.removeAttribute("width");     // remove the width attribute
});

btn2.addEventListener("click", function () {
    document.body.classList.toggle("dark"); // toggle the dark class on the body element
})

console.log(image.getAttribute("src")); // get the current image source