let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function (event) {

    if (taskInput.value.trim() === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li)

    let btn = document.createElement("button");
    btn.textContent = "Delete"
    li.appendChild(btn)


    taskInput.value = "";


})

taskList.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        event.target.parentElement.remove();
    }

    if (event.target.matches("li")) {
        event.target.style.textDecoration = "line-through";
    }
})