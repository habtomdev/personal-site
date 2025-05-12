// Theme switching functionality
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Check for saved theme preference or use dark theme as default
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// Mobile menu functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

// Toggle mobile menu
mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    // Toggle menu icon
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
});

// Close mobile menu when a link is clicked
mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileNav.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    }
});

// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();
