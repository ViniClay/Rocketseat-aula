// getElementById()
// getElementByClassName('')
// getElementByTagName('')
// querySelector('') // apenas a primeira tag 
// querySelectorAll('')
   // .class #id [atributo]
const elementbody = document.querySelector('body')
const elementH1 = document.querySelector('h1')
const elementinput = document.querySelector('input')
const elementp = document.querySelector('p')
const div = document.createElement('div')
let text01 = "Olá, pessoal."
let number = 0
let text = " segundo"

elementH1.textContent = "Mr. Clay"
console.log(elementH1.textContent)
elementH1.innerText = "Volta ao título"
elementH1.innerHTML += ",<small> modificando novamente</small>"

elementinput.value = "Insira aqui"

elementinput.getAttribute('id', 'header') // gerar atributo
elementinput.removeAttribute('id')

window.onload = function () {
if (elementinput.value != "") {
   elementinput.style.backgroundColor = "#00f000"}
if (number > 1) {text = " segundos"}
elementp.textContent = number + text
number++
}

elementbody.classList.add('page01')
elementbody.classList.toggle('page02')
// toggle: se adicionado, remove; se não existente, adiciona
elementbody.classList.remove('page01', 'page02')

// identificar o HTML pai: de onde veio
console.log(elementbody.parentElement)
console.log(elementbody.parentNode)

// identificar os filhos: elementos contidos
console.log(elementbody.childNodes) // Nodelist
console.log(elementbody.children)   // HTMLCollection

// identificar o primeiro e último filho
console.log(elementbody.firstElementChild) // somente elemento
console.log(elementbody.firstChild) // incluso HTML
console.log(elementbody.lastElementChild)
console.log(elementbody.lastChild)

// identificar irmãos
console.log(elementinput.previousElementSibling)
console.log(elementinput.nextElementSibling)

//adicionar elementos
elementbody.append(text01)  //adicionar depois
elementbody.prepend(text01) // adicionar antes
div.innerText = text01
elementbody.insertBefore(div, elementinput)