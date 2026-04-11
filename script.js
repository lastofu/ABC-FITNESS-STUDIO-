console.log("JavaScript is successfully linked!"); 

// 1. Initialize Cart Variable
let cartCount = 0;

// 2. Footer Subscribe Alert
const subscribeBtn = document.getElementById('subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
        alert("Thank you for subscribing!");
    });
}

// 3. Gallery Add-to-Cart Alerts
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++; // Increase the count
        alert("Item added to your cart! Total items in cart: " + cartCount);
    });
});

// 4. Clear Cart Function
const clearBtn = document.getElementById('clear-cart-btn');
if (clearBtn) {
    clearBtn.addEventListener('click', function() {
        if (cartCount === 0) {
            alert("Your cart is already empty.");
        } else {
            cartCount = 0; // Reset the count
            alert("Your cart has been cleared.");
        }
    });
}

// 5. Contact Form Submit Alert
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the page from refreshing
        alert("Your message has been sent successfully!");
        contactForm.reset(); // Optional: clears the form fields after alert
    });
}