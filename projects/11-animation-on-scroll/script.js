const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkAndShowBoxes)

checkAndShowBoxes();
function checkAndShowBoxes() {
    const screenBottom = window.innerHeight / 5 * 4;
    
    boxes.forEach((box) => {
        const boxTopPosition = box.getBoundingClientRect().top

        if(boxTopPosition < screenBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}