// function addition(){
//     console.log()
// }

// const btn = document.getElementById('btnAddition')
// btnAdd.addEventListener('click' , addition)


const btnAdd = document.querySelector('[data-submit]')
const lblOutput = document.querySelector('#output')

function addition(){
    let numb1 = document.getElementById('numb1').value
    let numb2 = document.getElementById('numb2').value
    let sum = +numb1 + +numb2
    lblOutput.textContent = sum
}

btnAdd.addEventListener('click', addition)