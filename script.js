
console.log("JavaScript is successfully linked!"); 
// --- 1. Footer Subscribe Alert ---
// This runs on every page where the subscribe button exists
const subscribeBtn = document.querySelector('.footer-subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
        alert("Thank you for subscribing!");
    });
}

// --- 2. Gallery Add-to-Cart Alerts ---
// This selects all buttons with the class 'add-to-cart'
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Item added to your cart!");
    });
});

// --- 3. Contact Form Submit Alert ---
// This targets the form itself to catch the submission event
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Your message has been sent successfully!");
    });
}