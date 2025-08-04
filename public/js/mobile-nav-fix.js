// Mobile Navigation Fix
document.addEventListener('DOMContentLoaded', function() {
    // Override dropdown behavior for mobile to allow link clicks
    const csDropDowns = document.querySelectorAll('#cs-navigation .cs-dropdown');
    const csNavLinks = document.querySelectorAll('#cs-navigation .cs-li-link.cs-drop-link');
    
    // Remove the preventDefault from dropdown links
    csNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow the link to work normally
            e.stopPropagation();
        });
    });
    
    // Only prevent default on the dropdown toggle itself, not the links
    csDropDowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.cs-li-link:not(.cs-drop-link)');
        
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 1023) {
                    e.preventDefault();
                    dropdown.classList.toggle('cs-active');
                }
            });
        }
    });
    
    // Close mobile menu when a link is clicked
    const allNavLinks = document.querySelectorAll('#cs-navigation a.cs-li-link');
    const csNavigation = document.querySelector('#cs-navigation');
    const csBody = document.querySelector('body');
    const csToggle = document.querySelector('#cs-navigation .cs-toggle');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1023 && csNavigation.classList.contains('cs-active')) {
                // Close the mobile menu
                csNavigation.classList.remove('cs-active');
                csBody.classList.remove('cs-open');
                if (csToggle) csToggle.classList.remove('cs-active');
            }
        });
    });
});