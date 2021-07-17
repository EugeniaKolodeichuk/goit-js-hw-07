const inputEl = document.querySelector("#validation-input");


inputEl.addEventListener('change', (event) => {
    if (Number(inputEl.dataset.length) !== inputEl.value.length) {
        inputEl.classList.add('invalid');
    }
    else {
        inputEl.classList.replace('invalid', 'valid');
    }
});