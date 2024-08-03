document.addEventListener("DOMContentLoaded", function() {
    // Scroll to section on nav click
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Handle form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message!");
        // Add your form submission logic here (e.g., AJAX request)
    });
});
