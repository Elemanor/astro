// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('#faq-1263 .cs-faq-item');
    const faqButtons = document.querySelectorAll('#faq-1263 .cs-button');
    
    faqButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const currentItem = faqItems[index];
            const isActive = currentItem.classList.contains('active');
            
            // Close all items
            faqItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });
    
    // Keyboard navigation
    faqButtons.forEach((button) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
});