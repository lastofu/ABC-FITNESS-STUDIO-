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
        cartCount++; 
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
            cartCount = 0; 
            alert("Your cart has been cleared. Total items: " + cartCount);
        }
    });
}

// 5. Order Now Function
const orderBtn = document.getElementById('order-btn');
if (orderBtn) {
    orderBtn.addEventListener('click', function() {
        if (cartCount === 0) {
            alert("Your cart is empty! Please add items from the gallery before ordering.");
        } else {
            alert("Thank you for your order! You have successfully purchased " + cartCount + " item(s).");
            cartCount = 0; // Reset cart after order
        }
    });
}

// 6. Contact Form Submit Alert
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Your message has been sent successfully!");
        contactForm.reset(); 
    });
}