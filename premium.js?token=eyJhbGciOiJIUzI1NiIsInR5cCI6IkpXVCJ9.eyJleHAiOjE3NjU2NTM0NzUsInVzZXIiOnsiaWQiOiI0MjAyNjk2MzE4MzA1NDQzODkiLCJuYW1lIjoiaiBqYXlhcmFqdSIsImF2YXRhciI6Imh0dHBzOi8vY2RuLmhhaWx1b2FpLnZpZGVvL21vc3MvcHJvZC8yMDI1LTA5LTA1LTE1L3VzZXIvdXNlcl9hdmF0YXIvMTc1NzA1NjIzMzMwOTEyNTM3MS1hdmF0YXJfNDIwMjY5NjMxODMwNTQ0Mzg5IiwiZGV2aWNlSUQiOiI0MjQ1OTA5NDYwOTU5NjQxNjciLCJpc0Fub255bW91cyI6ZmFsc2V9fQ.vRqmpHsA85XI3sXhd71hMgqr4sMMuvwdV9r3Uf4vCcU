// ===== PREMIUM PAGE FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize premium page functionality
    initializeTrialButtons();
    initializeFAQ();
    initializeAnimations();
});

// ===== TRIAL BUTTONS =====
function initializeTrialButtons() {
    const startTrialBtn = document.getElementById('startTrialBtn');
    const finalCtaBtn = document.getElementById('finalCtaBtn');
    
    [startTrialBtn, finalCtaBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', handleTrialSignup);
        }
    });
}

function handleTrialSignup(e) {
    e.preventDefault();
    
    // Add loading state
    const button = e.target;
    const originalText = button.textContent;
    
    button.textContent = 'Processing...';
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // Simulate signup process
    setTimeout(() => {
        button.textContent = '✓ Trial Started!';
        button.style.backgroundColor = 'var(--success-500)';
        
        // Show success message
        showSuccessModal();
        
        // Reset button after delay
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.opacity = '';
            button.style.backgroundColor = '';
        }, 5000);
        
        // Track signup attempt
        console.log('Premium trial initiated');
        
        // In a real implementation, redirect to payment processor
        // Example: window.open('https://stripe.com/checkout/your-session', '_blank');
        
    }, 2000);
}

// ===== SUCCESS MODAL =====
function showSuccessModal() {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.style.cssText = `
        background: white;
        padding: 48px;
        border-radius: 16px;
        text-align: center;
        max-width: 500px;
        margin: 0 24px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        animation: slideUp 0.3s ease-out;
    `;
    
    modal.innerHTML = `
        <div style="color: var(--success-500); font-size: 64px; margin-bottom: 24px;">🎉</div>
        <h2 style="margin-bottom: 16px; color: var(--text-primary);">Welcome to Premium!</h2>
        <p style="color: var(--text-secondary); margin-bottom: 32px; line-height: 1.6;">
            Your 7-day free trial has started successfully. You'll receive an email with your 
            premium access details and next steps.
        </p>
        <button onclick="closeModal(this)" class="btn btn-primary" style="padding: 12px 32px;">
            Continue Exploring
        </button>
    `;
    
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    
    // Close modal on outside click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal(modalOverlay);
        }
    });
    
    // Add CSS animations
    addModalStyles();
}

function closeModal(element) {
    const modal = element.closest('.modal-overlay');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function addModalStyles() {
    if (!document.getElementById('modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            
            @keyframes slideUp {
                from { 
                    opacity: 0;
                    transform: translateY(20px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

// ===== FAQ FUNCTIONALITY =====
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => toggleFAQ(item));
        }
    });
}

function toggleFAQ(item) {
    const isActive = item.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        item.classList.add('active');
    }
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.comparison-section, .testimonials-section, .faq-section');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }
}

// ===== TESTIMONIAL SLIDER =====
function initializeTestimonialSlider() {
    const testimonialContainer = document.querySelector('.testimonials-grid');
    if (!testimonialContainer) return;
    
    // Add auto-slide functionality (optional)
    let currentSlide = 0;
    const slides = testimonialContainer.children;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0.5';
            slide.style.transform = i === index ? 'scale(1)' : 'scale(0.95)';
        });
    }
    
    // Auto-advance slides every 5 seconds
    if (slides.length > 3) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }
}

// ===== PRICING TOGGLE =====
function initializePricingToggle() {
    const pricingSection = document.querySelector('.pricing-hero');
    if (!pricingSection) return;
    
    // Add monthly/annual toggle
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'pricing-toggle';
    toggleContainer.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin: 24px 0;
    `;
    
    const monthlyLabel = document.createElement('span');
    monthlyLabel.textContent = 'Monthly';
    monthlyLabel.style.fontWeight = '600';
    
    const toggle = document.createElement('button');
    toggle.className = 'toggle-switch';
    toggle.style.cssText = `
        width: 60px;
        height: 32px;
        border-radius: 16px;
        background: var(--primary-500);
        border: none;
        position: relative;
        cursor: pointer;
        transition: background 0.3s ease;
    `;
    
    const toggleKnob = document.createElement('div');
    toggleKnob.style.cssText = `
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: white;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: transform 0.3s ease;
    `;
    toggle.appendChild(toggleKnob);
    
    const annualLabel = document.createElement('span');
    annualLabel.textContent = 'Annual';
    annualLabel.style.fontWeight = '600';
    annualLabel.style.color = 'var(--success-500)';
    
    toggle.addEventListener('click', () => {
        const isAnnual = toggleKnob.style.transform === 'translateX(28px)';
        if (isAnnual) {
            toggleKnob.style.transform = 'translateX(0)';
            toggle.style.background = 'var(--primary-500)';
            annualLabel.style.color = 'var(--success-500)';
        } else {
            toggleKnob.style.transform = 'translateX(28px)';
            toggle.style.background = 'var(--success-500)';
            annualLabel.style.color = 'var(--text-primary)';
        }
    });
    
    toggleContainer.append(monthlyLabel, toggle, annualLabel);
    pricingSection.appendChild(toggleContainer);
}

// ===== ERROR HANDLING =====
function handleErrors() {
    window.addEventListener('error', (e) => {
        console.error('Premium page error:', e.error);
        // In production, send to error tracking service
    });
}

// ===== PERFORMANCE MONITORING =====
function trackPerformance() {
    // Track page load performance
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Premium page loaded in ${loadTime.toFixed(2)}ms`);
        
        // Track Core Web Vitals
        if ('web-vital' in window) {
            // Implementation would depend on your analytics service
        }
    });
}

// ===== ANALYTICS =====
function trackUserInteractions() {
    // Track CTA button clicks
    document.querySelectorAll('.btn-primary').forEach(btn => {
        if (btn.textContent.includes('Trial') || btn.textContent.includes('Premium')) {
            btn.addEventListener('click', () => {
                console.log('Premium CTA clicked');
                // Send to analytics service
            });
        }
    });
    
    // Track FAQ interactions
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            console.log('FAQ interaction:', question.textContent.trim());
            // Send to analytics service
        });
    });
}

// Initialize premium page features
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeTestimonialSlider();
        initializePricingToggle();
        handleErrors();
        trackPerformance();
        trackUserInteractions();
    }, 1000);
});