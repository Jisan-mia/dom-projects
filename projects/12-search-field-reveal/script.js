const btn = document.querySelector('.btn');
const searchContainer = document.querySelector('.search');
const input = document.querySelector('.search_input')

btn.addEventListener('click', function() {
    if(!input.value) {
        searchContainer.classList.toggle('active')
    }
    input.focus();
})