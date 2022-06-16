const contactBtn = document.getElementById("contact-btn");
const open = document.querySelector(".open-modal");
const body = document.querySelector("body");
const contactDetails = document.querySelector(".contact-details");
const closeBtn = document.getElementById("close-btn");

contactBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  body.classList.add("dark-bg");
  open.classList.add("hide-element");
  contactDetails.classList.remove("hide-element");
}

function closeModal() {
  body.classList.remove("dark-bg");
  contactDetails.classList.add("hide-element");
  open.classList.remove("hide-element");
}
