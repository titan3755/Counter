const counterMain = document.getElementById('main-counter')
const incrementBtn = document.getElementById('inc')
const decrementBtn = document.getElementById('dec')
const resetBtn = document.getElementById('res')

const resetFunction = () => {
    counterMain.textContent = 0
}

incrementBtn.addEventListener('click', function(){
    counterMain.textContent++
})
decrementBtn.addEventListener('click', function(){
    counterMain.textContent--
})
resetBtn.addEventListener('click', resetFunction)