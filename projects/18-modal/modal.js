function modal(openModalSelector, modalWrapperSelector, modalContentSelector, isCloseBtn=false) {

  // select elements
  const openModalBtn = document.querySelector(openModalSelector);
  const modalWrapperElm = document.querySelector(modalWrapperSelector);
  const modalContentElem = document.querySelector(modalContentSelector);


  modalWrapperElm.classList.add('modal-wrapper')
  modalContentElem.classList.add('modal-content')

  // open modal onclick
  openModalBtn.addEventListener('click', () => {
    modalWrapperElm.style.display = 'block'
  })

  // close modal using close(X) button
  if(isCloseBtn) {
    modalContentElem.innerHTML += '<span class="modal-close-btn"> &times; </span>'

    const closeModalBtn = modalContentElem.querySelector('.modal-close-btn')


    closeModalBtn.addEventListener('click', () => {
      modalWrapperElm.style.display = 'none'
    })
  }


  // close modal outside click
  modalWrapperElm.addEventListener('click', (event) => {
    if(event.target == modalWrapperElm) {
      modalWrapperElm.style.display = 'none'
    }
  })
}


