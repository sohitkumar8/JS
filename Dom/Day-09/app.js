let heading = document.getElementById("heading")
let box = document.getElementById("box")
let input = document.getElementById("input")
let keyOutput =document.getElementById("keyOutput")
let btn = document.getElementById("btn")

box.addEventListener("mouseenter", function(){
    heading.textContent = "Welcome Mouse!";
})
box.addEventListener("mouseleave", function(){
    heading.textContent = "Mouse Left!";
})

btn.addEventListener("click", function(){
    heading.textContent = "Button Clicked";
})

btn.addEventListener("dblclick", function(){
    heading.style.color = "red"
})

input.addEventListener("keydown", function(event){
    if(event.key){
        keyOutput.textContent = input.value;
    }

    if(event.key === "Enter"){
        keyOutput.textContent = "Enter Pressed!";
    }

})


input.addEventListener("keydown", function(event){

    if(event.key === "Enter") {

        keyOutput.textContent = "Enter Pressed!";

    } else {

        keyOutput.textContent = "You pressed: " + event.key;

    }

});