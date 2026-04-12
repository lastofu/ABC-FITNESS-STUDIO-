console.log("JavaScript is successfully linked!"); 
console.log("ABC Fitness Studio: Full Cart & Storage System Active!");

// --- 1. SESSION STORAGE INITIALIZATION ---
// Retrieve the list of items from storage. Parse it from a string back into an array.
let cartItems = JSON.parse(sessionStorage.getItem('abc_cart_items')) || [];

// --- 2. WINDOW ONLOAD SYNC ---
// This verifies the session is active as soon as the page loads.
window.onload = function() {
    if (cartItems.length > 0) {
        console.log("Session restored. Current cart contains: " + cartItems.join(", "));
    } else {
        console.log("Session started with an empty cart.");
    }
};

// --- 3. GALLERY ADD-TO-CART (FOR GALLERY PAGE) ---
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Finds the text within the <figcaption> of the clicked item
        const itemName = this.parentElement.querySelector('figcaption').innerText;
        
        cartItems.push(itemName); // Add to the array
        
        // Save updated array to Session Storage as a JSON string
        sessionStorage.setItem('abc_cart_items', JSON.stringify(cartItems));
        
        alert(itemName + " has been added to your cart!");
    });
});

// --- 4. VIEW CART FUNCTION (GLOBAL FOOTER) ---
const viewCartBtn = document.getElementById('view-cart-btn');
if (viewCartBtn) {
    viewCartBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert("Your cart is currently empty.");
        } else {
            // Displays the list of names with each item on a new line
            alert("Items currently in your cart:\n" + cartItems.join("\n"));
        }
    });
}

// --- 5. CLEAR CART (GLOBAL FOOTER) ---
const clearBtn = document.getElementById('clear-cart-btn');
if (clearBtn) {
    clearBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert("Your cart is already empty.");
        } else {
            cartItems = []; // Empty the local array
            sessionStorage.removeItem('abc_cart_items'); // Delete the storage entry
            alert("Your cart has been cleared.");
        }
    });
}

// --- 6. ORDER NOW (GLOBAL FOOTER) ---
const orderBtn = document.getElementById('order-btn');
if (orderBtn) {
    orderBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert("Please add items to your cart before ordering.");
        } else {
            alert("Success! You have ordered:\n" + cartItems.join("\n"));
            cartItems = []; // Reset array
            sessionStorage.removeItem('abc_cart_items'); // Clear storage after order
        }
    });
}

// --- 7. FOOTER SUBSCRIBE ---
const subscribeBtn = document.getElementById('subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => alert("Thank you for subscribing!"));
}

// --- 8. ABOUT US FORM & CUSTOM INQUIRY ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop page from refreshing

        // Grabs values from your specific HTML IDs
        const firstName = document.getElementById('fname').value;
        const selectedClass = document.getElementById('class').value;

        // Capitalize the first letter for a cleaner look
        const formattedClass = selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1);
        const orderEntry = "Inquiry: " + formattedClass + " (Requested by " + firstName + ")";

        // Add the inquiry to the same cart system
        cartItems.push(orderEntry);
        sessionStorage.setItem('abc_cart_items', JSON.stringify(cartItems));

        alert("Thank you, " + firstName + "! Your inquiry for " + formattedClass + " has been added to your cart.");
        
        contactForm.reset(); // Clear the form fields
    });
}