const content = document.querySelector("#content");
const phone = document.createElement("span");
const mail = document.createElement("span");
const phoneIcon = document.createElement("i");
const mailIcon = document.createElement("i");
const phoneText = document.createElement("p");
const mailText = document.createElement("p");

function contact() {
  if (phoneIcon.classList.length == 0) {
    phoneIcon.classList.add("fa-solid");
    phoneIcon.classList.add("fa-phone");
    phone.appendChild(phoneIcon);
  }
  phoneText.textContent = "+123456789";
  phone.appendChild(phoneText);

  if (mailIcon.classList.length == 0) {
    mailIcon.classList.add("fa-solid");
    mailIcon.classList.add("fa-envelope");
    mail.appendChild(mailIcon);
  }
  mailText.textContent = "Gusteau's@fake-email.com";
  mail.appendChild(mailText);

  phone.classList.add("info");
  mail.classList.add("info");

  content.appendChild(phone);
  content.appendChild(mail);
}

export default contact;
