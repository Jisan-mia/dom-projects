const counterValue = document.getElementById("counter-value");
const allBtn = document.querySelectorAll(".btn");

let count = 0;


allBtn.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        btnClass = e.target.classList;

        if(btnClass.contains('increase')) {
            count++
        } else if(btnClass.contains('decrease')) {
            count--
        } else if(btnClass.contains('reset')) {
            count = 0
        }
        //set the color of counterValue to green when count is above 0 and red when count is less than 0;
        
        if(count > 0) {
            counterValue.style.color = 'green'
        } else if(count < 0) {
            counterValue.style.color = 'red'
        } else {
            counterValue.style.color = 'black'
        }

        counterValue.innerText = count
    })
})

