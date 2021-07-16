const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('#gallery');
listEl.classList.add('grid');
console.log(listEl);

const elements = images.map(image => {
  const itemEl = document.createElement('li');
  const imgEl = document.createElement('img');
  itemEl.classList.add('grid-item');
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = 320;
  itemEl.insertAdjacentElement('afterbegin', imgEl);
  listEl.insertAdjacentHTML('beforeend', `<li><img src="${image.url}" width= 320 alt = "${image.alt}"></li>`);
  
  return itemEl;
});

console.log(elements);
