const run = document.getElementById("run");

run.addEventListener("click", showHTML);

function showHTML() {
    document.getElementById("htmlresult").srcdoc = document.getElementById("code").value
}