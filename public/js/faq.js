// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
    
    for (const item of faqItems) {
        const button = item.querySelector('.cs-button');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                item.classList.toggle('active');
            });
        }
    }
});