const BASE_URL = 'http://localhost:3004';

document.addEventListener('DOMContentLoaded', function() {
    loadDashboard();
});

function loadDashboard() {
    // Show skeleton loaders
    showSkeletonLoaders();
    
    // Fetch all APIs simultaneously using Promise.all
    Promise.all([
        fetch(`${BASE_URL}/users`).then(res => {
            if (!res.ok) throw new Error('Users API failed');
            return res.json();
        }),
        fetch(`${BASE_URL}/orders`).then(res => {
            if (!res.ok) throw new Error('Orders API failed');
            return res.json();
        }),
        fetch(`${BASE_URL}/products`).then(res => {
            if (!res.ok) throw new Error('Products API failed');
            return res.json();
        })
    ])
    .then(([users, orders, products]) => {
        // All APIs succeeded
        displayDashboard(users.length, orders.length, products.length);
        hideWarning();
    })
    .catch(error => {
        console.error('Error loading dashboard:', error);
        // If ANY API fails, show warning but still display whatever data we can get
        showWarning();
        loadDashboardWithFallback();
    });
}

function loadDashboardWithFallback() {
    // Try to load each API individually
    const promises = [
        fetch(`${BASE_URL}/users`).then(res => res.ok ? res.json() : []).catch(() => []),
        fetch(`${BASE_URL}/orders`).then(res => res.ok ? res.json() : []).catch(() => []),
        fetch(`${BASE_URL}/products`).then(res => res.ok ? res.json() : []).catch(() => [])
    ];
    
    Promise.all(promises)
        .then(([users, orders, products]) => {
            displayDashboard(users.length, orders.length, products.length);
        });
}

function showSkeletonLoaders() {
    const dashboardGrid = document.getElementById('dashboardGrid');
    dashboardGrid.innerHTML = `
        <div class="skeleton-card">
            <div class="skeleton skeleton-icon"></div>
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-value"></div>
            <div class="skeleton skeleton-label"></div>
        </div>
        <div class="skeleton-card">
            <div class="skeleton skeleton-icon"></div>
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-value"></div>
            <div class="skeleton skeleton-label"></div>
        </div>
        <div class="skeleton-card">
            <div class="skeleton skeleton-icon"></div>
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-value"></div>
            <div class="skeleton skeleton-label"></div>
        </div>
    `;
}

function displayDashboard(usersCount, ordersCount, productsCount) {
    const dashboardGrid = document.getElementById('dashboardGrid');
    dashboardGrid.innerHTML = `
        <div class="dashboard-card users-card">
            <div class="card-icon">👥</div>
            <div class="card-title">Total Users</div>
            <div class="card-value">${usersCount}</div>
            <div class="card-label">Registered Users</div>
        </div>
        <div class="dashboard-card orders-card">
            <div class="card-icon">🛒</div>
            <div class="card-title">Total Orders</div>
            <div class="card-value">${ordersCount}</div>
            <div class="card-label">Orders Placed</div>
        </div>
        <div class="dashboard-card products-card">
            <div class="card-icon">📦</div>
            <div class="card-title">Total Products</div>
            <div class="card-value">${productsCount}</div>
            <div class="card-label">Products Available</div>
        </div>
    `;
}

function showWarning() {
    const warningDiv = document.getElementById('warningMessage');
    warningDiv.textContent = '⚠️ Some data could not be loaded.';
    warningDiv.classList.add('show');
}

function hideWarning() {
    const warningDiv = document.getElementById('warningMessage');
    warningDiv.classList.remove('show');
}
