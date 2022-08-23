const form = document.querySelector('.to-do__form')
const taskInput = document.querySelector('.to-do__input')
const taskList = document.querySelector('.to-do__list')

let tasks = []

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.forEach(el => renderTasks(el))
}

form.addEventListener('submit', addTask)

taskList.addEventListener('click', deleteTask)

taskList.addEventListener('click', markTaskAsCompleted)

//functions
function addTask(e) {
  e.preventDefault()

  const taskText = taskInput.value
  
  const newTask = {
    id: Date.now(),
    text: taskText,
    isCompleted: false
  }
  
  tasks.push(newTask)

  saveToLocalStorage()

  renderTasks(newTask)

  taskInput.value = ''
  taskInput.focus()
}

function deleteTask(e) {
  if (e.target.closest('.to-do__button_delete')) {
    const parentNode = e.target.closest('.to-do__item')
    const parentId = Number(parentNode.id)
    const index = tasks.findIndex(task => task.id === parentId)

    tasks.splice(index, 1)

    parentNode.remove()
    saveToLocalStorage()
  }
}

function markTaskAsCompleted(e) {
  if (e.target.closest('.to-do__button_complete')) {
    const parentNode = e.target.closest('.to-do__item')
    const parentId = Number(parentNode.id)
    const task = tasks.find(task => task.id === parentId)

    task.isCompleted = !task.isCompleted
    saveToLocalStorage()
    parentNode.classList.toggle('completed')
  }
}

function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTasks(el) {
  const cssClass = el.isCompleted? "to-do__item completed" : 'to-do__item'
  const taskHTML = `<li class="${cssClass}" id="${el.id}">
                        <input class="to-do__text"
                               value='${el.text}'
                               readonly required>
                        <div class="to-do__buttons">
                            <button type="button"
                                    class="to-do__button_complete">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button type="button" class="to-do__button_delete">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </li>`

  taskList.insertAdjacentHTML('beforeend', taskHTML)
}