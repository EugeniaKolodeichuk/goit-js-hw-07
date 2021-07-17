let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');
let boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}