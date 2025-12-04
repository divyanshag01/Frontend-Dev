const apiURL = "https://fakestoreapi.com/products";
// Function to fetch product data
async function fetchProducts() {
    try {
        // Fetching data from API
        const response = await fetch(apiURL);
        // If API fails
        if (!response.ok) {
            throw new Error("Network response not ok");
        }
        // Convert response to JSON
        const products = await response.json();
        // Log each product detail
        products.forEach(product => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("-----------------------------");
        });
        // Optional: Display product cards on webpage
        displayProductCards(products);
    } catch (error) {
        // Error message if fetch fails
        console.log("Failed to load products. Please try again.");
    }
}
// Function to create product cards dynamically
function displayProductCards(products) {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.gap = "20px";
    products.forEach(item => {
        // Create a card box
        const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.width = "200px";
        card.style.padding = "10px";
        card.style.borderRadius = "10px";
        // Product image
        const img = document.createElement("img");
        img.src = item.image;
        img.style.width = "100%";
        // Product title
        const title = document.createElement("p");
        title.textContent = item.title;
        // Product price
        const price = document.createElement("strong");
        price.textContent = "$" + item.price;
        // Append items to card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        // Add card to container
        container.appendChild(card);
    });
    // Add container to body
    document.body.appendChild(container);
}
// Call function
fetchProducts();