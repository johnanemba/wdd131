document.addEventListener("DOMContentLoaded", function () {
    // Update footer with current year and last modified date
    const yearSpan = document.getElementById("footer-year");
    const modifiedSpan = document.getElementById("last-modified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedSpan) {
        const modifiedDate = new Date(document.lastModified);
        modifiedSpan.textContent = `Last Updated: ${modifiedDate.toLocaleDateString()} ${modifiedDate.toLocaleTimeString()}`;
    }

    console.log("Screen Width: " + window.innerWidth);

    // Mobile Menu Toggle
    const menuButton = document.getElementById("menu-toggle");
    const navList = document.getElementById("menu");

    if (menuButton && navList) {
        menuButton.addEventListener("click", () => {
            const isHidden = navList.classList.toggle("hidden");
            menuButton.textContent = isHidden ? "☰" : "✖";
            menuButton.setAttribute("aria-expanded", !isHidden);
        });
    }
});
