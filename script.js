console.log("JavaScript is successfully linked!"); 

console.log("JavaScript and Session Storage are active!");

// --- 1. SESSION STORAGE INITIALIZATION ---
// This retrieves the stored cart count or starts at 0 if none exists.
// We use Number() because session storage always stores data as a string.
let cartCount = Number(sessionStorage.getItem('abc_cart_count')) || 0;

// --- 2. FOOTER SUBSCRIBE ALERT ---
const subscribeBtn = document.getElementById('subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
        alert("Thank you for subscribing!");
    });
}

// --- 3. GALLERY ADD-TO-CART (WITH STORAGE) ---
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++; // Increase the count
        
        // SAVE TO SESSION STORAGE
        sessionStorage.setItem('abc_cart_count', cartCount);
        
        alert("Item added to your cart! Total items in cart: " + cartCount);
    });
});

// --- 4. CLEAR CART FUNCTION (WITH STORAGE) ---
const clearBtn = document.getElementById('clear-cart-btn');
if (clearBtn) {
    clearBtn.addEventListener('click', function() {
        if (cartCount === 0) {
            alert("Your cart is already empty.");
        } else {
            cartCount = 0; 
            
            // CLEAR SESSION STORAGE
            sessionStorage.removeItem('abc_cart_count');
            
            alert("Your cart has been cleared. Total items: " + cartCount);
        }
    });
}

// --- 5. ORDER NOW FUNCTION (WITH STORAGE) ---
const orderBtn = document.getElementById('order-btn');
if (orderBtn) {
    orderBtn.addEventListener('click', function() {
        if (cartCount === 0) {
            alert("Your cart is empty! Please add items from the gallery before ordering.");
        } else {
            alert("Thank you for your order! You have successfully purchased " + cartCount + " item(s).");
            
            // RESET AFTER ORDER
            cartCount = 0;
            sessionStorage.removeItem('abc_cart_count');
        }
    });
}

// --- 6. CONTACT FORM SUBMIT ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Your message has been sent successfully!");
        contactForm.reset(); 
    });
}