"use strict";

const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.onclick = function () {
    let temp = input.value;
    input.value = '';

    const li = document.createElement("li");
    const newButton = document.createElement("button");
    const span = document.createElement("span");

    li.append(span);
    li.append(newButton);
    span.innerText = temp;
    newButton.innerText = "Delete";
    ul.append(li);
    newButton.setAttribute('class', 'newBtn');
    newButton.onclick = function () {
        ul.removeChild(li);
    };
    input.focus();
};