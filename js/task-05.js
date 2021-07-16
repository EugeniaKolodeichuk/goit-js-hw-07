const input = document.querySelector('#name-input');
const resultEl = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput(event) {

    event.currentTarget.value ?
        resultEl.textContent = event.currentTarget.value :
        resultEl.textContent = 'Незнакомец'

};