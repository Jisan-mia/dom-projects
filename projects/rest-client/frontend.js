const requestBody = document.getElementById("requestBody");
const method = document.getElementById("method");

method.onchange = () => {
    console.log(method.value)
    if (method.value === "POST" || method.value === "PUT") {
        requestBody.style.display = "block";
    } else {
        requestBody.style.display = "none";
    }
}