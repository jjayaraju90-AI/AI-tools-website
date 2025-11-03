// ===== ALL TOOLS PAGE FUNCTIONALITY =====

// Extended AI tools data with more tools for demonstration
const allToolsData = [
    // Writing Tools
    {
        id: 1,
        name: "ChatGPT",
        category: "writing",
        description: "OpenAI's advanced conversational AI for writing, coding, and problem-solving.",
        tags: ["Writing", "Coding", "Conversational", "Free"],
        rating: 4.8,
        reviews: 15000,
        price: "$20/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 2,
        name: "Jasper AI",
        category: "writing",
        description: "Enterprise-focused AI writing assistant for marketing teams and content creators.",
        tags: ["Marketing", "Writing", "Enterprise", "SEO"],
        rating: 4.5,
        reviews: 12000,
        price: "$49/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 3,
        name: "Grammarly",
        category: "writing",
        description: "AI-powered writing assistant that helps improve grammar, style, and clarity.",
        tags: ["Grammar", "Writing", "Proofreading", "Free"],
        rating: 4.7,
        reviews: 25000,
        price: "Free",
        priceType: "free",
        logo: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    {
        id: 4,
        name: "Copy.ai",
        category: "writing",
        description: "AI copywriting tool for marketing copy, social media, and content creation.",
        tags: ["Copywriting", "Marketing", "Content", "Automation"],
        rating: 4.4,
        reviews: 8900,
        price: "$49/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    
    // Image Tools
    {
        id: 5,
        name: "Midjourney",
        category: "image",
        description: "AI-powered image generation tool creating stunning artwork from text descriptions.",
        tags: ["Image Generation", "Art", "Creative", "Paid"],
        rating: 4.7,
        reviews: 8200,
        price: "$30/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1686191128892-3b6c73a640d9?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 6,
        name: "DALL-E 3",
        category: "image",
        description: "OpenAI's latest image generation model with improved quality and accuracy.",
        tags: ["Image Generation", "OpenAI", "High Quality", "Paid"],
        rating: 4.6,
        reviews: 5600,
        price: "$20/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 7,
        name: "Canva AI",
        category: "image",
        description: "AI-powered design tool for creating graphics, presentations, and marketing materials.",
        tags: ["Design", "Graphics", "Templates", "Easy"],
        rating: 4.5,
        reviews: 25000,
        price: "$15/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 8,
        name: "Stable Diffusion",
        category: "image",
        description: "Open-source AI image generator with customizable models and community support.",
        tags: ["Image Generation", "Open Source", "Customizable", "Free"],
        rating: 4.3,
        reviews: 4500,
        price: "Free",
        priceType: "free",
        logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    
    // Video Tools
    {
        id: 9,
        name: "Runway ML",
        category: "video",
        description: "Comprehensive AI video editing and generation platform for creators and professionals.",
        tags: ["Video", "Editing", "Generation", "Creative"],
        rating: 4.6,
        reviews: 3400,
        price: "$15/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 10,
        name: "Synthesia",
        category: "video",
        description: "AI video platform that creates videos with AI avatars and voices in multiple languages.",
        tags: ["Video", "Avatars", "Multilingual", "Business"],
        rating: 4.4,
        reviews: 2800,
        price: "$30/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    {
        id: 11,
        name: "Luma AI",
        category: "video",
        description: "AI-powered video generation from text prompts with cinematic quality results.",
        tags: ["Video Generation", "Text-to-Video", "Cinematic", "Creative"],
        rating: 4.5,
        reviews: 1900,
        price: "$20/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    
    // Business Tools
    {
        id: 12,
        name: "Notion AI",
        category: "business",
        description: "AI-powered productivity and note-taking app with writing assistance capabilities.",
        tags: ["Productivity", "Notes", "Collaboration", "All-in-One"],
        rating: 4.3,
        reviews: 8900,
        price: "$10/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    {
        id: 13,
        name: "HubSpot AI",
        category: "business",
        description: "AI-powered CRM and marketing automation platform for growing businesses.",
        tags: ["CRM", "Marketing", "Sales", "Automation"],
        rating: 4.2,
        reviews: 6700,
        price: "$45/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    {
        id: 14,
        name: "Monday.com AI",
        category: "business",
        description: "Work management platform with AI features for project planning and automation.",
        tags: ["Project Management", "Automation", "Team", "Productivity"],
        rating: 4.4,
        reviews: 5200,
        price: "$8/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    
    // Code Tools
    {
        id: 15,
        name: "GitHub Copilot",
        category: "code",
        description: "AI pair programmer that helps you write code faster and with less effort.",
        tags: ["Coding", "Programming", "GitHub", "Development"],
        rating: 4.7,
        reviews: 45000,
        price: "$10/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 16,
        name: "CodeWhisperer",
        category: "code",
        description: "Amazon's AI coding companion for faster and more accurate code development.",
        tags: ["Coding", "AWS", "Security", "Multi-language"],
        rating: 4.3,
        reviews: 3400,
        price: "Free",
        priceType: "free",
        logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    {
        id: 17,
        name: "Tabnine",
        category: "code",
        description: "AI code completion tool that predicts and suggests code as you type.",
        tags: ["Code Completion", "Productivity", "Development", "IDE"],
        rating: 4.1,
        reviews: 7800,
        price: "$12/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    
    // Audio Tools
    {
        id: 18,
        name: "ElevenLabs",
        category: "audio",
        description: "Advanced AI voice synthesis platform for generating realistic speech and audio.",
        tags: ["Voice", "Audio", "Speech", "Multilingual"],
        rating: 4.6,
        reviews: 5200,
        price: "$5/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center",
        featured: true
    },
    {
        id: 19,
        name: "Murf AI",
        category: "audio",
        description: "AI voiceover platform with realistic voice synthesis for videos and presentations.",
        tags: ["Voiceover", "TTS", "Videos", "Professional"],
        rating: 4.4,
        reviews: 3900,
        price: "$19/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center",
        featured: false
    },
    {
        id: 20,
        name: "Speechify",
        category: "audio",
        description: "Text-to-speech app that reads text aloud in multiple languages and voices.",
        tags: ["Text-to-Speech", "Accessibility", "Reading", "Mobile"],
        rating: 4.3,
        reviews: 12000,
        price: "$11/month",
        priceType: "paid",
        logo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center",
        featured: false
    }
];

// Global variables
let currentTools = [...allToolsData];
let displayedTools = [];
let currentPage = 1;
const toolsPerPage = 12;

// DOM Elements
let toolSearch, categoryFilter, priceFilter, sortFilter, toolGrid, resultsCount, loadMoreBtn;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    setupEventListeners();
    displayTools();
    updateResultsCount();
});

// ===== ELEMENT INITIALIZATION =====
function initializeElements() {
    toolSearch = document.getElementById('toolSearch');
    categoryFilter = document.getElementById('categoryFilter');
    priceFilter = document.getElementById('priceFilter');
    sortFilter = document.getElementById('sortFilter');
    toolGrid = document.getElementById('allToolsGrid');
    resultsCount = document.getElementById('resultsCount');
    loadMoreBtn = document.getElementById('loadMoreBtn');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Search input
    if (toolSearch) {
        toolSearch.addEventListener('input', debounce(applyFilters, 300));
    }
    
    // Filter selects
    [categoryFilter, priceFilter, sortFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', applyFilters);
        }
    });
    
    // View toggle buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            viewButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const viewType = e.target.dataset.view;
            if (viewType === 'list') {
                toolGrid.classList.add('list-view');
            } else {
                toolGrid.classList.remove('list-view');
            }
        });
    });
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreTools);
    }
}

// ===== FILTERING AND SORTING =====
function applyFilters() {
    const searchTerm = toolSearch ? toolSearch.value.toLowerCase() : '';
    const categoryValue = categoryFilter ? categoryFilter.value : '';
    const priceValue = priceFilter ? priceFilter.value : '';
    const sortValue = sortFilter ? sortFilter.value : '';
    
    // Filter tools
    let filtered = allToolsData.filter(tool => {
        const matchesSearch = searchTerm === '' || 
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
        const matchesCategory = categoryValue === '' || tool.category === categoryValue;
        const matchesPrice = priceValue === '' || tool.priceType === priceValue;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    // Sort tools
    filtered.sort((a, b) => {
        switch (sortValue) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'reviews':
                return b.reviews - a.reviews;
            case 'rating':
            default:
                return b.rating - a.rating;
        }
    });
    
    currentTools = filtered;
    currentPage = 1;
    displayedTools = filtered.slice(0, toolsPerPage);
    
    displayTools();
    updateResultsCount();
    updateActiveFilters();
}

function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('activeFilters');
    if (!activeFiltersContainer) return;
    
    const filters = [];
    
    if (toolSearch && toolSearch.value) {
        filters.push({ type: 'search', value: toolSearch.value });
    }
    
    if (categoryFilter && categoryFilter.value) {
        filters.push({ type: 'category', value: categoryFilter.options[categoryFilter.selectedIndex].text });
    }
    
    if (priceFilter && priceFilter.value) {
        filters.push({ type: 'price', value: priceFilter.options[priceFilter.selectedIndex].text });
    }
    
    if (filters.length === 0) {
        activeFiltersContainer.innerHTML = '';
        return;
    }
    
    const filtersHTML = filters.map(filter => 
        `<span class="active-filter">
            ${filter.value}
            <button class="remove-filter" data-type="${filter.type}">×</button>
        </span>`
    ).join('');
    
    activeFiltersContainer.innerHTML = `<div class="filters-list">${filtersHTML}</div>`;
    
    // Add event listeners to remove filter buttons
    activeFiltersContainer.querySelectorAll('.remove-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            removeFilter(btn.dataset.type);
        });
    });
}

function removeFilter(type) {
    switch (type) {
        case 'search':
            if (toolSearch) toolSearch.value = '';
            break;
        case 'category':
            if (categoryFilter) categoryFilter.value = '';
            break;
        case 'price':
            if (priceFilter) priceFilter.value = '';
            break;
    }
    applyFilters();
}

// ===== DISPLAY FUNCTIONS =====
function displayTools() {
    if (!toolGrid) return;
    
    const toolsToShow = currentTools.slice(0, currentPage * toolsPerPage);
    displayedTools = toolsToShow;
    
    if (toolsToShow.length === 0) {
        toolGrid.innerHTML = `
            <div class="no-results">
                <h3>No tools found</h3>
                <p>Try adjusting your filters or search terms.</p>
                <button class="btn btn-primary" onclick="clearAllFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }
    
    toolGrid.innerHTML = toolsToShow.map(tool => createToolCard(tool)).join('');
    
    // Update load more button
    if (loadMoreBtn) {
        if (toolsToShow.length >= currentTools.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
            loadMoreBtn.textContent = `Load More Tools (${currentTools.length - toolsToShow.length} remaining)`;
        }
    }
}

function loadMoreTools() {
    currentPage++;
    displayTools();
}

function updateResultsCount() {
    if (resultsCount) {
        const total = currentTools.length;
        const showing = Math.min(displayedTools.length, total);
        resultsCount.textContent = `Showing ${showing} of ${total} tools`;
    }
}

// ===== UTILITY FUNCTIONS =====
function clearAllFilters() {
    if (toolSearch) toolSearch.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    if (sortFilter) sortFilter.value = 'rating';
    
    applyFilters();
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

// ===== WINDOW RESIZE HANDLER =====
window.addEventListener('resize', () => {
    // Adjust layout for mobile if needed
    if (window.innerWidth < 768) {
        toolGrid?.classList.remove('list-view');
    }
});

// ===== EXPORT FUNCTIONS FOR GLOBAL ACCESS =====
window.clearAllFilters = clearAllFilters;