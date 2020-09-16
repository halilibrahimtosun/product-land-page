const navBtn = document.querySelector(".nav-toggle");
const showLinks = document.querySelector(".show-links");
const links = document.querySelector(".links");

navBtn.addEventListener("click", () => {
  if (!links.classList.contains("show-links")) {
    return links.classList.add("show-links");
  } else {
    links.classList.remove("show-links");
  }
});
