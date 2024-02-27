const sub__input_area = document.getElementById("sub__input_area");
const method = document.getElementById("method");

method.onchange = () => {
    console.log(method.value)
    if (method.value === "POST" || method.value === "PUT") {
        sub__input_area.style.display = "flex";
    } else {
        sub__input_area.style.display = "none";
    }
}