let toggleBtn = document.getElementById("toggle-btn");
let menu = document.getElementById("nav-links");

toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("navbar-active");
  console.log("clicked");
});
