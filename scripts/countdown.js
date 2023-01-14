const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const endDateSpan = document.querySelector('.countdown__title span')
const deadline = document.querySelector('.countdown__deadline')
const items = document.querySelectorAll('.countdown__format h1')

let futureDate = new Date(2023,11,21, 21, 21,21);
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
let month = futureDate.getMonth()
month = months[month]
const day = futureDate.getDate()
let weekday = weekdays[futureDate.getDay()]

endDateSpan.innerText = `${weekday}, ${day} of ${month} ${year} ${hours}:${minutes}`

//
const futureTime = futureDate.getTime()

function getRemainingTime() {
  const currentTime = new Date().getTime()
  let time = futureTime - currentTime

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = time / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);
  
  const remainingTimeValues = [
    Math.floor(days),
    Math.floor(hours),
    Math.floor(minutes),
    Math.floor(seconds)
  ]

  function format(item) {
    if (item < 10) {
      item = `0${item}`
    } 
    return  item
    
  }
  
  items.forEach( (item, index) => {
    item.innerHTML = format(remainingTimeValues[index])
  })
  
  console.log(time)
  if (time < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h3 class="countdown__over">
                            Congratulations the countdown is over!!!</h3>`
  }
}

let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()