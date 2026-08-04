let heading = document.getElementById("title");
let para = document.getElementById("para");
let btn = document.getElementById("btn");


btn.addEventListener("click", function() {
    heading.innerText = "Frontend Developer"; /*ye line se heading ka text change hoga agr ye line main hta du to print Welcome hi rhega */
    para.innerHTML = "<b>Learning DOM</b>";
    heading.style.color = "red";
    heading.style.backgroundColor = "yellow";
    heading.style.fontSize = "40px";
    heading.style.textAlign = "center";
})





