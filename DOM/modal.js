const openButton = document.querySelector("#openOverlay");
const body = document .body;

openButton.addEventListener("click", e => {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const containerElement = document.createElement("div");
  containerElement.classList.add("modal-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");



  overlayElement.appendChild(containerElement);
  containerElement.appendChild(contentElement);
  body.appendChild(overlayElement);
})