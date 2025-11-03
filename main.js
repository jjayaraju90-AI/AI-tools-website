// ===== AI TOOLS DATA =====
const aiToolsData = [
    {
        id: 1,
        name: "ChatGPT",
        category: "writing",
        description: "OpenAI's advanced conversational AI for writing, coding, and problem-solving.",
        tags: ["Writing", "Coding", "Conversational", "Free"],
        rating: 4.8,
        reviews: 15000,
        price: "$20/month",
        logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 2,
        name: "Midjourney",
        category: "image",
        description: "AI-powered image generation tool creating stunning artwork from text descriptions.",
        tags: ["Image Generation", "Art", "Creative", "Paid"],
        rating: 4.7,
        reviews: 8200,
        price: "$30/month",
        logo: "https://images.unsplash.com/photo-1686191128892-3b6c73a640d9?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 3,
        name: "Runway ML",
        category: "video",
        description: "Comprehensive AI video editing and generation platform for creators and professionals.",
        tags: ["Video", "Editing", "Generation", "Creative"],
        rating: 4.6,
        reviews: 3400,
        price: "$15/month",
        logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 4,
        name: "Jasper AI",
        category: "writing",
        description: "Enterprise-focused AI writing assistant for marketing teams and content creators.",
        tags: ["Marketing", "Writing", "Enterprise", "SEO"],
        rating: 4.5,
        reviews: 12000,
        price: "$49/month",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 5,
        name: "Synthesia",
        category: "video",
        description: "AI video platform that creates videos with AI avatars and voices in multiple languages.",
        tags: ["Video", "Avatars", "Multilingual", "Business"],
        rating: 4.4,
        reviews: 2800,
        price: "$30/month",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
        featured: false
},
    {
        id: 6,
        name: "GitHub Copilot",
        category: "code",
        description: "AI pair programmer that helps you write code faster and with less effort.",
        tags: ["Coding", "Programming", "GitHub", "Development"],
        rating: 4.7,
        reviews: 45000,
        price: "$10/month",
        logo: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 7,
        name: "Notion AI",
        category: "business",
        description: "AI-powered productivity and note-taking app with writing assistance capabilities.",
        tags: ["Productivity", "Notes", "Collaboration", "All-in-One"],
        rating: 4.3,
        reviews: 8900,
        price: "$10/month",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    {
        id: 8,
        name: "ElevenLabs",
        category: "audio",
        description: "Advanced AI voice synthesis platform for generating realistic speech and audio.",
        tags: ["Voice", "Audio", "Speech", "Multilingual"],
        rating: 4.6,
        reviews: 5200,
        price: "$5/month",
        logo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 9,
        name: "Canva AI",
        category: "image",
        description: "AI-powered design tool for creating graphics, presentations, and marketing materials.",
        tags: ["Design", "Graphics", "Templates", "Easy"],
        rating: 4.5,
        reviews: 25000,
        price: "$15/month",
        logo: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 10,
        name: "HubSpot AI",
        category: "business",
        description: "AI-powered CRM and marketing automation platform for growing businesses.",
        tags: ["CRM", "Marketing", "Sales", "Automation"],
        rating: 4.2,
        reviews: 6700,
        price: "$45/month",
        logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center",
        featured: false
    }
];

// ===== UTILITY FUNCTIONS =====
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<svg class="star" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<svg class="star" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clip-path="url(#half)"/><defs><clipPath id="half"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></clipPath></defs></svg>';
    }
    
    return starsHTML;
}

// ===== TOOL RENDERING =====
function createToolCard(tool) {
    return `
<div class="tool-card" data-category="${tool.category}">
            <div class="tool-header">
                <img src="${tool.logo}" alt="${tool.name} logo" class="tool-logo" loading="lazy">
                <div>
                    <h3 class="tool-name">${tool.name}</h3>
                    <p class="tool-category">${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}</p>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tags">
                ${tool.tags.map(tag => <span class="tool-tag">${tag}</span>).join('')}
            </div>
            <div class="tool-footer">
                <div class="tool-rating">
                    <div class="stars">
                        ${generateStars(tool.rating)}
                    </div>
                    <span class="rating-text">${tool.rating} (${formatNumber(tool.reviews)} reviews)</span>
                </div>
                <div class="tool-price">${tool.price}</div>
            </div>
            <a href="#" class="visit-btn" onclick="trackClick('${tool.name}', '${tool.category}')">Visit Tool</a>
        </div>
    `;
}

function renderTools(tools = aiToolsData) {
    const toolGrid = document.getElementById('toolGrid');
    if (!toolGrid) return;
    
    toolGrid.innerHTML = tools.map(tool => createToolCard(tool)).join('');
}

// ===== SEARCH & FILTER FUNCTIONALITY =====
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const quickFilters = document.querySelectorAll('.quick-filter-btn');
    
    if (searchInput && searchBtn) {
        const performSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            if (query === '') {
                renderTools(aiToolsData.filter(tool => tool.featured));
            } else {
                const filtered = aiToolsData.filter(tool => 
                    tool.name.toLowerCase().includes(query) ||
                    tool.description.toLowerCase().includes(query) ||
                    tool.tags.some(tag => tag.toLowerCase().includes(query)) ||
                    tool.category.toLowerCase().includes(query)
                );
                renderTools(filtered);
            }
        };
        
        searchInput.addEventListener('input', performSearch);
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Quick filter buttons
    quickFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active state
            quickFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter tools
            if (category) {
                const filtered = aiToolsData.filter(tool => 
                    tool.category === category && tool.featured
                );
                renderTools(filtered);
            } else {
                renderTools(aiToolsData.filter(tool => tool.featured));
            }
        });
    });
}

// ===== CATEGORY FILTERING =====
function initializeCategoryFilters() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const filtered = aiToolsData.filter(tool => tool.category === category);
            renderTools(filtered);
            
            // Smooth scroll to tools section
            document.getElementById('featured').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// ===== PREMIUM FUNCTIONALITY =====
function initializePremium() {
    const premiumBtn = document.getElementById('premiumBtn');
    
    if (premiumBtn) {
        premiumBtn.addEventListener('click', () => {
            // Track premium signup attempt
            console.log('Premium signup initiated');
            
            // Simulate premium signup flow
            alert('🚀 Premium Features Unlocked!\n\n• Exclusive tool rankings\n• Detailed ROI calculations\n• Priority support\n• Early access to reviews\n\nStarting your 7-day free trial...');
            
            // In a real implementation, this would redirect to a payment processor
            // or open a signup modal
            setTimeout(() => {
                window.open('https://stripe.com', '_blank');
            }, 1000);
        });
    }
}

// ===== NEWSLETTER FUNCTIONALITY =====
function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            if (email) {
                // Track newsletter signup
                console.log('Newsletter signup:', email);
                
                // Show success message
                const submitBtn = newsletterForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = '✓ Subscribed!';
                submitBtn.style.backgroundColor = 'var(--success-500)';
                
setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    newsletterForm.reset();
                }, 3000);
                
                // In a real implementation, send email to your email service
                console.log('Email would be sent to:', email);
            }
        });
    }
}

// ===== MOBILE MENU =====
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinkElements = navLinks.querySelectorAll('.nav-link');
        navLinkElements.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
}

// ===== ANALYTICS & TRACKING =====
function trackClick(toolName, category) {
    console.log(Tool clicked: ${toolName} (${category}));
    // In a real implementation, this would send data to your analytics service
    // Example: gtag('event', 'click', { tool_name: toolName, category: category });
    
    // Simulate affiliate link tracking
    setTimeout(() => {

window.open(https://example.com/affiliate/${toolName.toLowerCase().replace(/\s+/g, '-')}, '_blank');
    }, 100);
}

// ===== LOADING STATES =====
function showLoadingState() {
    const toolGrid = document.getElementById('toolGrid');
    if (toolGrid) {
        toolGrid.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Loading AI tools...</p>
            </div>
        `;
    }
}

function hideLoadingState() {
    const loadingSpinner = document.querySelector('.loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.remove();
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function enhanceAccessibility() {
    // Add keyboard navigation for tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // Add ARIA labels
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.setAttribute('aria-label', 'Search AI tools');
    }
}

// ===== ERROR HANDLING =====
function handleErrors() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // In a real implementation, send error to logging service
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        // In a real implementation, send error to logging service
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 AI Tools Hub loaded successfully!');
    
    try {
        // Initialize all functionality
        renderTools(aiToolsData.filter(tool => tool.featured));
        initializeSearch();
        initializeCategoryFilters();
        initializePremium();
        initializeNewsletter();
        initializeMobileMenu();
        
        // Enhancement features
        lazyLoadImages();
        enhanceAccessibility();
        handleErrors();
        
        console.log('✅ All features initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing features:', error);
    }
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        aiToolsData,
        createToolCard,
        renderTools,
        formatNumber,
        generateStars
    };
}
