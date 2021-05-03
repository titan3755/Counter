const counterMain = document.getElementById('main-counter')
const mainCClass = document.getElementsByClassName('main-cc')[0]
const incrementBtn = document.getElementById('inc')
const decrementBtn = document.getElementById('dec')
const resetBtn = document.getElementById('res')
const incBtnClass = document.getElementsByClassName('btn')[0]
const resBtnClass = document.getElementsByClassName('btn')[1]
const decBtnClass = document.getElementsByClassName('btn')[2]
const rangeIn = document.getElementById('range-in')
const rangeOut = document.getElementById('range-out')
const countDiv = document.getElementsByClassName('counter-div')[0]

const resetFunction = () => {
    counterMain.textContent = 0
    countDiv.classList.add('dec-green')
    countDiv.classList.remove('dec-red')
}
decrementBtn.addEventListener('click', function(){
    counterMain.textContent = counterMain.textContent - rangeIn.value
    if (parseInt(counterMain.textContent) < 0) {
        countDiv.classList.add('dec-red')
        countDiv.classList.remove('dec-green')
    }
    else{
        countDiv.classList.add('dec-green')
        countDiv.classList.remove('dec-red')
    }
    
})
incrementBtn.addEventListener('click', function(){
    counterMain.textContent = parseInt(counterMain.textContent) + parseInt(rangeIn.value)
    if (parseInt(counterMain.textContent) < 0) {
        countDiv.classList.add('dec-red')
        countDiv.classList.remove('dec-green')
    }
    else{
        countDiv.classList.add('dec-green')
        countDiv.classList.remove('dec-red')
    }
})
resetBtn.addEventListener('click', resetFunction)
rangeIn.addEventListener('input', function(){
    rangeOut.textContent = 'Increment or Decrement by ' + rangeIn.value
})