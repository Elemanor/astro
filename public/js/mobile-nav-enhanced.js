// Enhanced Mobile Navigation and Interactions
// Critical mobile optimization for improved CTR

document.addEventListener('DOMContentLoaded', function() {
    
    // ====== MOBILE-SPECIFIC ENHANCEMENTS ======
    
    // Create and insert sticky call button
    createStickyCallButton();
    
    // Enhanced mobile menu functionality
    enhanceMobileMenu();
    
    // Smooth scrolling for all anchor links
    enableSmoothScrolling();
    
    // Touch-friendly interactions
    addTouchEnhancements();
    
    // Form optimizations
    optimizeForms();
    
    // Emergency banner logic
    handleEmergencyBanner();
    
    // CTR tracking and optimization
    setupCTRTracking();
    
    // Accessibility improvements
    addAccessibilityFeatures();
    
    // Performance optimizations
    optimizeForMobile();
    
    
    // ====== STICKY CALL BUTTON CREATION ======
    function createStickyCallButton() {
        // Check if we're on mobile
        if (window.innerWidth <= 768) {
            const stickyBtn = document.createElement('a');
            stickyBtn.href = 'tel:4375450067';
            stickyBtn.className = 'mobile-call-sticky';
            stickyBtn.setAttribute('aria-label', 'Call DrySpace Waterproofing now');
            stickyBtn.setAttribute('data-track', 'mobile-sticky-call');
            
            document.body.appendChild(stickyBtn);
            
            // Add click tracking
            stickyBtn.addEventListener('click', function() {
                trackMobileClick('sticky-call-button');
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        }
    }
    
    
    // ====== ENHANCED MOBILE MENU ======
    function enhanceMobileMenu() {
        const navToggle = document.querySelector('#cs-navigation .cs-toggle');
        const navMenu = document.querySelector('#cs-navigation .cs-ul-wrapper');
        const navLinks = document.querySelectorAll('#cs-navigation .cs-li-link');
        const body = document.body;
        
        if (!navToggle || !navMenu) return;
        
        // Enhanced toggle functionality
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const navigation = document.querySelector('#cs-navigation');
            const isOpen = navigation.classList.contains('cs-active');
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
            
            trackMobileClick('menu-toggle');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const nav = document.querySelector('#cs-navigation');
            if (nav.classList.contains('cs-active') && 
                !nav.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Close menu on escape key  
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
        
        // Enhanced link interactions
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Close menu after clicking a link
                setTimeout(closeMenu, 300);
                trackMobileClick('nav-link-' + this.textContent.toLowerCase().replace(/\s+/g, '-'));
            });
            
            // Add touch feedback
            link.addEventListener('touchstart', function() {
                this.style.backgroundColor = '#f3f4f6';
            });
            
            link.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 200);
            });
        });
        
        function openMenu() {
            const navigation = document.querySelector('#cs-navigation');
            navigation.classList.add('cs-active');
            body.classList.add('cs-open');
            navToggle.classList.add('cs-active');
            
            // Prevent background scrolling
            body.style.overflow = 'hidden';
            
            // Focus first menu item for accessibility
            const firstLink = navMenu.querySelector('.cs-li-link');
            if (firstLink) firstLink.focus();
        }
        
        function closeMenu() {
            const navigation = document.querySelector('#cs-navigation');
            navigation.classList.remove('cs-active');
            body.classList.remove('cs-open');
            navToggle.classList.remove('cs-active');
            
            // Restore scrolling
            body.style.overflow = '';
        }
    }
    
    
    // ====== SMOOTH SCROLLING ======
    function enableSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    // Calculate offset for fixed header
                    const headerHeight = document.querySelector('#cs-navigation')?.offsetHeight || 80;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    trackMobileClick('smooth-scroll-' + href.substring(1));
                }
            });
        });
    }
    
    
    // ====== TOUCH ENHANCEMENTS ======
    function addTouchEnhancements() {
        // Enhanced touch feedback for buttons
        const buttons = document.querySelectorAll('button, .cta-primary, .cta-secondary, .cs-button-solid');
        
        buttons.forEach(button => {
            // Remove default touch behavior
            button.style.webkitTapHighlightColor = 'transparent';
            
            button.addEventListener('touchstart', function(e) {
                this.classList.add('touch-active');
                
                // Create ripple effect
                createRipple(e, this);
            }, { passive: true });
            
            button.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 200);
            }, { passive: true });
        });
        
        // Card tap interactions
        const cards = document.querySelectorAll('.problem-card, .cs-item, .area-card');
        cards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            card.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, { passive: true });
        });
    }
    
    // Ripple effect for touch feedback
    function createRipple(event, element) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (event.touches[0].clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (event.touches[0].clientY - rect.top - size / 2) + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styles
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 600ms linear';
        ripple.style.pointerEvents = 'none';
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
    
    
    // ====== FORM OPTIMIZATIONS ======
    function optimizeForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                // Prevent zoom on iOS
                if (input.type === 'email' || input.type === 'tel' || input.type === 'text') {
                    input.style.fontSize = '16px';
                }
                
                // Enhanced focus states
                input.addEventListener('focus', function() {
                    this.parentElement?.classList.add('input-focused');
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement?.classList.remove('input-focused');
                    
                    // Validate on blur
                    validateInput(this);
                });
                
                // Real-time validation feedback
                input.addEventListener('input', function() {
                    clearTimeout(this.validationTimeout);
                    this.validationTimeout = setTimeout(() => {
                        validateInput(this);
                    }, 500);
                });
            });
            
            // Enhanced form submission
            form.addEventListener('submit', function(e) {
                const submitBtn = this.querySelector('[type="submit"]');
                if (submitBtn) {
                    submitBtn.classList.add('btn-loading');
                    submitBtn.disabled = true;
                    
                    trackMobileClick('form-submit');
                    
                    // Re-enable after timeout (in case form doesn't redirect)
                    setTimeout(() => {
                        submitBtn.classList.remove('btn-loading');
                        submitBtn.disabled = false;
                    }, 10000);
                }
            });
        });
    }
    
    function validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove existing error styling
        input.classList.remove('input-error');
        const existingError = input.parentElement?.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        // Validation rules
        if (input.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (input.type === 'email' && value && !isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        } else if (input.type === 'tel' && value && !isValidPhone(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
        
        // Show error if invalid
        if (!isValid) {
            input.classList.add('input-error');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errorMessage;
            errorDiv.style.color = '#dc2626';
            errorDiv.style.fontSize = '14px';
            errorDiv.style.marginTop = '4px';
            input.parentElement?.appendChild(errorDiv);
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function isValidPhone(phone) {
        return /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''));
    }
    
    
    // ====== EMERGENCY BANNER ======
    function handleEmergencyBanner() {
        // Show emergency banner during business hours or severe weather
        const currentHour = new Date().getHours();
        const isBusinessHours = currentHour >= 7 && currentHour <= 19;
        
        if (!isBusinessHours) {
            createEmergencyBanner();
        }
        
        // Check for severe weather (would integrate with weather API in production)
        // For now, we'll show it randomly 10% of the time to test
        if (Math.random() < 0.1) {
            createEmergencyBanner('⚠️ Severe Weather Alert: Emergency Service Available');
        }
    }
    
    function createEmergencyBanner(message = '🚨 After Hours? Emergency Service Available 24/7') {
        if (window.innerWidth > 768) return; // Mobile only
        
        const banner = document.createElement('div');
        banner.className = 'mobile-emergency-banner show';
        banner.innerHTML = `${message} <a href="tel:4375450067">Call Now</a>`;
        
        document.body.insertBefore(banner, document.body.firstChild);
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            banner.classList.remove('show');
            setTimeout(() => banner.remove(), 500);
        }, 10000);
        
        // Track banner interaction
        banner.addEventListener('click', () => {
            trackMobileClick('emergency-banner-click');
        });
    }
    
    
    // ====== CTR TRACKING ======
    function setupCTRTracking() {
        // Track all clickable elements
        const trackableElements = document.querySelectorAll(`
            .cta-primary, .cta-secondary, .mobile-call-sticky,
            .cs-button-solid, .problem-card, .cs-item,
            .area-link, .about-button-solid, .cs-emergency-button,
            [href^="tel:"], [href^="mailto:"]
        `);
        
        trackableElements.forEach(element => {
            element.addEventListener('click', function(e) {
                const elementType = this.className || this.tagName.toLowerCase();
                const text = this.textContent.trim().substring(0, 50);
                trackMobileClick(`element-${elementType}`, text);
            });
        });
        
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', throttle(() => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll % 25 === 0) { // Track every 25%
                    trackMobileClick(`scroll-depth-${maxScroll}%`);
                }
            }
        }, 1000));
    }
    
    function trackMobileClick(action, label = '') {
        // Send tracking data to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'mobile_interaction', {
                'event_category': 'Mobile Optimization',
                'event_label': action + (label ? ` - ${label}` : ''),
                'custom_map': {
                    'dimension1': 'mobile_user'
                }
            });
        }
        
        // Console log for debugging (remove in production)
        console.log('Mobile Click Tracked:', action, label);
    }
    
    
    // ====== ACCESSIBILITY FEATURES ======
    function addAccessibilityFeatures() {
        // Add skip to content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-to-content';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Enhance keyboard navigation
        const focusableElements = document.querySelectorAll(`
            a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])
        `);
        
        focusableElements.forEach(element => {
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    if (this.tagName === 'A' || this.tagName === 'BUTTON') {
                        // Space key should trigger buttons but not links
                        if (e.key === ' ' && this.tagName === 'A') {
                            e.preventDefault();
                            return;
                        }
                        this.click();
                    }
                }
            });
        });
        
        // Add ARIA labels to interactive elements without text
        document.querySelectorAll('.cs-toggle, .mobile-call-sticky').forEach(element => {
            if (!element.getAttribute('aria-label')) {
                const label = element.classList.contains('cs-toggle') ? 
                    'Toggle navigation menu' : 
                    'Call DrySpace Waterproofing';
                element.setAttribute('aria-label', label);
            }
        });
    }
    
    
    // ====== PERFORMANCE OPTIMIZATIONS ======
    function optimizeForMobile() {
        // Lazy load images below the fold
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
        
        // Preload critical resources
        const criticalImages = [
            '/images/dryspace_hero_mobile.jpg',
            '/images/dryspace_excellence.jpg'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
        
        // Optimize animations for mobile
        if (typeof window.matchMedia !== 'undefined') {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
            
            if (prefersReducedMotion.matches) {
                document.documentElement.style.setProperty('--animation-duration', '0.01ms');
            }
        }
        
        // Service Worker registration for offline capabilities
        if ('serviceWorker' in navigator && window.innerWidth <= 768) {
            navigator.serviceWorker.register('/sw.js').catch(() => {
                // Service worker registration failed, but continue normally
            });
        }
    }
    
    
    // ====== UTILITY FUNCTIONS ======
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    
    // ====== RESPONSIVE ADJUSTMENTS ======
    function handleResize() {
        const width = window.innerWidth;
        
        // Remove/add mobile features based on screen size
        if (width > 768) {
            // Remove mobile-only elements on larger screens
            const stickyBtn = document.querySelector('.mobile-call-sticky');
            if (stickyBtn) stickyBtn.remove();
            
            const banner = document.querySelector('.mobile-emergency-banner');
            if (banner) banner.remove();
        } else if (width <= 768) {
            // Re-add mobile features if resized back to mobile
            if (!document.querySelector('.mobile-call-sticky')) {
                createStickyCallButton();
            }
        }
    }
    
    // Handle window resize with debouncing
    window.addEventListener('resize', debounce(handleResize, 250));
    
    
    // ====== INITIALIZATION COMPLETE ======
    console.log('Mobile navigation enhancements loaded successfully');
    
    // Add CSS animations for ripple effect
    if (!document.querySelector('#mobile-ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'mobile-ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .touch-active {
                transform: scale(0.98) !important;
                transition: transform 0.1s ease !important;
            }
            
            .input-focused {
                transform: translateY(-2px);
                transition: transform 0.3s ease;
            }
            
            .input-error {
                border-color: #dc2626 !important;
                box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
            }
        `;
        document.head.appendChild(style);
    }
});

// Export functions for external use if needed
window.DrySpaceMobile = {
    trackClick: function(action, label) {
        trackMobileClick(action, label);
    }
};