// Main Application Logic
class AIToolsApp {
    constructor() {
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.favorites = JSON.parse(localStorage.getItem('aitools-favorites')) || [];
        this.isListView = false;
        
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        console.log('Initializing AI Tools App...');
        
        // Check if AIToolsData exists
        if (typeof AIToolsData === 'undefined') {
            console.error('AIToolsData not found! Check script loading order.');
            return;
        }
        
        console.log('AIToolsData loaded:', AIToolsData.tools.length, 'tools');
        
        // Initialize UI components
        this.initializeCategories();
        this.initializeSearch();
        this.initializeViewToggle();
        this.initializeMobileMenu();
        this.initializeNewsletter();
        this.initializeFavorites();
        
        // Load and display tools
        this.displayTools();
        this.updateStats();
        
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        console.log('AI Tools App initialized successfully!');
        
        // Add error handler for global debugging
        window.addEventListener('error', e => {
            console.error('JavaScript Error:', e.message, 'at line', e.lineno, 'in', e.filename);
        });
    }

    // Category Management
    initializeCategories() {
        const categoryFilters = document.getElementById('category-filters');
        if (!categoryFilters) return;

        const categories = AIToolsData.categories;
        
        // Update category counts
        categories.forEach(category => {
            if (category.id === 'all') {
                category.count = AIToolsData.tools.length;
            } else {
                category.count = AIToolsData.tools.filter(tool => tool.category === category.id).length;
            }
        });

        // Generate category pills
        categoryFilters.innerHTML = categories.map(category => `
            <button class="category-pill ${category.id === this.currentCategory ? 'active' : ''}" 
                    data-category="${category.id}">
                <i data-lucide="${category.icon}" class="category-pill-icon"></i>
                ${category.name}
                <span class="category-pill-count">(${category.count})</span>
            </button>
        `).join('');

        // Add click handlers
        categoryFilters.addEventListener('click', (e) => {
            const pill = e.target.closest('.category-pill');
            if (!pill) return;

            const category = pill.dataset.category;
            this.setActiveCategory(category);
        });

        // Initialize Lucide icons for categories
        if (typeof lucide !== 'undefined') {
            setTimeout(() => lucide.createIcons(), 100);
        }
    }

    setActiveCategory(categoryId) {
        this.currentCategory = categoryId;
        
        // Update active state
        document.querySelectorAll('.category-pill').forEach(pill => {
            pill.classList.remove('active');
        });
        document.querySelector(`[data-category="${categoryId}"]`).classList.add('active');
        
        // Update active filters display
        this.updateActiveFilters();
        
        // Re-render tools
        this.displayTools();
    }

    // Search Functionality
    initializeSearch() {
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        
        if (!searchInput) return;

        // Search input handler
        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.trim();
            this.displayTools();
        });

        // Search button handler
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.searchQuery = searchInput.value.trim();
                this.displayTools();
            });
        }

        // Enter key handler
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchQuery = searchInput.value.trim();
                this.displayTools();
            }
        });
    }

    // View Toggle
    initializeViewToggle() {
        const gridBtn = document.getElementById('grid-view-btn');
        const listBtn = document.getElementById('list-view-btn');
        
        if (!gridBtn || !listBtn) return;

        gridBtn.addEventListener('click', () => this.setView('grid'));
        listBtn.addEventListener('click', () => this.setView('list'));
    }

    setView(viewType) {
        this.isListView = viewType === 'list';
        
        // Update button states
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewType}"]`).classList.add('active');
        
        // Update container class
        const toolsGrid = document.getElementById('tools-grid');
        if (toolsGrid) {
            toolsGrid.className = this.isListView ? 'tools-list' : 'tools-grid';
        }
    }

    // Mobile Menu
    initializeMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menuOverlay = document.getElementById('mobile-menu-overlay');
        const menuClose = document.getElementById('mobile-menu-close');
        
        if (!menuBtn || !menuOverlay) return;

        menuBtn.addEventListener('click', () => {
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        menuClose?.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) {
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on mobile menu links
        menuOverlay.addEventListener('click', (e) => {
            const link = e.target.closest('.mobile-menu-link');
            if (link) {
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Newsletter
    initializeNewsletter() {
        const form = document.getElementById('newsletter-form');
        const emailInput = document.getElementById('newsletter-email');
        
        if (!form || !emailInput) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            if (!email || !this.isValidEmail(email)) {
                this.showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate newsletter subscription
            this.showNotification('Thank you for subscribing! We\'ll keep you updated.', 'success');
            emailInput.value = '';
        });
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Favorites
    initializeFavorites() {
        // Load favorites from localStorage
        this.favorites = JSON.parse(localStorage.getItem('aitools-favorites')) || [];
    }

    toggleFavorite(toolId) {
        const index = this.favorites.indexOf(toolId);
        
        if (index > -1) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(toolId);
        }
        
        // Save to localStorage
        localStorage.setItem('aitools-favorites', JSON.stringify(this.favorites));
        
        // Update UI
        this.updateFavoriteButtons();
    }

    isFavorite(toolId) {
        return this.favorites.includes(toolId);
    }

    updateFavoriteButtons() {
        document.querySelectorAll('.tool-favorite').forEach(btn => {
            const toolId = parseInt(btn.dataset.toolId);
            const isFav = this.isFavorite(toolId);
            
            btn.classList.toggle('active', isFav);
            btn.setAttribute('aria-label', 
                isFav ? 'Remove from favorites' : 'Add to favorites'
            );
        });
    }

    // Tool Display
    displayTools() {
        const toolsGrid = document.getElementById('tools-grid');
        const loadingState = document.getElementById('loading-state');
        const noResults = document.getElementById('no-results');
        
        if (!toolsGrid) return;

        // Show loading state
        loadingState.style.display = 'block';
        toolsGrid.style.display = 'none';
        noResults.style.display = 'none';

        // Simulate loading delay for better UX
        setTimeout(() => {
            const filteredTools = this.getFilteredTools();
            
            // Hide loading state
            loadingState.style.display = 'none';
            
            if (filteredTools.length === 0) {
                noResults.style.display = 'block';
                return;
            }
            
            // Render tools
            toolsGrid.style.display = 'block';
            toolsGrid.innerHTML = filteredTools.map(tool => this.renderToolCard(tool)).join('');
            
            // Update favorite buttons
            this.updateFavoriteButtons();
            
            // Initialize Lucide icons
            if (typeof lucide !== 'undefined') {
                setTimeout(() => lucide.createIcons(), 100);
            }
            
            // Add event listeners
            this.addToolEventListeners();
        }, 300);
    }

    getFilteredTools() {
        let filtered = [...AIToolsData.tools];
        
        // Filter by category
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(tool => tool.category === this.currentCategory);
        }
        
        // Filter by search query
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            filtered = filtered.filter(tool => 
                tool.name.toLowerCase().includes(query) ||
                tool.description.toLowerCase().includes(query) ||
                tool.company.toLowerCase().includes(query) ||
                tool.features.some(feature => feature.toLowerCase().includes(query)) ||
                tool.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }
        
        // Sort by featured status, then by rating
        return filtered.sort((a, b) => {
            if (a.isFeatured && !b.isFeatured) return -1;
            if (!a.isFeatured && b.isFeatured) return 1;
            return b.rating - a.rating;
        });
    }

    renderToolCard(tool) {
        const isFav = this.isFavorite(tool.id);
        const stars = this.generateStars(tool.rating);
        
        return `
            <div class="tool-card" data-tool-id="${tool.id}">
                <div class="tool-header">
                    <div class="tool-logo">
                        ${tool.logo ? 
                            `<img src="${tool.logo}" alt="${tool.name}" class="tool-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">` : 
                            ''
                        }
                        <i data-lucide="cpu" class="tool-logo-icon" style="${tool.logo ? 'display: none;' : ''}"></i>
                    </div>
                    <div class="tool-info">
                        <h3 class="tool-name">${tool.name}</h3>
                        <p class="tool-company">${tool.company}</p>
                    </div>
                </div>
                
                <div class="tool-rating">
                    <div class="rating-stars">
                        ${stars}
                    </div>
                    <span class="rating-value">${tool.rating}</span>
                    <span class="rating-count">(${tool.ratingCount.toLocaleString()})</span>
                </div>
                
                <div class="tool-category">
                    <i data-lucide="${this.getCategoryIcon(tool.category)}" class="category-icon"></i>
                    ${this.getCategoryName(tool.category)}
                </div>
                
                <p class="tool-description">${tool.description}</p>
                
                <div class="tool-features">
                    ${tool.features.slice(0, 3).map(feature => 
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                </div>
                
                <div class="tool-actions">
                    <a href="${tool.website}" target="_blank" rel="noopener noreferrer" class="tool-btn" onclick="event.stopPropagation();">
                        <i data-lucide="external-link" class="tool-btn-icon"></i>
                        Visit Tool
                    </a>
                    <button class="tool-favorite ${isFav ? 'active' : ''}" 
                            data-tool-id="${tool.id}" 
                            aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
                            onclick="event.stopPropagation(); window.aiApp.toggleFavorite(${tool.id});">
                        <i data-lucide="heart" class="favorite-icon"></i>
                    </button>
                </div>
            </div>
        `;
    }

    addToolEventListeners() {
        // Add click handlers for tool cards
        document.querySelectorAll('.tool-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't navigate if clicking on buttons/links
                if (e.target.closest('.tool-btn, .tool-favorite')) return;
                
                const toolId = card.dataset.toolId;
                const tool = AIToolsData.tools.find(t => t.id === parseInt(toolId));
                if (tool) {
                    window.open(tool.website, '_blank', 'noopener,noreferrer');
                }
            });
        });
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let stars = '';
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars += '<i data-lucide="star" class="star"></i>';
        }
        
        // Half star
        if (hasHalfStar) {
            stars += '<i data-lucide="star-half" class="star"></i>';
        }
        
        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i data-lucide="star" class="star empty"></i>';
        }
        
        return stars;
    }

    getCategoryIcon(categoryId) {
        const category = AIToolsData.categories.find(c => c.id === categoryId);
        return category ? category.icon : 'grid-3x3';
    }

    getCategoryName(categoryId) {
        const category = AIToolsData.categories.find(c => c.id === categoryId);
        return category ? category.name : 'Other';
    }

    // Active Filters
    updateActiveFilters() {
        const activeFilters = document.getElementById('active-filters');
        if (!activeFilters) return;
        
        let filters = [];
        
        if (this.currentCategory !== 'all') {
            const category = AIToolsData.categories.find(c => c.id === this.currentCategory);
            if (category) {
                filters.push({
                    type: 'category',
                    id: category.id,
                    label: category.name,
                    icon: category.icon
                });
            }
        }
        
        if (this.searchQuery) {
            filters.push({
                type: 'search',
                id: 'search',
                label: `"${this.searchQuery}"`,
                icon: 'search'
            });
        }
        
        activeFilters.innerHTML = filters.map(filter => `
            <div class="active-filter">
                <i data-lucide="${filter.icon}" style="width: 14px; height: 14px;"></i>
                ${filter.label}
                <button class="filter-remove" data-filter-type="${filter.type}" data-filter-id="${filter.id}">
                    <i data-lucide="x" style="width: 10px; height: 10px;"></i>
                </button>
            </div>
        `).join('') + (filters.length > 0 ? `
            <button class="clear-filters-btn" id="clear-filters-btn">
                <i data-lucide="x" style="width: 14px; height: 14px;"></i>
                Clear All
            </button>
        ` : '');
        
        // Initialize icons
        if (typeof lucide !== 'undefined') {
            setTimeout(() => lucide.createIcons(), 50);
        }
        
        // Add event listeners
        this.addFilterEventListeners();
    }

    addFilterEventListeners() {
        // Remove individual filter
        document.querySelectorAll('.filter-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const type = btn.dataset.filterType;
                const id = btn.dataset.filterId;
                
                if (type === 'category') {
                    this.setActiveCategory('all');
                } else if (type === 'search') {
                    this.searchQuery = '';
                    document.getElementById('search-input').value = '';
                    this.displayTools();
                }
                
                this.updateActiveFilters();
            });
        });
        
        // Clear all filters
        const clearBtn = document.getElementById('clear-filters-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.currentCategory = 'all';
                this.searchQuery = '';
                document.getElementById('search-input').value = '';
                
                // Reset category pills
                document.querySelectorAll('.category-pill').forEach(pill => {
                    pill.classList.remove('active');
                });
                document.querySelector('[data-category="all"]').classList.add('active');
                
                this.updateActiveFilters();
                this.displayTools();
            });
        }
    }

    // Statistics
    updateStats() {
        const stats = {
            total: AIToolsData.tools.length,
            categories: AIToolsData.categories.filter(c => c.id !== 'all').length,
            free: AIToolsData.tools.filter(t => t.isFree).length
        };
        
        document.querySelector('.stat-number').textContent = `${stats.total}+`;
        document.querySelectorAll('.stat-item .stat-number')[1].textContent = `${stats.categories}+`;
        document.querySelectorAll('.stat-item .stat-number')[2].textContent = 'Free';
    }

    // Notifications
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info'}" class="notification-icon"></i>
                <span class="notification-message">${message}</span>
                <button class="notification-close">
                    <i data-lucide="x" class="notification-close-icon"></i>
                </button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto-hide after 5 seconds
        setTimeout(() => this.hideNotification(notification), 5000);
        
        // Close button handler
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.hideNotification(notification);
        });
    }

    hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Initialize app when script loads
window.aiApp = new AIToolsApp();