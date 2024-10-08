// Select necessary elements
const navbarHamburgerBtn = document.querySelector(".navbar__menu-icon");
const mobileNavbar = document.querySelector(".mobile-navbar");
const closeMenuBtn = document.querySelector(".navbar__close-menu-icon");
const body = document.body;

// Function to toggle mobile menu and overlay
function toggleMobileMenu() {
  mobileNavbar.classList.toggle("active");
  body.classList.toggle("menu-open");
}

// Event listener for opening the mobile menu
navbarHamburgerBtn.addEventListener("click", () => {
  toggleMobileMenu();
});

// Event listener for closing the mobile menu
closeMenuBtn.addEventListener("click", () => {
  toggleMobileMenu();
});
