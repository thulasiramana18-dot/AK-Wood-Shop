// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Product Enquiry Buttons

document.querySelectorAll(".product-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedProduct = button.dataset.product;
        const productSelect = document.getElementById("product");

        productSelect.value = selectedProduct;

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact Form Validation

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !product || !message) {
        formMessage.textContent = "Please fill in all the fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name +
        "! Your details have been checked successfully. " +
        "Please contact the shop directly to complete your enquiry.";

    contactForm.reset();
});

// Automatic Copyright Year

document.getElementById("year").textContent = new Date().getFullYear();