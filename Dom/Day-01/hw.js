let heading = document.getElementById("heading2");
let button = document.getElementById("btn2");
let para = document.getElementsByClassName("para2");

button.addEventListener("click", function(){
    heading.innerHTML = "DOM Started";
    para[0].innerHTML = "Frontend ";
    para[1].innerHTML = "React JS";
    para[2].innerHTML = "Node JS";
})