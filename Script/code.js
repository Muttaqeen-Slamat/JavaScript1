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

console.log(window);

let data = [3, 8, 5, 'Veronique', 'Carl']
console.log(data)
console.log(`Array's size: ${data.length}`)
console.log(`Element at postion 3: ${data[3]}`)
//return the last element .at
//portion would be .slice instead of .at
//push add element from the right
data.push('Matthew') 
// console.log(data.at(-1))
data.push('Shawn', 'Simamkele')
//adds element from the beginning of the list 
data.unshift('Jay-donn')
//pop remove the last element 
let RemoveLastElement = data.pop()
console.log(data);
console.log(RemoveLastElement);
//to add 2 arrays together
//console.log(data.concat(RemoveLastElement));
//.shift removes the first array value
data.shift()
console.log(data);
//reverse order but index number stay in numeric order
//slice from one index to the next used by comma so from 1 to 4 index 1,2,3 and 4
console.log(data.slice(1, 4))
console.log(data)
// 0- adding 
// 1- remove an element from postion
data.splice(2, 0, 'Joel')
console.log(data)
//splice removal
//number being remove from that index, 2 would be how many( 3 being the index and that index being removed,2 being how many from the previous numbers index value)
data.splice(3,2)
console.log(data)


let number = [7, 3,2, 'Abc', 1, 'abc',8]
console.log(number)
//reverse the order but keep index numerically
number.reverse()
//also display reverse
console.log(number.reverse())
//sort according to lowest to highest
console.log(number.sort())

let numbersOnly = number.filter(onlyNumbers)
//or let numbersOnly = number.filter(a=> typeof a == 'number')   // dont need function after  // a=> a%2 ==0 for even numbers
//named function or function declaration (arr)
function onlyNumbers(a){
    return typeof a == 'number'
}
console.log(numbersOnly)
let textOnly = number.filter(onlyText)
function onlyText(a){
    return typeof a == 'string'
}
console.log(textOnly)
//no typeof for using a%2==0
//x=> x % 2==0 //can also use
let evenNumb = number.filter(a=> a%2==0)
console.log(evenNumb)
//x=> x % 2 >=1 for odds
let oddNumb = number.filter(x=> x % 2>=1)
console.log(oddNumb);



// let numbers = [1, 3, 5]
// numbers.splice(1,0, 2)
// numbers.splice(3, 0 ,4)
// console.log(numbers);
// numbers.splice(2,3, 6, 7)
// console.log(numbers);


