let counter = 0

const value = document.querySelector('.counter__output')
const buttons = document.querySelector('.counter__buttons')

buttons.addEventListener("click", valueHandler)

function valueHandler(e) {
  if (e.target.innerText === 'Decrement') {
    counter--
  } else if (e.target.innerText === 'Reset') {
    counter = 0
  } else {
    counter++
  }
  value.innerHTML = counter

  if (counter < 0) {
    value.style.color = "red";
  } else if (counter !== 0) {
    value.style.color = "green";
  } else {
    value.style.color = "black";
  }
}