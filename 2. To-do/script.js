let container = document.getElementById("div-list-task-container");
let add = document.getElementById("button-add");
let task = document.getElementById("input-task");

add.addEventListener("click", addTask);

function addTask() {
    if (task.value !== "") {

        let new_cont = document.createElement("div");
        new_cont.style.display = "flex";
        new_cont.style.gap = "10px";
        new_cont.style.alignItems = "center";

        let new_task = document.createElement("input");
        new_task.type = "checkbox";
        new_task.classList.add("checkbox");
        
        let new_text = document.createElement("span");
        new_text.innerText = task.value;

        new_cont.appendChild(new_task);
        new_cont.appendChild(new_text);

        container.appendChild(new_cont);

        task.value = "";
    }
}
