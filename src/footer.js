const foot = document.createElement("footer");
const span = document.createElement("span");
const link = document.createElement("a");
const icon = document.createElement("i");

function footer() {
  span.textContent = "Copyright © 2023 Abdullah-Masto";
  link.target = "_blank";
  link.href = "https://github.com/Abdullah-Masto";
  icon.classList.add("fa-brands");
  icon.classList.add("fa-github");
  link.appendChild(icon);
  foot.appendChild(span);
  foot.appendChild(link);
  foot.id = "footer";
  document.body.appendChild(foot);
}

export default footer;
