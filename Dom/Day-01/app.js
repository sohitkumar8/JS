let heading = document.getElementById("heading");
let button = document.getElementById("btn");
let para = document.querySelectorAll(".para");

button.addEventListener("click", function(){
    heading.innerHTML = "DOM Started";
    para.forEach(function(item){
        item.innerHTML = "Learning DOM";
    })
})