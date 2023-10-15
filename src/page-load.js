import icon from "./images/Burger-icon.png";
import homeBuild from "./home";
import footer from "./footer";

const content = document.querySelector("#content");
let link = document.querySelector("link[rel~='icon']");
const header = document.createElement("header");
const title = document.createElement("h1");
const taps = document.createElement("div");
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");

if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.head.appendChild(link);
}

function pageLoad() {
  link.href = icon;

  header.id = "header";

  title.textContent = "Gusteau's";
  title.id = "title";

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  home.classList.add("selected");
  home.classList.add("tap");
  menu.classList.add("tap");
  contact.classList.add("tap");

  home.id = "home";
  menu.id = "menu";
  contact.id = "contact";

  taps.id = "taps";
  taps.appendChild(home);
  taps.appendChild(menu);
  taps.appendChild(contact);

  header.appendChild(title);
  header.appendChild(taps);

  document.body.insertBefore(header, content);

  homeBuild();

  footer();
}

export default pageLoad;
