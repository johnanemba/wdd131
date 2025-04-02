document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.querySelector("#temple-container");
    const menuLinks = document.querySelectorAll("nav ul li a");
    const yearSpan = document.querySelector("#year");
    const lastModifiedSpan = document.querySelector("#last-modified");
    const menuToggle = document.querySelector("#menu-toggle");
    
    // Temple data array
    const temples = [
        {
            name: "Salt Lake Temple",
            location: "Salt Lake City, Utah, USA",
            dedicated: "1893-04-06",
            area: 253015,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg"
        },
        {
            name: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicated: "2019-03-10",
            area: 40000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg"
        },
        {
            name: "Nairobi Kenya Temple",
            location: "Nairobi, Kenya",
            dedicated: "2024-09-15",
            area: 17000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple.jpg"
        },
        {
            name: "Los Angeles California Temple",
            location: "Los Angeles, California, USA",
            dedicated: "1956-03-11",
            area: 190614,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple.jpg"
        },
        {
            name: "Payson Utah Temple",
            location: "Payson, Utah, USA",
            dedicated: "2015-06-07",
            area: 96530,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple.jpg"
        },
        {
            name: "Accra Ghana Temple",
            location: "Accra, Ghana",
            dedicated: "2004-01-11",
            area: 17142,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg"
        }
    ];

    // Function to create a temple card
    function createTempleCard(temple) {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.name}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
            <img src="${temple.imageUrl}" alt="${temple.name} in ${temple.location}" loading="lazy">
        `;

        return card;
    }

    // Function to display filtered temples
    function displayTemples(filter) {
        const container = document.getElementById("temple-container");
        container.innerHTML = ""; // Clear previous results

        let filteredTemples = temples;

        switch (filter) {
            case "old":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            case "all":
            default:
                break;
        }

        filteredTemples.forEach(temple => container.appendChild(createTempleCard(temple)));
    }

    // Initialize the page with all temples displayed
    displayTemples("all");

    // Event listener for filtering
    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = event.target.dataset.filter;
            displayTemples(filter);
        });
    });

    // Dynamic footer updates
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    // Hamburger Menu toggle functionality
    menuToggle.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden");

        // Accessibility: Update aria-expanded attribute
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
    });
});
