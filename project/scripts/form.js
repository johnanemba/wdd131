// Product array of objects
const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
    { id: 4, name: 'Product D' },
];

// Populate product options dynamically
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Add event listener for form submission
document.getElementById('productReviewForm').addEventListener('submit', function() {
    // Track review submissions in localStorage
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
});
