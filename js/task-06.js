const inputEl = document.querySelector('#validation-input');

/* const validEl = function (event) {
    if (event.curretTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}

inputEl.addEventListener('blur', validEl); */


inputEl.addEventListener('change', (event) => {
    if (Number(inputEl.dataset.length) !== inputEl.value.length) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
    else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
});