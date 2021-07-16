const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');
/* 1 version */
/* const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;

  return itemEl;
});

console.log(elements);
listEl.append(...elements); */

/* 2 version */
const makeIngredientList = (ingredients) => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const elements = makeIngredientList(ingredients);
listEl.append(...elements);