const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')

//let purple = document.createElement('div')
//purple.setAttribute('class', 'color-choice')
//purple.setAttribute('id', 'purple')
//palette.append(purple)

let selectedColor = 'blue'
let redButton = document.querySelector('#red')
let yellowButton = document.querySelector('#yellow')
let greenButton = document.querySelector('#green')
let blueButton = document.querySelector('#blue')
let purpleButton = document.querySelector('#purple')

painting.addEventListener('click', function(e){
   e.target.style.backgroundColor = selectedColor
})

palette.addEventListener('click', function(e){
    selectedColor = e.target.id
})

painting.addEventListener('dblclick', function(e){
    selectedColor = 'white'
})





/*alternative more coding. Above is more concise.
let redButton = document.querySelector('#red')
redButton.addEventListener('click', function(){
    selectedColor = 'red'
})

let yellowButton = document.querySelector('#yellow')
yellowButton.addEventListener('click', function(){
    selectedColor = 'yellow'
})

let greenButton = document.querySelector('#green')
greenButton.addEventListener('click', function(){
    selectedColor = 'green'
})

let blueButton = document.querySelector('#blue')
blueButton.addEventListener('click', function(){
    selectedColor = 'blue'
})*/
