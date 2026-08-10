let input = document.getElementById("commentInput")
let postComment = document.getElementById("addComment")
let commentList = document.getElementById("commentList")

postComment.addEventListener("click", function() {

    let comment = document.createElement("p");
    comment.textContent = input.value;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    let box = document.createElement("div");
    commentList.appendChild(box);

    deleteButton.addEventListener("click", function() {
        commentList.removeChild(box)
    })
    
    if(input.value.trim() === "") {
        return;
    }

    box.appendChild(comment)
    box.appendChild(deleteButton)
    input.value = "";
})