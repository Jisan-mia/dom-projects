const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const closeBtn = document.getElementById("close-dialog");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
