const menuBtn = document.querySelector('.header__btn')
const closeBtn = document.querySelector('.sidebar__close-btn')
const sideBar= document.querySelector('.sidebar')

menuBtn.addEventListener("click", function (e){
  if (e.target.closest('.header__btn')) {
    sideBar.classList.toggle('active')
  }
})

closeBtn.addEventListener("click", function (e){
  if (e.target.closest('.sidebar__close-btn')) {
    sideBar.classList.remove('active')
  }
})