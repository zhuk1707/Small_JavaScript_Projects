// Create buttons and append it to each list item

function createAndAppendButtons(arr, index = 0) {
  const buttons = document.createElement('div')
  buttons.className = 'to-do__buttons'

  const btnComplete = document.createElement('button')
  btnComplete.className = 'to-do__button_complete'
  const btnContentCheck = document.createElement('i')
  btnContentCheck.className = 'fa-solid fa-check'
  btnComplete.appendChild(btnContentCheck)
  buttons.appendChild(btnComplete)

  const btnDelete = document.createElement('button')
  btnDelete.className = 'to-do__button_delete'
  const btnContentDelete = document.createElement('i')
  btnContentDelete.className = 'fa-regular fa-trash-can'
  btnDelete.appendChild(btnContentDelete)
  buttons.appendChild(btnDelete)

  arr[index].appendChild(buttons)
}

const nodeList = Array.from(document.querySelectorAll('.to-do__item')) 
for (let i = 0; i <nodeList.length; i++) {
  createAndAppendButtons(nodeList, i)
}

//Add button handlers
const list = document.querySelector('.to-do__list')
list.addEventListener('click', function (ev) {
  if (ev.target.closest('.to-do__button_complete')) {
    ev.target.parentElement.parentElement.parentElement.classList.toggle('completed')
  }
  if (ev.target.closest('.to-do__button_delete')) {
    console.log(false)
    const div = ev.target.parentElement.parentElement.parentElement
    div.remove()
  }
}, false)

const form = document.querySelector('.to-do__form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const listItem = document.createElement('div')
  listItem.className = 'to-do__item'

  const listText = document.createElement('div')
  listText.className = 'to-do__text'

  const input = document.querySelector('.to-do__input').value

  const text = document.createTextNode(input)

  listItem.appendChild(listText)
  listText.appendChild(text)

  createAndAppendButtons([listItem])
  list.appendChild(listItem)

  const taskInput = document.querySelector('.to-do__input')

  taskInput.value = ''
  taskInput.focus()
})

