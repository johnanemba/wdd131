document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.querySelector("#temple-container");
    const menuLinks = document.querySelectorAll("nav ul li a");
    const yearSpan = document.querySelector("#year");
    const lastModifiedSpan = document.querySelector("#last-modified");
    const menuToggle = document.querySelector("#menu-toggle");

    // Temple data array with working images
    const temples = [
        {
            name: "Salt Lake Temple",
            location: "Salt Lake City, Utah, USA",
            dedicated: "1893-04-06",
            area: 253015,
            imageUrl: "https://churchofjesuschristtemples.org/salt-lake-temple/photographs/"
        },
        {
            name: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicated: "2019-03-10",
            area: 40000,
            imageUrl: "https://churchofjesuschristtemples.org/rome-italy-temple/photographs/"
        },
        {
            name: "Nairobi Kenya Temple",
            location: "Nairobi, Kenya",
            dedicated: "2024-09-15",
            area: 17000,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/93148bc4e2b74c79902baf7567e31a02"
        },
        {
            name: "Los Angeles California Temple",
            location: "Los Angeles, California, USA",
            dedicated: "1956-03-11",
            area: 190614,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/los-angeles-temple.jpg" // Corrected image URL
        },
        {
            name: "Payson Utah Temple",
            location: "Payson, Utah, USA",
            dedicated: "2015-06-07",
            area: 96530,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/0fbd8752b3194ebd9be9338be689ccaa"
        },
        {
            name: "Accra Ghana Temple",
            location: "Accra, Ghana",
            dedicated: "2004-01-11",
            area: 17142,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/640%2C/0/default.jpg"
        },
        {
            name: "Washington D.C. Temple",
            location: "Kensington, Maryland, USA",
            dedicated: "1974-11-19",
            area: 160000,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/3e7f8a9b1e2b4c3f8b5c5d3f0b3a0a1b"
        },
        {
            name: "Brigham City Utah Temple",
            location: "Brigham City, Utah, USA",
            dedicated: "2012-09-23",
            area: 70000,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/6d8f2c6c4d1a4e4e8a5c8f9e7c5a0b3d"
        }
    ];

    // Function to create a temple card
    function createTempleCard(temple) {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.name} in ${temple.location}`;
        img.loading = "lazy";
        img.crossOrigin = "anonymous"; // Fix CORS issue

        // If image fails to load, use a placeholder
        img.onerror = () => {
            img.src = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"; // More relevant fallback
            img.alt = "Image not available";
        };

        card.innerHTML = `
            <h3>${temple.name}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
        `;

        card.appendChild(img);
        return card;
    }

    // Function to display filtered temples
    function displayTemples(filter) {
        const container = document.getElementById("temple-container");
        container.style.opacity = "0"; // Fade out

        setTimeout(() => {
            container.innerHTML = "";

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
                    filteredTemples = temples.filter(t => t.area < 50000); // Adjusted threshold
                    break;
                case "all":
                default:
                    break;
            }

            filteredTemples.forEach(temple => container.appendChild(createTempleCard(temple)));

            container.style.opacity = "1"; // Fade back in
        }, 300);
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

        // Toggle aria-hidden for accessibility
        menu.setAttribute("aria-hidden", isExpanded);
    });
});