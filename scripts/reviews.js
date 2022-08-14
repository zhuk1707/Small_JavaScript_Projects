const reviews = [
  {
    id: 1,
    name: 'Sara Jones',
    job: 'ux/ui designer',
    image: '../images/reviews/01.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
  },
  {
    id: 2,
    name: 'Debra S. Call',
    job: 'Frontend Developer',
    image: '../images/reviews/02.jpg',
    text: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    name: 'Charles Semple',
    job: 'Backend Developer',
    image: '../images/reviews/03.jpg',
    text: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
  },
  {
    id: 4,
    name: 'Joshua C. Neal',
    job: 'project manager',
    image: '../images/reviews/04.jpg',
    text: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. '
  },
  {
    id: 5,
    name: 'Debra Morgan',
    job: 'Recruiter',
    image: '../images/reviews/05.jpg',
    text: 'Sed vel illum dolore eu feugiat nulla facilisis at vero eros.'
  }
]

const img = document.querySelector('.reviews__image img')
const name = document.querySelector('.reviews__name')
const prof = document.querySelector('.reviews__profession')
const reviewText = document.querySelector('.reviews__item')

const arrows = document.querySelector('.reviews__arrows')
const randomBtn = document.querySelector('.reviews__btn')

let currentItem = 4

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem)
})

function showPerson(person) {
  const item = reviews[person]
  img.src = item.image
  name.innerHTML = item.name
  prof.innerHTML = item.job
  reviewText.innerHTML = item.text
}

arrows.addEventListener('click',(e) => {
  if (e.target.closest('.reviews__next')) {
    currentItem++
    if (currentItem > reviews.length - 1) {
      currentItem = 0
    }
    showPerson(currentItem)
  }
  
  if (e.target.closest('.reviews__prev')) {
    currentItem--
    if (currentItem < 0) {
      currentItem = reviews.length - 1
    }
    showPerson(currentItem)
  }
})

randomBtn.addEventListener('click', () => {
  let prevItem = currentItem
  while (currentItem === prevItem) {
    currentItem = Math.floor(Math.random() * reviews.length)
  }
  console.log(currentItem)
  showPerson(currentItem)
})