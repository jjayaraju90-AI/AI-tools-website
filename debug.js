// Debug script to identify common issues
// Add this temporarily to your HTML to debug button issues

(function debugButtons() {
    console.log('🔍 Starting button debug...');
    
    // 1. Check if DOM is loaded
    console.log('Document ready state:', document.readyState);
    
    // 2. Check if required elements exist
    const requiredElements = [
        'category-filters',
        'search-input', 
        'search-btn',
        'grid-view-btn',
        'list-view-btn',
        'mobile-menu-btn',
        'tools-grid',
        'newsletter-form'
    ];
    
    requiredElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            console.log(`✅ Found element: ${id}`);
        } else {
            console.error(`❌ Missing element: ${id}`);
        }
    });
    
    // 3. Check if AIToolsData is loaded
    if (typeof AIToolsData !== 'undefined') {
        console.log('✅ AIToolsData loaded with', AIToolsData.tools.length, 'tools');
    } else {
        console.error('❌ AIToolsData not loaded!');
    }
    
    // 4. Check if main app exists
    if (window.aiApp) {
        console.log('✅ Main app initialized');
    } else {
        console.error('❌ Main app not initialized!');
    }
    
    // 5. Test button click detection
    function testButtonClick(id) {
        const btn = document.getElementById(id);
        if (btn) {
            console.log(`🔘 Testing click on ${id}`);
            btn.addEventListener('click', function handler(e) {
                console.log(`✅ Click detected on ${id}`);
                btn.removeEventListener('click', handler);
            });
        }
    }
    
    // Test key buttons
    ['search-btn', 'grid-view-btn', 'list-view-btn', 'mobile-menu-btn'].forEach(testButtonClick);
    
    // 6. Check for JavaScript errors
    window.addEventListener('error', function(e) {
        console.error('🚨 JavaScript Error:', e.message, 'at line', e.lineno);
    });
    
    // 7. Test search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            console.log('🔍 Search input:', e.target.value);
        });
    }
    
    console.log('✅ Debug setup complete. Try clicking buttons and check console.');
})();