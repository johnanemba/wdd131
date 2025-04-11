// Function to add item to the list
function addItem() {
    const newItem = document.getElementById('new-item').value;  // Get the value from input field
    if (newItem !== "") {
        const li = document.createElement('li');  // Create a new list item
        li.textContent = newItem;  // Set the text content of the list item
        document.getElementById('items-list').appendChild(li);  // Add the item to the list
        document.getElementById('new-item').value = "";  // Clear the input field
    }
}

// Footer year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    // Toggle the hidden class to show/hide the menu
    menu.classList.toggle("hidden");

    // Update the aria-expanded attribute for accessibility
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);

    // Update the aria-hidden attribute for the menu
    menu.setAttribute("aria-hidden", isExpanded);
});
