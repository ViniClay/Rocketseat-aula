const button = document.querySelector ('button')
const head = document.querySelector('head')
const body = document.querySelector('body')
const div = document.querySelector('div')

div.style.visibility = 'hidden'
button.addEventListener('click', remove)


body.onkeydown = function appear(event){
    if(event.code === 'Escape')
    {div.style.visibility = 'hidden'}
}

function remove(){
    div.style.visibility = 'visible'
}

