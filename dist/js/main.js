// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const csToggle = document.querySelector('#cs-navigation .cs-toggle');
    const csNavigation = document.querySelector('#cs-navigation');
    const csDropDowns = document.querySelectorAll('#cs-navigation .cs-dropdown');
    const csBody = document.querySelector('body');
    
    if (csToggle) {
        csToggle.addEventListener('click', function() {
            csNavigation.classList.toggle('cs-active');
            csBody.classList.toggle('cs-open');
            this.classList.toggle('cs-active');
        });
    }
    
    // Dropdown functionality
    csDropDowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 1023) {
                e.preventDefault();
                this.classList.toggle('cs-active');
            }
        });
    });

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('#faq-1263 .cs-faq-item');
    faqItems.forEach(item => {
        const button = item.querySelector('.cs-button');
        if (button) {
            button.addEventListener('click', function() {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });

    // Gallery filter functionality
    const filterButtons = document.querySelectorAll('.cs-button[data-filter]');
    const galleries = document.querySelectorAll('.cs-gallery');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('cs-active'));
            this.classList.add('cs-active');
            
            // Show/hide galleries
            galleries.forEach(gallery => {
                if (gallery.getAttribute('data-category') === filter) {
                    gallery.classList.remove('cs-hidden');
                } else {
                    gallery.classList.add('cs-hidden');
                }
            });
        });
    });

    // Reviews carousel
    const reviews = [
        {
            name: "Sarah Mitchell",
            location: "North York, Toronto",
            review: "Outstanding service! They fixed our foundation cracks quickly and professionally. The team was knowledgeable, clean, and finished ahead of schedule. Our basement has been dry ever since.",
            rating: 5
        },
        {
            name: "David Chen",
            location: "Scarborough, Toronto",
            review: "After getting quotes from 5 companies, we chose them for their honest assessment and fair pricing. The lifetime warranty gives us peace of mind. Highly recommend!",
            rating: 5
        },
        {
            name: "Maria Rodriguez",
            location: "Etobicoke, Toronto",
            review: "Emergency water damage on a Sunday - they arrived within 2 hours! Professional crew installed a complete waterproofing system. Worth every penny.",
            rating: 5
        },
        {
            name: "Robert Thompson",
            location: "Mississauga, ON",
            review: "Our 100-year-old home needed major foundation work. Their structural engineer designed a perfect solution. The work was done with minimal disruption to our family.",
            rating: 5
        },
        {
            name: "Jennifer Park",
            location: "Richmond Hill, ON",
            review: "Bowing basement walls were a nightmare until these experts installed wall anchors. Clean, efficient work and excellent communication throughout the project.",
            rating: 5
        },
        {
            name: "Michael O'Brien",
            location: "Vaughan, ON",
            review: "Third generation family business that really knows foundations. Fixed issues two other companies missed. The warranty is transferable which helped our home sale!",
            rating: 5
        },
        {
            name: "Lisa Patel",
            location: "Markham, ON",
            review: "Spring flooding destroyed our basement. They installed French drains and a backup sump pump. Haven't had a drop of water since. Insurance company was impressed too!",
            rating: 5
        },
        {
            name: "James Wilson",
            location: "Oakville, ON",
            review: "Foundation settling was causing doors to stick and cracks everywhere. Their underpinning solution was exactly what we needed. True professionals from start to finish.",
            rating: 5
        }
    ];

    function createReviewHTML(review) {
        let starsHTML = '<div class="cs-item-stars">';
        for (let i = 0; i < 5; i++) {
            if (i < review.rating) {
                starsHTML += `<svg class="cs-star" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>`;
            }
        }
        starsHTML += '</div>';
        
        return `
            <li class="cs-item">
                <div class="wrapper">
                    ${starsHTML}
                    <p class="cs-review">${review.review}</p>
                </div>
                <div class="cs-flex-group">
                    <span class="cs-name">
                        ${review.name}
                        <span class="cs-job">${review.location}</span>
                    </span>
                </div>
                <svg class="cs-quote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
            </li>
        `;
    }

    // Initialize reviews carousel
    const track = document.getElementById('reviewTrack');
    if (track) {
        let reviewsHTML = '';
        reviews.forEach(review => {
            reviewsHTML += createReviewHTML(review);
        });
        
        // Duplicate for seamless loop
        track.innerHTML = reviewsHTML + reviewsHTML;
    }

    // About section counter animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    // Start observing counters
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Lazy loading images improvement
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});