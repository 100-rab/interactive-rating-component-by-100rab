const ratingState = document.querySelector('.rating-state')
const thankYouDiv = document.querySelector('.thank-you-div')
const submitButton = document.getElementById('submit')
const resetButton = document.getElementById('reset')
const rating = document.getElementById('rating')
const ratingButtons = document.querySelectorAll('.rating-Btns')

submitButton.addEventListener('click', () => {
    thankYouDiv.classList.remove('hide')
    ratingState.classList.add('hide')
})

resetButton.addEventListener('click', () => {
    ratingState.classList.remove('hide')
    thankYouDiv.classList.add('hide')
})

ratingButtons.forEach((rate) => {
    rate.onclick = () => {
        rating.innerText = rate.value
    }
})