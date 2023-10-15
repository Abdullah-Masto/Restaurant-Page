import cheeseBurger from "./images/cheese-burger.png";
import hamburger from "./images/hamburger.png";
import chickenBurger from "./images/chicken-burger.png";
import shawarma from "./images/shawarma.png";
import frenchFries from "./images/french-fries.png";
import salad from "./images/salad.png";

const content = document.querySelector("#content");
const gridContainer = document.createElement("div");
const link = document.createElement("a");
const plates = [];
for (let i = 0; i < 6; i++) {
  let plate = document.createElement("div");
  let image = document.createElement("img");
  let title = document.createElement("h3");
  let price = document.createElement("p");

  plate.classList.add("plate");
  title.classList.add("title");
  price.classList.add("price");

  plate.appendChild(image);
  plate.appendChild(title);
  plate.appendChild(price);

  plates.push(plate);
}

function menu() {
  plates[0].getElementsByTagName("img")[0].src = cheeseBurger;
  plates[0].getElementsByClassName("title")[0].textContent = "Cheese Burger";
  plates[0].getElementsByClassName("price")[0].textContent = "$2.99";

  plates[1].getElementsByTagName("img")[0].src = hamburger;
  plates[1].getElementsByClassName("title")[0].textContent = "HamBurger";
  plates[1].getElementsByClassName("price")[0].textContent = "$2.49";

  plates[2].getElementsByTagName("img")[0].src = chickenBurger;
  plates[2].getElementsByClassName("title")[0].textContent = "Chicken Burger";
  plates[2].getElementsByClassName("price")[0].textContent = "$1.99";

  plates[3].getElementsByTagName("img")[0].src = shawarma;
  plates[3].getElementsByClassName("title")[0].textContent = "Shawarma";
  plates[3].getElementsByClassName("price")[0].textContent = "$1.49";

  plates[4].getElementsByTagName("img")[0].src = frenchFries;
  plates[4].getElementsByClassName("title")[0].textContent = "French Fries";
  plates[4].getElementsByClassName("price")[0].textContent = "$0.99";

  plates[5].getElementsByTagName("img")[0].src = salad;
  plates[5].getElementsByClassName("title")[0].textContent = "Salad";
  plates[5].getElementsByClassName("price")[0].textContent = "$0.99";

  plates.forEach((plate) => {
    gridContainer.appendChild(plate);
  });

  gridContainer.id = "grid-container";

  link.textContent = "images from pixabay.com";
  link.target = "_blank";
  link.href = "https://pixabay.com";
  link.id = "attribution";

  content.appendChild(gridContainer);
  content.appendChild(link);
}

export default menu;
