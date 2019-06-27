const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log(this);
  this.classList.toggle("open");
}
function toggleActive(event) {
  // console.log(event.propertyName);

  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

function closeToggle() {
  this.classList.remove("open");
}

panels.forEach(panel => panel.addEventListener("mouseenter", toggleOpen));

panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

panels.forEach(panel => panel.addEventListener("mouseleave", closeToggle));
