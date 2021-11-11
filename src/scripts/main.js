// for the navbar buttons
const homeButton = document
  .getElementById("home-btn")
  .addEventListener("click", () => {
    window.location.href = "/";
  });

const aboutButton = document
  .getElementById("about-btn")
  .addEventListener("click", () => {
    window.open("/about", "_blank");
  });

const logo = document.querySelector(".logo").addEventListener("click", () => {
  window.location.href = "/";
});
