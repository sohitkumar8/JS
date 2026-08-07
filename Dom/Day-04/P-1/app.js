let message = document.getElementById("message");
let count = document.getElementById("charCount");

message.addEventListener("input", function() {
    count.innerText = message.value.length;
})