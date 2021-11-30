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

const nav = document.querySelector(".navWrapper");
const btnMenu = document.querySelector(".btnMenu");
const btnClose = document.querySelectorAll(".closeBtn");
const btnBackToTop = document.querySelector(".back-to-top");

btnMenu.addEventListener("click", () => {
  nav.classList.add("navWrapperMobileActive");
  setTimeout(() => {
    nav.classList.add("navWrapperMobileSlidIn");
  }, 50);
});

for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener("click", () => {
    nav.classList.remove("navWrapperMobileSlidIn");
    setTimeout(() => {
      nav.classList.remove("navWrapperMobileActive");
    }, 200);
  });
}

// back to top on scroll

window.addEventListener("scroll", () => {
  if (window.scrollY > 380) {
    btnBackToTop.classList.add("back-to-top-active");
  } else {
    btnBackToTop.classList.remove("back-to-top-active");
  }
});

window.onload = () => {
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
