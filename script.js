// Mobile menu toggle
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple cart alert
function addToCart(product) {
  alert(product + " added to cart!");
}
