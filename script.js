
console.log("JavaScript is successfully linked!"); 
// --- 1. Footer Subscribe Alert ---
// This will work on every page that has the subscribe-btn
const subscribeBtn = document.getElementById('subscribe-btn');

if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
        alert("Thank you for subscribing!");
    });
}

// --- 2. Gallery Add-to-Cart Alerts ---
// (We will apply the 'add-to-cart' class to your buttons in gallery.html)
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Item added to your cart!");
    });
});

// --- 3. Contact Form Submit Alert ---
// (We will apply the 'contact-form' ID to your form in about.html)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Your message has been sent successfully!");
    });
}