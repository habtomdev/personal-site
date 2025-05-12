// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// --- Optional: Add active class to nav link based on scroll position ---
// This is a bit more complex and might require tweaking depending on section heights
/*
const sections = document.querySelectorAll('section[id]');
const navLi = document.querySelectorAll('.navbar nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust offset as needed
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

     // Check if scrolled to the very bottom for the last section (Contact)
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) { // 50px buffer
       const lastSection = sections[sections.length - 1];
       if(lastSection) current = lastSection.getAttribute('id');
    }


    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });

    // Handle the case where no section is actively scrolled into (top of page)
     if (!current && scrollY < sections[0].offsetTop - 100) {
        const homeLink = document.querySelector('.navbar nav ul li a[href="#home"]');
        if (homeLink) homeLink.classList.add('active');
     }
});
*/

// --- Optional: Simple mobile menu toggle ---
// If you decide to add a hamburger menu later, the JS would go here.
