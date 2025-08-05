// Navigation functionality
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const csUL = document.querySelector('#cs-expanded');

// Mobile menu toggle
CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
});

// Close menu function
function closeMenu() {
    CShamburgerMenu.classList.remove("cs-active");
    CSnavbarMenu.classList.remove("cs-active");
    CSbody.classList.remove("cs-open");
    csUL.setAttribute('aria-expanded', 'false');
}

// Update aria-expanded
function ariaExpanded() {
    const csExpanded = csUL.getAttribute('aria-expanded');
    
    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// Remove automatic closing - let the page navigation handle it
// This provides a better UX similar to PayPal's mobile menu

// Handle dropdowns
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        item.classList.toggle('cs-active');
    }
    item.addEventListener('click', onClick);
}

// Add loading state only when clicking actual navigation links (not dropdown parents)
const dropdownLinks = document.querySelectorAll('#cs-navigation .cs-drop-link');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Add loading state to show user something is happening
        if (window.innerWidth < 1024) {
            this.style.opacity = '0.6';
            this.style.pointerEvents = 'none';
        }
    });
});

// Also add loading state to non-dropdown navigation links
const regularNavLinks = document.querySelectorAll('#cs-navigation .cs-li-link');
regularNavLinks.forEach(link => {
    // Skip if it's a dropdown parent (has a sibling dropdown menu)
    if (!link.parentElement.classList.contains('cs-dropdown')) {
        link.addEventListener('click', function(e) {
            if (window.innerWidth < 1024) {
                this.style.opacity = '0.6';
                this.style.pointerEvents = 'none';
            }
        });
    }
});

// Close menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && CSnavbarMenu.classList.contains('cs-active')) {
        closeMenu();
    }
});

// Close menu on outside click - but not when clicking inside menu content
document.addEventListener('click', function(e) {
    if (CSnavbarMenu.classList.contains('cs-active')) {
        // Check if click is outside the menu wrapper
        const menuWrapper = document.querySelector('.cs-ul-wrapper');
        const hamburger = document.querySelector('.cs-toggle');
        
        if (!menuWrapper.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    }
});