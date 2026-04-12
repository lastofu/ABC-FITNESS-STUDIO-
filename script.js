console.log("JavaScript is successfully linked!"); 

console.log("Cart System with Item Tracking and Onload Sync Active!");

// --- 1. SESSION STORAGE INITIALIZATION ---
// Retrieve the list of items from storage. Parse it from a string back into an array.
let cartItems = JSON.parse(sessionStorage.getItem('abc_cart_items')) || [];

// --- 2. WINDOW ONLOAD SYNC ---
// This runs as soon as the page finishes loading
window.onload = function() {
    if (cartItems.length > 0) {
        console.log("Session restored. Current cart contains: " + cartItems.join(", "));
    } else {
        console.log("Session started with an empty cart.");
    }
};

// --- 3. ADD TO CART (WITH ITEM NAMES) ---
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Traverses the DOM to find the specific caption for the clicked button
        const itemName = this.parentElement.querySelector('figcaption').innerText;
        
        cartItems.push(itemName); // Add to local array
        
        // Save updated array to Session Storage as a JSON string
        sessionStorage.setItem('abc_cart_items', JSON.stringify(cartItems));
        
        alert(itemName + " has been added to your cart!");
    });
});

// --- 4. VIEW CART FUNCTION ---
const viewCartBtn = document.getElementById('view-cart-btn');
if (viewCartBtn) {
    viewCartBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert("Your cart is currently empty.");
        } else {
            // Join items with a newline character for a clean list
            alert("Items currently in your cart:\n" + cartItems.join("\n"));
        }
    });
}

// --- 5. CLEAR CART ---
const clearBtn = document.getElementById('clear-cart-btn');
if (clearBtn) {
    clearBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert("Your cart is already empty.");
        } else {
            cartItems = []; // Reset local array
            sessionStorage.removeItem('abc_cart_items'); // Clear storage
            alert("Your cart has been cleared.");
        }
    });
}

// --- 6. ORDER NOW ---
const orderBtn = document.getElementById('order-btn');
if (orderBtn) {
    orderBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert("Please add items to your cart before ordering.");
        } else {
            alert("Success! You have ordered:\n" + cartItems.join("\n"));
            cartItems = [];
            sessionStorage.removeItem('abc_cart_items');
        }
    });
}

// --- 7. FOOTER & FORM LOGIC ---
const subscribeBtn = document.getElementById('subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => alert("Thank you for subscribing!"));
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Your message has been sent successfully!");
        contactForm.reset();
    });
}