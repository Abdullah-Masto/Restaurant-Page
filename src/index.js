import "./css/normalize.css";
//font awesome import
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
//end font awesome import
import "./css/style.css";
import pageLoad from "./page-load";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

pageLoad();

const content = document.querySelector("#content");
const taps = document.querySelectorAll(".tap");

taps.forEach((tap) => {
  tap.addEventListener("click", togglePage, false);
});

function togglePage() {
  taps.forEach((tap) => {
    tap.classList.remove("selected");
  });
  content.innerHTML = "";
  event.target.classList.add("selected");
  switch (event.target.id) {
    case "home":
      home();
      break;
    case "menu":
      menu();
      break;
    case "contact":
      contact();
      break;
    default:
      break;
  }
}
