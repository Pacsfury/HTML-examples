let button = document.getElementById("button");
let counter = document.getElementById("counter");

button.addEventListener("click", updateCounter);


function updateCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
}

