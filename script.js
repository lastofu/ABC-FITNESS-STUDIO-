console.log("JavaScript is successfully linked!"); 

// 1. Initialize Cart Variable
// This keeps track of the number of items across your gallery
let cartCount = 0;

// 2. Footer Subscribe Alert
// Works on every page containing the subscribe-btn
const subscribeBtn = document.getElementById('subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
        alert("Thank you for subscribing!");
    });
}

// 3. Gallery Add-to-Cart Alerts
// Targets all buttons with the .add-to-cart class
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++; // Increase the count by 1
        alert("Item added to your cart! Total items in cart: " + cartCount);
    });
});

// 4. Clear Cart Function
// Resets the counter and provides feedback to the user
const clearBtn = document.getElementById('clear-cart-btn');
if (clearBtn) {
    clearBtn.addEventListener('click', function() {
        if (cartCount === 0) {
            alert("Your cart is already empty.");
        } else {
            cartCount = 0; // Reset the count back to zero
            alert("Your cart has been cleared. Total items: " + cartCount);
        }
    });
}

// 5. Contact Form Submit Alert
// Validates the form before showing a success message
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // Prevent the page from refreshing so the user sees the alert
        event.preventDefault(); 
        alert("Your message has been sent successfully!");
        contactForm.reset(); // Clears the input fields for the next message
    });
}