// This toggles the themes
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// use dark theme as default
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

// Close mobile nav when clicking on the outside
document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileNav.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    }
});

// this updates copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Typewriter effect
// class Typewriter {
//   constructor(element, texts, speed = 50) {
//     this.element = element;
//     this.texts = texts;
//     this.speed = speed;
//     this.textIndex = 0;
//     this.charIndex = 0;
//     this.isDeleting = false;
//     this.type();
//   }

//   type() {
//     const currentText = this.texts[this.textIndex];
    
//     if (this.isDeleting) {
//       this.element.textContent = currentText.substring(0, this.charIndex - 1);
//       this.charIndex--;
//     } else {
//       this.element.textContent = currentText.substring(0, this.charIndex + 1);
//       this.charIndex++;
//     }

//     let typeSpeed = this.speed;
    
//     if (this.isDeleting) {
//       typeSpeed /= 2;
//     }

//     if (!this.isDeleting && this.charIndex === currentText.length) {
//       typeSpeed = 2000; // Pause at end
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.charIndex === 0) {
//       this.isDeleting = false;
//       this.textIndex = (this.textIndex + 1) % this.texts.length;
//       typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
//   }
// }

// // Initialize
// const typewriterElement = document.querySelector('.typewriter-text');
// const texts = ['I\'m a web developer', 'I\'m an IT and Network technician'];
// new Typewriter(typewriterElement, texts, 150);

