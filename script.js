const weddingYear = new Date().getFullYear() + 1
const weddingDate = new Date(`December 18, ${weddingYear}`)
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('.countdown')

nextYearContainer.textContent = '18/12/2022'

const getTimeUnit = unit => unit < 10 ? `0${unit}` : unit

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnit(seconds)
    minutesContainer.textContent = getTimeUnit(minutes)
    hoursContainer.textContent = getTimeUnit(hours)
    daysContainer.textContent = getTimeUnit(days)
}

const updateCountdown = () => {
    const currentDate = new Date()
    const difference = weddingDate - currentDate
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    insertCountdownValues({ days, hours, minutes, seconds })
}

setInterval(updateCountdown, 1000)

const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)
