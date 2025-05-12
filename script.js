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
