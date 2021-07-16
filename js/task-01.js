const navItem = document.querySelectorAll('.item');
console.log(`В списке ${navItem.length} категории.`);

navItem.forEach((item) => {
    console.log("Категория:", item.querySelector('h2').textContent);
    console.log("Количество элементов:", item.querySelectorAll('li').length);})


