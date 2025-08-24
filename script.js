// Smooth Scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile Menu Toggle
const nav = document.querySelector("header nav");
const menuBtn = document.createElement("div");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = "☰";
document.querySelector("header").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});