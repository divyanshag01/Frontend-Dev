$(document).ready(function() {
    const API_URL = 'http://localhost:3001/products';
    let searchTimeout;

    // Load all products initially
    loadProducts();

    // Live search on input
    $('#searchInput').on('input', function() {
        const searchQuery = $(this).val().trim();
        
        // Clear previous timeout
        clearTimeout(searchTimeout);
        
        // Show loading indicator
        $('#loadingIndicator').addClass('active');
        
        // Debounce search - wait 300ms after user stops typing
        searchTimeout = setTimeout(function() {
            if (searchQuery === '') {
                loadProducts();
            } else {
                searchProducts(searchQuery);
            }
        }, 300);
    });

    function loadProducts() {
        $.ajax({
            url: API_URL,
            method: 'GET',
            success: function(products) {
                displayProducts(products);
                $('#loadingIndicator').removeClass('active');
            },
            error: function(error) {
                console.error('Error loading products:', error);
                $('#loadingIndicator').removeClass('active');
                showError();
            }
        });
    }

    function searchProducts(query) {
        $.ajax({
            url: API_URL,
            method: 'GET',
            data: { q: query },
            success: function(products) {
                displayProducts(products);
                $('#loadingIndicator').removeClass('active');
            },
            error: function(error) {
                console.error('Error searching products:', error);
                $('#loadingIndicator').removeClass('active');
                showError();
            }
        });
    }

    function displayProducts(products) {
        const resultsContainer = $('#searchResults');
        resultsContainer.empty();

        if (products.length === 0) {
            resultsContainer.html(`
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h2>No products found</h2>
                    <p>Try searching with different keywords</p>
                </div>
            `);
            return;
        }

        products.forEach(function(product) {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image" 
                         onerror="this.src='https://via.placeholder.com/300x220?text=No+Image'">
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">₹${product.price.toLocaleString()}</div>
                    </div>
                </div>
            `;
            resultsContainer.append(productCard);
        });
    }

    function showError() {
        $('#searchResults').html(`
            <div class="no-results">
                <div class="no-results-icon">⚠️</div>
                <h2>Error loading products</h2>
                <p>Please make sure JSON Server is running on port 3001</p>
            </div>
        `);
    }
});
