const inputEl = document.querySelector(" input, #validation-input");
//console.log(inputEl);

const lengthEl = Number(inputEl.getAttribute('data-length'));
//console.log(lengthEl);

inputEl.addEventListener('blur', (event) => {
//console.log(event.target.value.length );
    event.target.value.length !== lengthEl ?
        inputEl.classList.add('invalid') : inputEl.classList.replace('invalid', 'valid');
});