import chef from "./images/chef.png";

const mainText = document.createElement("h2");
const imageContainer = document.createElement("div");
const chefImage = document.createElement("img");
const imageAttribution = document.createElement("a");

function home() {
  mainText.textContent =
    "Food that will make you forget that you tasted food before";

  chefImage.src = chef;
  imageAttribution.textContent = "Cartoon Chef Vectors by Vecteezy";
  imageAttribution.href = "https://www.vecteezy.com/free-vector/cartoon-chef";
  imageAttribution.id = "attribution";

  imageContainer.id = "image-container";
  imageContainer.appendChild(chefImage);
  imageContainer.appendChild(imageAttribution);

  content.appendChild(mainText);
  content.appendChild(imageContainer);
}

export default home;
