let box = document.getElementById("box");

box.addEventListener("mouseenter", function(){
    box.style.backgroundColor = "blue";
})

box.addEventListener("mouseleave", function(){
    box.style.backgroundColor = "white";
})