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
            imageUrl: "https://www.churchofjesuschrist.org/imgs/cd4d22a965af18a50f8589bb1b917859d5935209/full/!1920%2C1285/0/default"
        },
        {
            name: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicated: "2019-03-10",
            area: 40000,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/640%2C/0/default"
        },
        {
            name: "tokyo Japan Temple",
            location: "Tokyo, Japan",
            dedicated: "2021-01-10",
            area: 52590,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/640%2C/0/default"
        },
        {
            name: "Los Angeles California Temple",
            location: "Los Angeles, California, USA",
            dedicated: "1956-03-11",
            area: 190614,
            imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/Los-Angeles-California-Temple2.jpg"
        },
        {
            name: "Payson Utah Temple",
            location: "Payson, Utah, USA",
            dedicated: "2015-06-07",
            area: 96530,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/800x500/payson-utah-temple-daylight-1416668-wallpaper.jpg"
        },
        {
            name: "Accra Ghana Temple",
            location: "Accra, Ghana",
            dedicated: "2004-01-11",
            area: 17142,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/ea817531789318cff9d81198cdc39923708b7b79/full/500%2C/0/default"
        },
        {
            name: "Washington D.C. Temple",
            location: "Kensington, Maryland, USA",
            dedicated: "1974-11-19",
            area: 160000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-29515-thumb.jpg"
        },
        {
            name: "Brigham City Utah Temple",
            location: "Brigham City, Utah, USA",
            dedicated: "2012-09-23",
            area: 70000,
            imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB--YdZgEWyqOAiNH1c3HwfsOghC3cw4hh_2PyMZz7BhUtOOZ9yfvF9HjVwGG5oz-U0MpgZJ-uffpEFbVRKbLgbGg2Sb_yib0Yq9T7cYS2HwP48F8S-t8lJO2-azUJoL5xxcbSEa=s1360-w1360-h1020"
        },
        {
            name: "Paris France Temple",
            location: "Le Chesnay, France",
            dedicated: "2017-05-21",
            area: 44000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/800x500/paris-france-temple-exterior-1905503.jpg"
        },
        {
            name: "Johannesburg South Africa Temple",
            location: "Johannesburg, South Africa",
            dedicated: "1985-08-24",
            area: 19000,
            imageUrl: "https://www.churchofjesuschrist.org/media/image/johannesburg-south-africa-temple-lds-e44b3c8?lang=eng&collectionId=644db7259bef4743a8530dcb551ba116"
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
