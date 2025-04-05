document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.querySelector("#temple-container");
    const menuLinks = document.querySelectorAll("nav ul li a");
    const yearSpan = document.querySelector("#year");
    const lastModifiedSpan = document.querySelector("#last-modified");
    const menuToggle = document.querySelector("#menu-toggle");

    // Full temple array (10 temples total)
    const temples = [
        {
            name: "Salt Lake Temple",
            location: "Salt Lake City, Utah, USA",
            dedicated: "1893-04-06",
            area: 253015,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-35082.jpg"
        },
        {
            name: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicated: "2019-03-10",
            area: 40000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-26076.jpg"
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
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-1243.jpg"
        },
        {
            name: "Payson Utah Temple",
            location: "Payson, Utah, USA",
            dedicated: "2015-06-07",
            area: 96530,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-12841.jpg"
        },
        {
            name: "Accra Ghana Temple",
            location: "Accra, Ghana",
            dedicated: "2004-01-11",
            area: 17142,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-258.jpg"
        },
        {
            name: "Washington D.C. Temple",
            location: "Kensington, Maryland, USA",
            dedicated: "1974-11-19",
            area: 160000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-dc-temple/washington-dc-temple-1844.jpg"
        },
        {
            name: "Brigham City Utah Temple",
            location: "Brigham City, Utah, USA",
            dedicated: "2012-09-23",
            area: 70000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-9334.jpg"
        },
        {
            name: "Paris France Temple",
            location: "Le Chesnay, France",
            dedicated: "2017-05-21",
            area: 44000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-13238.jpg"
        },
        {
            name: "Johannesburg South Africa Temple",
            location: "Johannesburg, South Africa",
            dedicated: "1985-08-24",
            area: 19000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-520.jpg"
        }
    ];

    // Create and return a temple card
    function createTempleCard(temple) {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.name} in ${temple.location}`;
        img.loading = "lazy";
        img.crossOrigin = "anonymous";
        img.onerror = () => {
            img.src = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
            img.alt = "Image not available";
        };

        const name = document.createElement("h3");
        name.textContent = temple.name;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        return card;
    }

    // Display filtered temples
    function displayTemples(filter) {
        templeContainer.style.opacity = "0";

        setTimeout(() => {
            templeContainer.innerHTML = "";

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
                    filteredTemples = temples.filter(t => t.area < 50000);
                    break;
                case "all":
                default:
                    break;
            }

            filteredTemples.forEach(temple => templeContainer.appendChild(createTempleCard(temple)));

            templeContainer.style.opacity = "1";
        }, 300);
    }

    // Initialize display
    displayTemples("all");

    // Filter menu event listeners
    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = event.target.dataset.filter;
            displayTemples(filter);
        });
    });

    // Footer year and last modified date
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    // Hamburger menu toggle
    menuToggle.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden");

        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        menu.setAttribute("aria-hidden", isExpanded);
    });
});
