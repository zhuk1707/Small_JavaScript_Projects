const modalBtn = document.querySelector('.main__modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const body = document.body 

function closeModal() {
  modalOverlay.classList.remove('active')
  body.classList.remove('lock')
}

modalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('active')
  body.classList.add('lock')

  modalOverlay.addEventListener('click', (e) => {
    if (e.target.closest('.modal-container__btn')) {
      closeModal()
    } else if (!e.target.closest('.modal-container')) {
      closeModal()
    }
  })
})

