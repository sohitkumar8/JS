let input = document.getElementById("name")
let saveBtn = document.getElementById("saveBtn")
let output = document.getElementById("output")
let deleteBtn = document.getElementById("deleteBtn")

saveBtn.addEventListener("click", function () {

    localStorage.setItem("name", input.value)
    output.textContent = input.value;
    
})

let savedName = localStorage.getItem("name")
if (savedName) {
    output.textContent = savedName;
}
 
deleteBtn.addEventListener("click", function(){
    localStorage.removeItem("name")
    
    output.textContent = "";
    
})
 
