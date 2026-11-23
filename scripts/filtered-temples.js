
document.addEventListener("DOMContentLoaded", () => {

    // Select HTML elements
    const templeContainer = document.querySelector("#temple-container");
    const menuLinks = document.querySelectorAll("#menu a[data-filter]");
    const yearSpan = document.querySelector("#year");
    const lastModifiedSpan = document.querySelector("#last-modified");
    const menuToggle = document.querySelector("#menu-toggle");
    const menu = document.querySelector("#menu");

    // Temple array: Original seven temples plus three additional temples
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005-08-07",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888-05-21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015-06-07",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020-05-02",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974-11-19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986-01-10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983-12-02",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },

        // Three additional temples
        {
            templeName: "Salt Lake Temple",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893-04-06",
            area: 253015,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Salt_Lake_Temple%2C_Utah_-_Sept_2004-2.jpg/330px-Salt_Lake_Temple%2C_Utah_-_Sept_2004-2.jpg"
        },
        {
            templeName: "Johannesburg South Africa Temple",
            location: "Johannesburg, South Africa",
            dedicated: "1985-08-24",
            area: 19000,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/Johannesburg_Temple_from_skyline.jpeg"
        },
        {
            templeName: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicated: "2019-03-10",
            area: 40000,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/RomeTempleatSunset.jpg/330px-RomeTempleatSunset.jpg"
        }
    ];

    // Create a temple card dynamically
    function createTempleCard(temple) {

        const card = document.createElement("article");
        card.classList.add("temple-card");

        // Temple image
        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple in ${temple.location}`;
        image.loading = "lazy";
        image.decoding = "async";

        // Temple name
        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        // Temple location
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        // Format dedication date
        const dedicationDate = new Date(`${temple.dedicated}T00:00:00`);

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${dedicationDate.toLocaleDateString(
            "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        )}`;

        // Temple area
        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq. ft.`;

        // Add elements to card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        return card;
    }

    // Display temples based on selected filter
    function displayTemples(filter = "all") {

        templeContainer.innerHTML = "";

        let filteredTemples = temples;

        switch (filter) {

            case "old":
                filteredTemples = temples.filter(temple =>
                    new Date(temple.dedicated).getFullYear() < 1900
                );
                break;

            case "new":
                filteredTemples = temples.filter(temple =>
                    new Date(temple.dedicated).getFullYear() > 2000
                );
                break;

            case "large":
                filteredTemples = temples.filter(temple =>
                    temple.area > 90000
                );
                break;

            case "small":
                filteredTemples = temples.filter(temple =>
                    temple.area < 10000
                );
                break;

            case "all":
            default:
                filteredTemples = temples;
                break;
        }

        // Generate cards dynamically
        filteredTemples.forEach(temple => {
            const card = createTempleCard(temple);
            templeContainer.appendChild(card);
        });
    }

    // Navigation filter event listeners
    menuLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const filter = link.dataset.filter;

            displayTemples(filter);

            // Close mobile navigation after selection
            menu.classList.add("hidden");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });

    });

    // Hamburger menu functionality
    menuToggle.addEventListener("click", () => {

        const isExpanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menu.classList.toggle("hidden");

        menuToggle.setAttribute("aria-expanded", String(!isExpanded));

        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation menu" : "Close navigation menu"
        );

    });

    // Display all temples when page loads
    displayTemples("all");

    // Footer copyright year
    yearSpan.textContent = new Date().getFullYear();

    // Footer last modified date
    const lastModified = new Date(document.lastModified);

    lastModifiedSpan.textContent = lastModified.toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short"
    });

});
