const cardItems = [
  "Оборудование, офис",
  "Сырье и материалы",
  "Производства",
  "Брендинг, упаковка",
  "Продукт, рецептура",
  "Склад, логистика",
  "Дистрибьюция",
  "Продвижение",
  "Мерчендайзинг",
  "Таможня, логистика",
  "Управление продажами",
  "Другое",
];

const date = new Date();
const year = date.getFullYear();

window.onload = function () {
  let copyRight = document.querySelector(".copyright p");
  copyRight.innerHTML = `©${year} S&P Group`;
  let list = document.querySelectorAll(".cardItem");
  cardItems.map((item, index) => {
    let nodeListOne = document.createElement("LI");
    let nodeListTwo = document.createElement("LI");
    let textnodeOne = document.createTextNode(item);
    let textnodeTwo = document.createTextNode(
      index === 0 || index === 2 ? item : `✔ ${item}`
    );
    nodeListOne.appendChild(textnodeOne);
    nodeListTwo.appendChild(textnodeTwo);
    list[0].appendChild(nodeListOne);
    list[1].appendChild(nodeListTwo);
  });
};
