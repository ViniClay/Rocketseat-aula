const title = document.querySelector('h1');
const input = document.querySelector('input')

title.onmouseenter = titleEffectIn
title.onmouseleave = titleEffectOut

function titleEffectIn() {
    title.style.color = "#f00000"
};

function titleEffectOut() {
    title.style.color = "#000000"
};

title.onclick = function () {
     console.log('Im working (^^^)')
}

input.onkeypress = function (event) {
    console.log(event)
}