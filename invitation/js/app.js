// ===================================
// Countdown Timer Functionality
// ===================================

/**
 * Configuration object for easy customization
 * Change the event date here
 */
const CONFIG = {
    // Event date and time (Year, Month (0-11), Day, Hour, Minute, Second)
    eventDate: new Date(2026, 2, 15, 18, 0, 0), // March 15, 2026 at 18:00
    
    // Selectors
    selectors: {
        days: '#days',
        hours: '#hours',
        minutes: '#minutes',
        seconds: '#seconds',
        viewDetailsBtn: '#viewDetailsBtn',
        detailsSection: '#details'
    }
};

/**
 * Countdown Timer Class
 */
class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = targetDate;
        this.elements = {
            days: document.querySelector(CONFIG.selectors.days),
            hours: document.querySelector(CONFIG.selectors.hours),
            minutes: document.querySelector(CONFIG.selectors.minutes),
            seconds: document.querySelector(CONFIG.selectors.seconds)
        };
        
        this.interval = null;
    }
    
    /**
     * Calculate time remaining until event
     */
    calculateTimeRemaining() {
        const now = new Date().getTime();
        const distance = this.targetDate.getTime() - now;
        
        if (distance < 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                expired: true
            };
        }
        
        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
            expired: false
        };
    }
    
    /**
     * Format number to always show two digits
     */
    formatNumber(num) {
        return num.toString().padStart(2, '0');
    }
    
    /**
     * Update the countdown display
     */
    updateDisplay() {
        const time = this.calculateTimeRemaining();
        
        if (time.expired) {
            this.handleExpired();
            return;
        }
        
        // Update DOM with animation
        this.animateValue(this.elements.days, time.days);
        this.animateValue(this.elements.hours, time.hours);
        this.animateValue(this.elements.minutes, time.minutes);
        this.animateValue(this.elements.seconds, time.seconds);
    }
    
    /**
     * Animate value change with a subtle effect
     */
    animateValue(element, newValue) {
        const formattedValue = this.formatNumber(newValue);
        
        if (element.textContent !== formattedValue) {
            element.style.transform = 'scale(1.1)';
            element.textContent = formattedValue;
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    /**
     * Handle expired countdown
     */
    handleExpired() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        
        this.elements.days.textContent = '00';
        this.elements.hours.textContent = '00';
        this.elements.minutes.textContent = '00';
        this.elements.seconds.textContent = '00';
        
        // Optional: Show a message when countdown expires
        const countdownContainer = document.querySelector('.countdown-container h3');
        if (countdownContainer) {
            countdownContainer.textContent = '¡El evento es hoy! 🎉';
        }
    }
    
    /**
     * Start the countdown timer
     */
    start() {
        // Initial update
        this.updateDisplay();
        
        // Update every second
        this.interval = setInterval(() => {
            this.updateDisplay();
        }, 1000);
    }
    
    /**
     * Stop the countdown timer
     */
    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

// ===================================
// Smooth Scroll Functionality
// ===================================

/**
 * Smooth scroll to a target element
 */
function smoothScrollTo(targetElement, offset = 0) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

/**
 * Initialize smooth scroll for "View Details" button
 */
function initSmoothScroll() {
    const viewDetailsBtn = document.querySelector(CONFIG.selectors.viewDetailsBtn);
    const detailsSection = document.querySelector(CONFIG.selectors.detailsSection);
    
    if (viewDetailsBtn && detailsSection) {
        viewDetailsBtn.addEventListener('click', () => {
            smoothScrollTo(detailsSection, 20);
        });
    }
}

// ===================================
// Intersection Observer for Animations
// ===================================

/**
 * Add scroll-triggered animations to elements
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.info-card, .gallery-item, .rsvp-section');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add CSS for the animation class
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===================================
// Gallery Functionality (Optional Enhancement)
// ===================================

/**
 * Add hover effects to gallery items
 */
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// ===================================
// Utility Functions
// ===================================

/**
 * Add a subtle parallax effect to the hero section
 */
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    
    if (!heroSection) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

/**
 * Add loading animation when page loads
 */
function initPageLoad() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// ===================================
// Customization Helper
// ===================================

/**
 * This function helps you customize the invitation
 * Call this in the console to change event details dynamically
 */
window.customizeInvitation = function(options = {}) {
    // Example usage:
    // customizeInvitation({
    //     eventDate: new Date(2026, 11, 25, 19, 0, 0),
    //     whatsappNumber: '1234567890',
    //     whatsappMessage: 'Confirmo mi asistencia'
    // });
    
    if (options.eventDate) {
        CONFIG.eventDate = options.eventDate;
        // Restart countdown with new date
        if (window.countdownTimer) {
            window.countdownTimer.stop();
            window.countdownTimer = new CountdownTimer(CONFIG.eventDate);
            window.countdownTimer.start();
        }
    }
    
    if (options.whatsappNumber) {
        const whatsappBtn = document.querySelector('.whatsapp-button');
        if (whatsappBtn) {
            const message = options.whatsappMessage || 'Hola, confirmo mi asistencia al evento';
            whatsappBtn.href = `https://wa.me/${options.whatsappNumber}?text=${encodeURIComponent(message)}`;
        }
    }
    
    console.log('Invitation customized successfully!');
};

// ===================================
// Initialize Application
// ===================================

/**
 * Main initialization function
 * Runs when DOM is fully loaded
 */
function init() {
    // Initialize countdown timer
    window.countdownTimer = new CountdownTimer(CONFIG.eventDate);
    window.countdownTimer.start();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize gallery
    initGallery();
    
    // Parallax disabled for better visibility
    // initParallax();
    
    // Page load animation
    initPageLoad();
    
    console.log('Digital Invitation initialized successfully! ✨');
    console.log('Event date:', CONFIG.eventDate.toLocaleString());
    console.log('To customize, use: customizeInvitation({ eventDate: new Date(...), whatsappNumber: "..." })');
}

// ===================================
// Event Listeners
// ===================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle visibility change (pause countdown when tab is hidden)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Tab hidden - countdown continues');
    } else {
        console.log('Tab visible - syncing countdown');
        if (window.countdownTimer) {
            window.countdownTimer.updateDisplay();
        }
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CountdownTimer,
        CONFIG,
        customizeInvitation: window.customizeInvitation
    };
}
